import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Wrapper from "./profilecss.js";
import axiosInstance from "../../axios/axiosInstance";
import { FaArrowLeft, FaFilter, FaUser } from "react-icons/fa";

const ProfilePage = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // user_id
  const location = useLocation();

  const [attendee, setAttendee] = useState(location.state?.attendee || null);
  const [eventList, setEventList] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  const isFirstLoad = useRef(true);

  // 🔹 Load Events by User
  useEffect(() => {
    const fetchUserEvents = async () => {
      try {
        const res = await axiosInstance.get(
          `/api/admin/user/${id}/events?page=1&limit=100`
        );

        if (res.data?.status === "success") {
          setEventList(res.data.data || []);
        } else {
          setEventList([]);
        }
      } catch (error) {
        console.error("Error fetching user events:", error.response?.data || error);
        setEventList([]);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchUserEvents();
  }, [id]);

  // 🔹 View connections (Leads by Event)
  const handleViewConnection = async (event) => {
    try {
      const res = await axiosInstance.get(
        `/api/admin/event/${event.id}/leads?page=1&limit=100`
      );

      setSelectedEvent({
        ...event,
        connections: res.data?.data || [],
      });
    } catch (error) {
      console.error("Error fetching event leads:", error.response?.data || error);
      setSelectedEvent({
        ...event,
        connections: [],
      });
    }
  };

  // 🔹 Leads without events
  const handleLeadsWithoutEvents = async () => {
    try {
      const res = await axiosInstance.get(
        `/admin/user/${id}/leads/no-event?page=1&limit=100`
      );

      setSelectedEvent({
        name: "Leads Without Events",
        connections: res.data?.data || [],
      });
    } catch (error) {
      console.error("Error fetching leads without events:", error.response?.data || error);
      setSelectedEvent({
        name: "Leads Without Events",
        connections: [],
      });
    }
  };

  if (loading) {
    return <p style={{ textAlign: "center", marginTop: "20px" }}>Loading...</p>;
  }

  return (
    <Wrapper>
      <div className="user-leads-header">
        <button className="back-button" onClick={() => navigate(-1)}>
          <FaArrowLeft />
        </button>

        <h2 className="profile-header">User Leads</h2>

        <button
          className="leads-without-events-btn"
          onClick={handleLeadsWithoutEvents}
        >
          <FaUser />
          Leads Without Events
        </button>
      </div>

      <div className="wholeprofile">
        <div className="event-list-container">
          <h3 className="event-list-title">Events Attended</h3>

          {eventList.length > 0 ? (
            <div className="event-table-container">
              <table className="event-table">
                <thead>
                  <tr>
                    <th>S.N.</th>
                    <th>Event Name</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {eventList.map((event, index) => (
                    <tr key={event.id}>
                      <td>{index + 1}</td>
                      <td className="event-name">
                        <div className="event-text">{event.name}</div>
                      </td>
                      <td>
                        <button
                          className="view-connection-btn"
                          onClick={() => handleViewConnection(event)}
                        >
                          View Connection
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="no-events">No events available</p>
          )}
        </div>
      </div>

      {selectedEvent && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>
              {selectedEvent.name} - Connections:{" "}
              {selectedEvent.connections.length}
            </h2>

            {selectedEvent.connections.length > 0 ? (
              <ul>
                {selectedEvent.connections.map((conn, index) => (
                  <li key={index}>
                    <strong>User ID:</strong> {conn.user_id} |{" "}
                    <strong>Name:</strong> {conn.first_name} {conn.last_name} |{" "}
                    <strong>Joined:</strong>{" "}
                    {new Date(conn.created_at).toLocaleString()}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No Connections Available</p>
            )}

            <button
              className="close-modal-btn"
              onClick={() => setSelectedEvent(null)}
            >
              ❌
            </button>
          </div>
        </div>
      )}
    </Wrapper>
  );
};

export default ProfilePage;
