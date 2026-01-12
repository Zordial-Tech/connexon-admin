// index.jsx
import React, { useState } from "react";
import {
  Wrapper,
  PageHeader,
  Card,
  SectionHeader,
  LimitsRow,
  ValueText,
  ActionBtn,
  ButtonGroup,
  TemplateHeader,
  TemplateList,
  TemplateItem,
  ModalOverlay,
  ModalCard,
  InputGroup,
  TemplateScroll
} from "./style";
import { FiEdit2, FiTrash2, FiPlus } from "react-icons/fi";

// ---------- STATIC DATA ----------
const DEFAULT_LIMITS = { events: 50, leads: 200 };

const INITIAL_TEMPLATES = [
  { id: 1, name: "New Lead", subject: "New lead received", body: "You have a new lead." },
  { id: 2, name: "Event Reminder", subject: "Event reminder", body: "Your event is coming soon." },
];

const Setting = () => {
  const [limits, setLimits] = useState(DEFAULT_LIMITS);
  const [editingLimits, setEditingLimits] = useState(false);
  const [tempLimits, setTempLimits] = useState(limits);

  const [templates, setTemplates] = useState(INITIAL_TEMPLATES);
  const [activeTemplate, setActiveTemplate] = useState(null);

  const saveLimits = () => {
    setLimits(tempLimits);
    setEditingLimits(false);
  };

  const saveTemplate = () => {
    if (activeTemplate.id) {
      setTemplates((prev) => prev.map((t) => (t.id === activeTemplate.id ? activeTemplate : t)));
    } else {
      setTemplates((prev) => [...prev, { ...activeTemplate, id: Date.now() }]);
    }
    setActiveTemplate(null);
  };

  const deleteTemplate = (id) => {
    setTemplates((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <Wrapper>
      <PageHeader>
        <h2>Settings</h2>
        <p>Manage usage limits and notification templates</p>
      </PageHeader>

      {/* USER LIMITS */}
      <Card>
        <SectionHeader>
          <h3>User Usage Limits</h3>
          {!editingLimits && (
            <ActionBtn onClick={() => setEditingLimits(true)}><FiEdit2 /> Edit</ActionBtn>
          )}
        </SectionHeader>

        <LimitsRow>
          <span>Event Limit</span>
          {editingLimits ? (
            <input
              type="number"
              value={tempLimits.events}
              onChange={(e) => setTempLimits({ ...tempLimits, events: e.target.value })}
            />
          ) : (
            <ValueText>{limits.events}</ValueText>
          )}
        </LimitsRow>

        <LimitsRow>
          <span>Lead Limit</span>
          {editingLimits ? (
            <input
              type="number"
              value={tempLimits.leads}
              onChange={(e) => setTempLimits({ ...tempLimits, leads: e.target.value })}
            />
          ) : (
            <ValueText>{limits.leads}</ValueText>
          )}
        </LimitsRow>

        {editingLimits && (
          <ButtonGroup>
            <ActionBtn primary onClick={saveLimits}>Save</ActionBtn>
            <ActionBtn onClick={() => { setTempLimits(limits); setEditingLimits(false); }}>Cancel</ActionBtn>
          </ButtonGroup>
        )}
      </Card>

      {/* NOTIFICATION TEMPLATES */}
      <Card>
        <TemplateHeader>
          <h3>Notification Templates</h3>
          <ActionBtn primary onClick={() => setActiveTemplate({ name: "", subject: "", body: "" })}>
            <FiPlus /> Add Template
          </ActionBtn>
        </TemplateHeader>

        <TemplateScroll>
          <TemplateList>
            {templates.map((t) => (
              <TemplateItem key={t.id}>
                <div>
                  <h4>{t.subject}</h4>
                  <p>{t.body}</p>
                </div>

                <div>
                  <ActionBtn onClick={() => setActiveTemplate(t)}>
                    <FiEdit2 />
                  </ActionBtn>
                  <ActionBtn danger onClick={() => deleteTemplate(t.id)}>
                    <FiTrash2 />
                  </ActionBtn>
                </div>
              </TemplateItem>
            ))}
          </TemplateList>
        </TemplateScroll>

      </Card>

      {/* TEMPLATE MODAL */}
      {activeTemplate && (
        <ModalOverlay>
          <ModalCard>
            <h3>{activeTemplate.id ? "Edit Template" : "Add Template"}</h3>

            {/* <InputGroup>
              <label>Name</label>
              <input
                value={activeTemplate.name}
                onChange={(e) => setActiveTemplate({ ...activeTemplate, name: e.target.value })}
              />
            </InputGroup> */}

            <InputGroup>
              <label>Subject</label>
              <input
                value={activeTemplate.subject}
                onChange={(e) => setActiveTemplate({ ...activeTemplate, subject: e.target.value })}
              />
            </InputGroup>

            <InputGroup>
              <label>Body</label>
              <textarea
                rows="4"
                value={activeTemplate.body}
                onChange={(e) => setActiveTemplate({ ...activeTemplate, body: e.target.value })}
              />
            </InputGroup>

            <ButtonGroup>
              <ActionBtn primary onClick={saveTemplate}>Save</ActionBtn>
              <ActionBtn onClick={() => setActiveTemplate(null)}>Cancel</ActionBtn>
            </ButtonGroup>
          </ModalCard>
        </ModalOverlay>
      )}
    </Wrapper>
  );
};

export default Setting;


