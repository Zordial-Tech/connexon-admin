import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Wrapper from "./style";

const INTEGRATIONS = [
  {
    id: 1,
    orgName: "Connexon Mobile App",
    orgEmail: "tech@connexon.com",
    status: "ACTIVE",
    createdAt: "12 Jan 2025",
    lastActivity: "2 hours ago",
  },
  {
    id: 2,
    orgName: "Partner CRM",
    orgEmail: "crm@partner.com",
    status: "BLOCKED",
    createdAt: "05 Jan 2025",
    lastActivity: "—",
  },
];

const IntegrationList = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(INTEGRATIONS);

  // Enable / Disable (static for now)
  const toggleStatus = (id) => {
    setData((prev) =>
      prev.map((i) =>
        i.id === id
          ? {
            ...i,
            status: i.status === "ACTIVE" ? "BLOCKED" : "ACTIVE",
          }
          : i
      )
    );
  };

  return (
    <Wrapper>
      {/* HEADER */}
      <div className="header">
        <h1>Integrations</h1>

        <button
          className="primary"
          onClick={() => navigate("/create-integration")}
        >
          Create Integration
        </button>
      </div>

      {/* TABLE */}
      <div className="table-box">
        <table>
          <thead>
            <tr>
              <th>Organization</th>
              <th>Email</th>
              <th>Status</th>
              <th>Created</th>
              <th>Last Activity</th>
              <th className="center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {data.map((i) => (
              <tr key={i.id}>
                <td className="strong">{i.orgName}</td>
                <td>{i.orgEmail}</td>
                <td>
                  <span className={`status ${i.status.toLowerCase()}`}>
                    {i.status}
                  </span>
                </td>
                <td>{i.createdAt}</td>
                <td>{i.lastActivity}</td>

                <td className="actions">
                  {/* VIEW / EDIT */}
                  <button
                    className="btn primary-btn"
                    onClick={() => navigate(`/integration-detail/${i.id}`)}
                  >
                    View / Edit
                  </button>

                  {/* ENABLE / DISABLE */}
                  <button
                    className="btn toggle-btn"
                    onClick={() => toggleStatus(i.id)}
                  >
                    {i.status === "ACTIVE" ? "Disable" : "Enable"}
                  </button>

                  {/* ROTATE KEY */}
                  {/* <button
    className="btn warn-btn"
    onClick={() => navigate(`/integrations/${i.id}`)}
  >
    Rotate Key
  </button> */}
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Wrapper>
  );
};

export default IntegrationList;
