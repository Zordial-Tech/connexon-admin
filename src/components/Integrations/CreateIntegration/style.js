import styled from "styled-components";

const Wrapper = styled.div`
  font-family: system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
  max-width: 620px;
  padding: 24px;

  h1 {
    font-size: 22px;
    margin-bottom: 4px;
  }

  .subtitle {
    font-size: 13px;
    color: #6b7280;
    margin-bottom: 16px;
  }

  .card {
    background: #fff;
    border: 1px solid #e5e7eb;
    border-radius: 10px;
    padding: 18px;
    margin-bottom: 16px;
  }

  h3 {
    font-size: 15px;
    margin-bottom: 10px;
  }

  .field {
    margin-bottom: 14px;
  }

  label {
    display: block;
    font-size: 13px;
    margin-bottom: 4px;
    color: #374151;
  }

  input[type="text"],
  input[type="email"] {
    width: 80%;
    height: 36px;
    padding: 0 6px;
    font-size: 13px;
    border-radius: 8px;
    border: 1px solid #d1d5db;
  }

  /* Permissions */
  .permission-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    margin-top: 12px;
  }

  .permission-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 12px;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    font-size: 13px;
    cursor: pointer;
    background: #fff;
  }

  .permission-item.active {
    border-color: #7f5af0;
    background: #f5f3ff;
  }

  .permission-item input {
    pointer-events: none;
  }

  .hint {
    font-size: 12px;
    color: #6b7280;
  }

  /* Actions */
  .actions {
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 16px;
  }

  .primary {
    background: #7f5af0;
    color: #fff;
    border: none;
    padding: 8px 16px;
    border-radius: 8px;
    font-size: 13px;
    cursor: pointer;
  }

  .primary:disabled {
    background: #c7bdf5;
    cursor: not-allowed;
  }

  .secondary {
    background: #fff;
    border: 1px solid #d1d5db;
    padding: 8px 16px;
    border-radius: 8px;
    font-size: 13px;
    cursor: pointer;
  }

  /* Key */
  .key-box {
    background: #f3f4f6;
    border-radius: 8px;
    padding: 12px;
    font-family: monospace;
    font-size: 13px;
    margin-bottom: 10px;
  }

  .warning {
    font-size: 12px;
    color: #92400e;
  }

  @media (max-width: 640px) {
    .permission-list {
      grid-template-columns: 1fr;
    }
  }
`;

export default Wrapper;
