import React, { useState, useEffect } from "react";

import {
  Wrapper,
  Container,
  Header,
  Title,
  Subtitle,
  ButtonGroup,
  Button,
  Section,
  SectionHeader,
  SectionContent,
  TextArea,
  Content,
} from "./style";

import { FaEdit, FaSave, FaTimes } from "react-icons/fa";
import axiosInstance from "../../axios/axiosInstance";
import Loader from "../../components/Loader";
import ActionLoader from "../../components/ActionLoader";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Component: loads full document strings from server and allows admin edits

const TermsAndConditions = () => {
  const [termsText, setTermsText] = useState("");
  const [privacyText, setPrivacyText] = useState("");
  const [mode, setMode] = useState("terms");
  const [isEditMode, setIsEditMode] = useState(false);
  const [backupDoc, setBackupDoc] = useState(null);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState(false);

  // Fetch settings on mount
  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      try {
        const res = await axiosInstance.get("/api/app-settings");
        const data = res.data?.data || {};
        setTermsText(data.terms_and_conditions || "");
        setPrivacyText(data.privacy_policy || "");
      } catch (err) {
        console.error("Failed to fetch app settings:", err);
        toast.error("Failed to fetch app settings");
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, []);

  const handleEditSave = async () => {
    if (isEditMode) {
      // SAVE
      const terms = termsText ?? "";
      const privacy = privacyText ?? "";

      if (!terms.trim() || !privacy.trim()) {
        toast.error("Terms and Privacy cannot be empty.");
        return;
      }

      setActionLoading(true);
      
      try {
        const payload = { terms_and_conditions: terms, privacy_policy: privacy };

        try {
          await axiosInstance.put("/api/admin/app-settings", payload);
        } catch (e) {
          if (e?.response?.status === 404) {
            // fallback
            await axiosInstance.put("/api/admin/app-settings", payload);
          } else throw e;
        }

        setBackupDoc(null);
        setIsEditMode(false);
        toast.success("App settings updated");
      } catch (err) {
        console.error("Update failed:", err.response || err);
        toast.error(err.response?.data?.message || err.message || "Failed to update settings");
      } finally {
        setActionLoading(false);
      }
    } else {
      // enter edit mode
      setBackupDoc({ termsText, privacyText });
      setIsEditMode(true);
    }
  };

  const handleCancel = () => {
    if (backupDoc) {
      setTermsText(backupDoc.termsText);
      setPrivacyText(backupDoc.privacyText);
    }
    setBackupDoc(null);
    setIsEditMode(false); 
  };

  const handleReset = async () => {
    const confirmText = mode === "terms" ? "Reset Terms & Conditions to server value?" : "Reset Privacy & Policy to server value?";
    if (!window.confirm(confirmText)) return;
    setLoading(true);
    try {
      const res = await axiosInstance.get("/api/app-settings");
      const data = res.data?.data || {};
      setTermsText(data.terms_and_conditions || "");
      setPrivacyText(data.privacy_policy || "");
      toast.success("Settings reloaded");
    } catch (err) {
      console.error(err);
      toast.error("Failed to reload settings");
    } finally {
      setLoading(false);
    }
  };

  const toggleMode = () => {
    setMode((m) => (m === "terms" ? "privacy" : "terms"));
    setIsEditMode(false);
    setBackupDoc(null);
  };

  if (loading) return <Loader loading={loading} />;

  return (
    <Wrapper>
      <Container>
        <Header>
          <div>
            <Title>{mode === "terms" ? "Terms & Conditions" : "Privacy & Policy"}</Title>
            <Subtitle>Last updated: {new Date().toLocaleDateString()}</Subtitle>
          </div>

          <ButtonGroup>
            <Button onClick={toggleMode} style={{ marginRight: 8 }}>
              {mode === "terms" ? "Privacy & Policy" : "Terms & Conditions"}
            </Button>

            <Button $blue onClick={handleEditSave}>
              {isEditMode ? (
                <>
                  <FaSave style={{ marginRight: 6 }} /> Save
                </>
              ) : (
                <>
                  <FaEdit style={{ marginRight: 6 }} /> Edit
                </>
              )}
            </Button>

            {isEditMode && (
              <Button $red onClick={handleCancel}>
                <FaTimes style={{ marginRight: 6 }} /> Cancel
              </Button>
            )}
           
          </ButtonGroup>
        </Header>
        <Content>
          <Section>
            <SectionHeader />

            {isEditMode ? (
              <>
                <TextArea
                  value={mode === "terms" ? termsText : privacyText}
                  onChange={(e) => (mode === "terms" ? setTermsText(e.target.value) : setPrivacyText(e.target.value))}
                  style={{
                    minHeight: "400px",
                    maxHeight: "80vh",
                    resize: "vertical",
                    width: "100%",
                    boxSizing: "border-box",
                    overflowX: "hidden",
                    whiteSpace: "pre-wrap",
                    wordBreak: "break-word",
                  }}
                />

                <div style={{ marginTop: 12 }} />
              </>
            ) : (
              <>
                <SectionContent style={{ whiteSpace: "pre-wrap" }}>
                  {mode === "terms" ? termsText || "No content" : privacyText || "No content"}
                </SectionContent>
                <div style={{ marginTop: 12 }} />
              </>
            )}
          </Section>
        </Content>
      </Container>

      {actionLoading && <ActionLoader />}
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
    </Wrapper>
  );
};

export default TermsAndConditions;
