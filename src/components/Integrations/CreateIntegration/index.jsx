import React, { useState } from "react";
import Wrapper from "./style";

const PERMISSIONS = [
  "Read Users",
  "Create Leads",
  "View Payments",
  "Create Events",
];

const CreateIntegration = () => {
  const [step, setStep] = useState(1);
  const [orgName, setOrgName] = useState("");
  const [orgEmail, setOrgEmail] = useState("");
  const [permissions, setPermissions] = useState([]);
  const [secretKey] = useState("sk_live_9f8sd7f9sdf"); // static mock

  const togglePermission = (p) => {
    setPermissions((prev) =>
      prev.includes(p) ? prev.filter((x) => x !== p) : [...prev, p]
    );
  };

  return (
    <Wrapper>
      <h1>Create Integration</h1>
      <p className="subtitle">
        Configure system access for external applications
      </p>

      {/* STEP 1 */}
      {step === 1 && (
        <div className="card">
          <h3>Basic Information</h3>

          <div className="field">
            <label>Organization Name</label>
            <input
              value={orgName}
              onChange={(e) => setOrgName(e.target.value)}
              placeholder="e.g. Connexon Mobile App"
            />
          </div>

          <div className="field">
            <label>Organization Email</label>
            <input
              type="email"
              value={orgEmail}
              onChange={(e) => setOrgEmail(e.target.value)}
              placeholder="e.g. tech@connexon.com"
            />
          </div>

          <div className="actions">
            <button
              className="primary"
              disabled={!orgName || !orgEmail}
              onClick={() => setStep(2)}
            >
              Continue
            </button>
          </div>
        </div>
      )}

      {/* STEP 2 */}
      {step === 2 && (
        <div className="card">
          <h3>Select Permissions</h3>
          <p className="hint">
            Choose what this integration is allowed to access.
          </p>

          <div className="permission-list">
            {PERMISSIONS.map((p) => (
              <div
                key={p}
                className={`permission-item ${
                  permissions.includes(p) ? "active" : ""
                }`}
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

          <div className="actions">
            <button className="secondary" onClick={() => setStep(1)}>
              Back
            </button>
            <button
              className="primary"
              disabled={permissions.length === 0}
              onClick={() => setStep(3)}
            >
              Create & Generate Key
            </button>
          </div>
        </div>
      )}

      {/* STEP 3 */}
      {step === 3 && (
        <div className="card">
          <h3>Secret Key</h3>

          <div className="key-box">{secretKey}</div>

          <p className="warning">
            ⚠ Copy this key now. It won’t be shown again.
          </p>

          <div className="actions">
            <button
              className="primary"
              onClick={() => navigator.clipboard.writeText(secretKey)}
            >
              Copy Key
            </button>
          </div>
        </div>
      )}
    </Wrapper>
  );
};

export default CreateIntegration;
