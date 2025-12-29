import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Wrapper from "./style";
import axiosInstance from "../../axios/axiosInstance";
import Loader from "../../components/Loader";

const UserNetwork = () => {
  const navigate = useNavigate();

  // 🔹 States
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const limit = 10;
  const [pagination, setPagination] = useState({
    page: 1,
    total_pages: 1,
  });
  const [loading, setLoading] = useState(true);

  // 🔹 Fetch users (BASE API)
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axiosInstance.get(
          `/api/admin/user/with-activity?page=${page}&limit=${limit}`
        );

        if (res.data?.status === "success") {
          setUsers(res.data.data || []);
          setPagination(res.data.pagination || { page: 1, total_pages: 1 });
        } else {
          setUsers([]);
        }
      } catch (error) {
        console.error("Error fetching users:", error.response?.data || error);
        setUsers([]);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [page]);

  // 🔍 Client-side search
  const filteredUsers = users.filter((user) =>
    `${user.first_name} ${user.last_name}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  if (loading) return <Loader loading={loading} />;

  return (
    <Wrapper>
      <section className="events">
        <h1>User Network</h1>

        <div>
          <div className="search-container">
            <input
              type="text"
              placeholder="Search user..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <FaSearch className="search-icon" />
          </div>
        </div>
      </section>

      {/* Table */}
      <div className="table-container">
        <table className="attendee-table">
          <thead>
            <tr>
              <th>User ID</th>
              <th>Name</th>
              <th>Total Events</th>
              <th>Total Connections</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>

                  <td className="name-wrap">
                    <div className="name-text">
                      {user.first_name} {user.last_name}
                    </div>
                  </td>

                  <td>{user.event_count}</td>
                  <td>{user.lead_count}</td>

                  <td>
                    <Button
                      className="view-profile"
                      onClick={() =>
                        navigate(`/usernetwork/profile/${user.id}`)
                      }
                    >
                      View Leads
                    </Button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" style={{ textAlign: "center", padding: "14px" }}>
                  No users found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      
      {/* Pagination */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "16px",
          marginTop: "20px",
        }}
      >
        <Button
          disabled={page === 1}
          onClick={() => setPage((prev) => prev - 1)}
        >
          Prev
        </Button>

        <span>
          Page {pagination.page} of {pagination.total_pages}
        </span>

        <Button
          disabled={page === pagination.total_pages}
          onClick={() => setPage((prev) => prev + 1)}
        >
          Next
        </Button>
      </div>
    </Wrapper>
  );
};

export default UserNetwork;
