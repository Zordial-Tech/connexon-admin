// index.jsx
import React, { useState, useEffect } from "react";
import Wrapper from "./style";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import axiosInstance from "../../axios/axiosInstance";
import Loader from "../../components/Loader";
import ActionLoader from "../../components/ActionLoader";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SUPPORT_TYPES = [
  { type: "email", label: "Email", placeholder: "support@company.com" },
  { type: "phone", label: "Phone", placeholder: "+91 98765 43210" },
  { type: "whatsapp", label: "WhatsApp", placeholder: "+91 98765 43210" },
  { type: "website", label: "Website", placeholder: "https://company.com/support" },
];

const HelpSupportAdmin = () => {
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [formData, setFormData] = useState({});
  const [savedSupports, setSavedSupports] = useState([]);
  const [isDirty, setIsDirty] = useState(false);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState(false);
  const [appSettings, setAppSettings] = useState(null);

  const handleTypeChange = (type) => {
    setSelectedTypes((prev) => (prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]));
  };

  const handleInputChange = (type, value) => {
    setFormData((prev) => ({ ...prev, [type]: value }));
  };

  // save supports to server (PUT /admin/app-settings)
  const handleSave = () => {
    const newItems = selectedTypes.map((type) => ({ type, value: formData[type] })).filter((i) => i.value);
    const merged = [...savedSupports.filter((s) => !newItems.some((n) => n.type === s.type)), ...newItems];

    const saveToServer = async (supports) => {
      setActionLoading(true);
      try {
        let settings = appSettings;
        if (!settings) {
          const res = await axiosInstance.get("/api/app-settings");
          settings = res.data?.data || {};
          setAppSettings(settings);
        }

        const payload = {
          terms_and_conditions: settings.terms_and_conditions || "",
          privacy_policy: settings.privacy_policy || "",
          support_details: supports.reduce((acc, s) => ({ ...acc, [s.type]: s.value }), {}),
        };

        const token = localStorage.getItem("token") || localStorage.getItem("authToken");
        if (!token) throw new Error("Missing admin auth token in localStorage (token or authToken)");

        try {
          await axiosInstance.put("/admin/app-settings", payload, { headers: { Authorization: `Bearer ${token}` } });
        } catch (e) {
          if (e?.response?.status === 404) {
            await axiosInstance.put("/api/admin/app-settings", payload, { headers: { Authorization: `Bearer ${token}` } });
          } else throw e;
        }

        setSavedSupports(supports);
        setSelectedTypes([]);
        setFormData({});
        setIsDirty(false);
        toast.success("Support details saved");
      } catch (err) {
        console.error("Failed to save support details", err);
        toast.error(err.response?.data?.message || "Failed to save support details");
      } finally {
        setActionLoading(false);
      }
    };

    saveToServer(merged);
  };

  const handleCancel = () => {
    setSelectedTypes([]);
    setFormData({});
    setIsDirty(false);
  };

  const handleDelete = (type) => {
    const newSaved = savedSupports.filter((s) => s.type !== type);
    const removeFromServer = async (supports) => {
      setActionLoading(true);
      try {
        let settings = appSettings;
        if (!settings) {
          const res = await axiosInstance.get("/api/app-settings");
          settings = res.data?.data || {};
          setAppSettings(settings);
        }

        const payload = {
          terms_and_conditions: settings.terms_and_conditions || "",
          privacy_policy: settings.privacy_policy || "",
          support_details: supports.reduce((acc, s) => ({ ...acc, [s.type]: s.value }), {}),
        };

        const token = localStorage.getItem("token") || localStorage.getItem("authToken");
        if (!token) throw new Error("Missing admin auth token in localStorage (token or authToken)");

        try {
          await axiosInstance.put("/admin/app-settings", payload, { headers: { Authorization: `Bearer ${token}` } });
        } catch (e) {
          if (e?.response?.status === 404) {
            await axiosInstance.put("/api/admin/app-settings", payload, { headers: { Authorization: `Bearer ${token}` } });
          } else throw e;
        }

        setSavedSupports(supports);
        setSelectedTypes((prev) => prev.filter((t) => t !== type));
        setFormData((prev) => {
          const copy = { ...prev };
          delete copy[type];
          return copy;
        });
        toast.success("Support option removed");
      } catch (err) {
        console.error("Failed to delete support:", err);
        toast.error(err.response?.data?.message || "Failed to delete support option");
      } finally {
        setActionLoading(false);
      }
    };

    removeFromServer(newSaved);
  };

  const handleEdit = (item) => {
    setSelectedTypes([item.type]);
    setFormData({ [item.type]: item.value });
    setIsDirty(true);
  };

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      try {
        const res = await axiosInstance.get("/api/app-settings");
        const data = res.data?.data || {};
        setAppSettings(data);
        const supports = data.support_details || {};
        const arr = Object.keys(supports).map((k) => ({ type: k, value: supports[k] }));
        setSavedSupports(arr);
      } catch (err) {
        console.error("Failed to fetch app settings:", err);
        toast.error("Failed to load support details");
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, []);

  return (
    <Wrapper>
      <div className="page">
        <header className="header">Help & Support</header>

        <main className="container">
          <p className="subtitle">Configure support options</p>
          <div className="card" style={{ position: "relative", minHeight: 220 }}>
            <h2>Select Support Options</h2>

            {loading && (
              <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(255,255,255,0.6)", zIndex: 2 }}>
                <Loader loading={true} />
              </div>
            )}

            <div style={{ opacity: loading ? 0.4 : 1, pointerEvents: loading ? "none" : "auto" }}>
              <div className="checkbox-group">
                {SUPPORT_TYPES.map((item) => {
                  const savedForThis = savedSupports.some((s) => s.type === item.type);
                  const isDisabled = savedForThis;
                  const isChecked = isDisabled || selectedTypes.includes(item.type);

                  return (
                    <label key={item.type} className="checkbox-item">
                      <input
                        type="checkbox"
                        checked={isChecked}
                        disabled={isDisabled}
                        onChange={() => {
                          if (!isDisabled) {
                            handleTypeChange(item.type);
                            setIsDirty(true);
                          }
                        }}
                      />
                      {item.label}
                    </label>
                  );
                })}
              </div>

              {selectedTypes.map((type) => {
                const config = SUPPORT_TYPES.find((s) => s.type === type);

                return (
                  <div key={type} className="input-row">
                    <input
                      type="text"
                      placeholder={config.placeholder}
                      value={formData[type] || ""}
                      onChange={(e) => {
                        handleInputChange(type, e.target.value);
                        setIsDirty(true);
                      }}
                    />
                  </div>
                );
              })}

              {isDirty && (
                <div className="action-buttons">
                  <button className="primary-btn" onClick={handleSave}>
                    Save
                  </button>
                  <button className="secondary-btn" onClick={handleCancel}>
                    Cancel
                  </button>
                </div>
              )}

              {savedSupports.length > 0 && (
                <div className="saved-section">
                  <h3>Saved Support Options</h3>

                  {savedSupports.map((item) => (
                    <div className="saved-row" key={item.type}>
                      <div className="saved-info">
                        <span className="saved-type">{item.type.toUpperCase()}</span>
                        <span className="saved-value">{item.value}</span>
                      </div>

                      <div className="icons">
                        <div className="icon-btn" onClick={() => handleEdit(item)}>
                          <FiEdit2 className="icon edit-icon" />
                        </div>

                        <div className="icon-btn" onClick={() => handleDelete(item.type)}>
                          <FiTrash2 className="icon delete-icon" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
      {actionLoading && <ActionLoader />}
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
    </Wrapper>
  );
};

export default HelpSupportAdmin;
