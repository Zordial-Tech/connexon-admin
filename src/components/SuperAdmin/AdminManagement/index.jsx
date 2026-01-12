import React, { useState } from "react";
import Wrapper from "./style";

const ADMINS = [
  { id: 1, name: "Harsh Garg", email: "harsh@zordial.com", status: "APPROVED", createdAt: "10 Jan 2025" },
  { id: 2, name: "Rahul Sharma", email: "rahul@zordial.com", status: "PENDING", createdAt: "14 Jan 2025" },
  { id: 3, name: "Ankit Verma", email: "ankit@zordial.com", status: "DECLINED", createdAt: "12 Jan 2025" },
];

const AdminManagement = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("ALL");
  const [modal, setModal] = useState(null); 
  // modal = { type: "DECLINE" | "REMOVE", admin }

  const filteredAdmins = ADMINS.filter((a) => {
    const s = search.toLowerCase();
    return (
      (filter === "ALL" || a.status === filter) &&
      (a.name.toLowerCase().includes(s) ||
        a.email.toLowerCase().includes(s))
    );
  });

  return (
    <Wrapper>
      {/* HEADER */}
      <div className="header">
        <h1>All Admins</h1>
        <button className="primary">Approve All Pending</button>
      </div>

      {/* TOOLBAR */}
     {/* TOOLBAR */}
<div className="toolbar">
  <div className="search-box">
    <span className="search-icon">🔍</span>
    <input
      placeholder="Search User..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  </div>

  <select value={filter} onChange={(e) => setFilter(e.target.value)}>
    <option value="ALL">All</option>
    <option value="APPROVED">Approved</option>
    <option value="PENDING">Pending</option>
    <option value="DECLINED">Declined</option>
  </select>
</div>


      {/* TABLE */}
      <div className="table-box">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
              <th>Created</th>
              <th className="center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredAdmins.map((a) => (
              <tr key={a.id}>
                <td className="name">{a.name}</td>
                <td>{a.email}</td>
                <td>
                  <span className={`status ${a.status.toLowerCase()}`}>
                    {a.status}
                  </span>
                </td>
                <td>{a.createdAt}</td>
                <td className="actions">
  {a.status === "PENDING" && (
    <button
      className="icon-btn approve"
      title="Approve"
      onClick={() => setModal({ type: "APPROVE", admin: a })}
    >
      ✔
    </button>
  )}

  <button
    className="icon-btn decline"
    title="Decline"
    onClick={() => setModal({ type: "DECLINE", admin: a })}
  >
    🚫
  </button>

  <button
    className="icon-btn remove"
    title="Delete"
    onClick={() => setModal({ type: "REMOVE", admin: a })}
  >
    🗑
  </button>
</td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* CONFIRM MODAL */}
      {modal && (
        <div className="modal-backdrop">
          <div className="modal">
            <h3>
              {modal.type === "REMOVE"
                ? "Remove Admin"
                : "Decline Admin"}
            </h3>

            <p>
              Are you sure you want to{" "}
              {modal.type.toLowerCase()}{" "}
              <strong>{modal.admin.name}</strong>?
            </p>

            <div className="modal-actions">
              <button
                className="btn"
                onClick={() => setModal(null)}
              >
                Cancel
              </button>

              <button
                className="primary"
                onClick={() => {
                  console.log(
                    modal.type,
                    modal.admin.id
                  );
                  setModal(null);
                }}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </Wrapper>
  );
};

export default AdminManagement;
