import styled from "styled-components";

const Wrapper = styled.div`
  font-family: system-ui, -apple-system, "Segoe UI", Roboto, Arial;
  padding: 24px;
  max-width: 1100px;
  margin: auto;

  /* Header */
  .page-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
  }

  h1 {
    font-size: 22px;
    margin-bottom: 4px;
  }

  p {
    font-size: 13px;
    color: #6b7280;
  }

  /* Sections */
  .section {
    background: #fff;
    border: 1px solid #e5e7eb;
    border-radius: 10px;
    padding: 18px;
    margin-bottom: 16px;
  }

  h3 {
    font-size: 15px;
    margin-bottom: 14px;
  }

  /* Info */
  .info-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  label {
    font-size: 12px;
    color: #6b7280;
  }

  .value {
    font-size: 14px;
    margin-top: 4px;
  }

  /* Status */
  .status-toggle {
    display: inline-flex;
    gap: 10px;
    align-items: center;
    font-size: 14px;
  }

  .status-toggle.disabled {
    opacity: 0.6;
  }

  /* Permissions */
  .permissions {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }

  .permission-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #e5e7eb;
    padding: 10px 12px;
    border-radius: 8px;
    cursor: pointer;
    font-size: 13px;
  }

  .permission-item.active {
    background: #f5f3ff;
    border-color: #7f5af0;
  }

  .permission-item.disabled {
    // cursor: not-allowed;
    opacity: 0.6;
  }

  .permission-item input {
    pointer-events: none;
  }

  /* Buttons */
  .actions {
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 16px;
  }

  button {
    padding: 8px 16px;
    font-size: 13px;
    border-radius: 8px;
    border: none;
    cursor: pointer;
  }

  .primary {
    background: #7f5af0;
    color: #fff;
  }

  .secondary {
    background: #fff;
    border: 1px solid #d1d5db;
  }

  .danger {
    background: #fee2e2;
    color: #991b1b;
  }

  /* Key */
  .warning-box {
    border-color: #fcd34d;
    background: #fffbeb;
  }

  .key {
    background: #111827;
    color: #fff;
    padding: 12px;
    border-radius: 8px;
    font-family: monospace;
    margin: 10px 0;
  }

  @media (max-width: 768px) {
    .info-grid,
    .permissions {
      grid-template-columns: 1fr;
    }
  }
`;

export default Wrapper;
