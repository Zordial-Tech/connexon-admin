import React, { useState } from "react";
import Wrapper from "./style";

const MOCK_INTEGRATION = {
  id: 1,
  orgName: "Connexon Mobile App",
  orgEmail: "tech@connexon.com",
  status: "ACTIVE",
  createdAt: "12 Jan 2025",
  lastActivity: "2 hours ago",
  permissions: ["Read Users", "Create Leads", "View Payments"],
};

const ALL_PERMISSIONS = [
  "Read Users",
  "Create Leads",
  "View Payments",
  "Create Events",
];

const IntegrationDetail = () => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(MOCK_INTEGRATION.status);
  const [permissions, setPermissions] = useState(
    MOCK_INTEGRATION.permissions
  );
  const [showKey, setShowKey] = useState(false);

  const togglePermission = (p) => {
    if (!editMode) return;
    setPermissions((prev) =>
      prev.includes(p)
        ? prev.filter((x) => x !== p)
        : [...prev, p]
    );
  };

  const handleCancel = () => {
    setEditMode(false);
    setStatus(MOCK_INTEGRATION.status);
    setPermissions(MOCK_INTEGRATION.permissions);
    setShowKey(false);
  };

  return (
    <Wrapper>
      {/* PAGE HEADER */}
      <div className="page-header">
        <div>
          <h1>Integration Details</h1>
          <p>Manage access, permissions and keys</p>
        </div>

        {!editMode && (
          <button className="primary" onClick={() => setEditMode(true)}>
            Edit
          </button>
        )}
      </div>

      {/* BASIC INFO */}
      <section className="section">
        <h3>Basic Information</h3>

        <div className="info-grid">
          <div>
            <label>Organization Name</label>
            <div className="value">{MOCK_INTEGRATION.orgName}</div>
          </div>

          <div>
            <label>Organization Email</label>
            <div className="value">{MOCK_INTEGRATION.orgEmail}</div>
          </div>

          <div>
            <label>Created On</label>
            <div className="value">{MOCK_INTEGRATION.createdAt}</div>
          </div>

          <div>
            <label>Last Activity</label>
            <div className="value">{MOCK_INTEGRATION.lastActivity}</div>
          </div>
        </div>
      </section>

      {/* STATUS */}
      <section className="section">
        <h3>Status</h3>

        <label className={`status-toggle ${!editMode ? "disabled" : ""}`}>
          <input
            type="checkbox"
            disabled={!editMode}
            checked={status === "ACTIVE"}
            onChange={() =>
              setStatus(status === "ACTIVE" ? "BLOCKED" : "ACTIVE")
            }
          />
          <span>{status === "ACTIVE" ? "Active" : "Blocked"}</span>
        </label>
      </section>

      {/* PERMISSIONS */}
      <section className="section">
        <h3>Permissions</h3>

        <div className="permissions">
          {ALL_PERMISSIONS.map((p) => (
            <div
              key={p}
              className={`permission-item ${
                permissions.includes(p) ? "active" : ""
              } ${!editMode ? "disabled" : ""}`}
              onClick={() => togglePermission(p)}
            >
              <span>{p}</span>
              <input
                type="checkbox"
                checked={permissions.includes(p)}
                readOnly
              />
            </div>
          ))}
        </div>
      </section>

      {/* ACTIONS */}
      {editMode && (
        <div className="actions">
          <button className="secondary" onClick={handleCancel}>
            Cancel
          </button>

          <button className="danger" onClick={() => setShowKey(true)}>
            Rotate Key
          </button>

          <button className="primary" onClick={() => setEditMode(false)}>
            Save Changes
          </button>
        </div>
      )}

      {/* ROTATE KEY */}
      {showKey && (
        <section className="section warning-box">
          <h3>New Secret Key</h3>

          <div className="key">sk_live_x92jd82ksk92</div>

          <p>
            Copy this key now. It won’t be shown again for security reasons.
          </p>

          <button
            className="primary"
            onClick={() =>
              navigator.clipboard.writeText("sk_live_x92jd82ksk92")
            }
          >
            Copy Key
          </button>
        </section>
      )}
    </Wrapper>
  );
};

export default IntegrationDetail;
