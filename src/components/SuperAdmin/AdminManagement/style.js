import styled from "styled-components";

const Wrapper = styled.div`
  font-family: system-ui, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, Arial, sans-serif;

  padding: 20px;
  background: #eeeeec;
  min-height: calc(100vh - 70px);

  /* Header */
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
  }

  h1 {
    font-size: 26px;
    font-weight: 700;
    margin: 0;
    color: #000;
  }

  .primary {
    background: #7f5af0;
    color: #fff;
    border: none;
    padding: 10px 18px;
    border-radius: 8px;
    font-size: 14px;
    cursor: pointer;
  }

  /* Toolbar */
  .toolbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 14px;
    gap: 12px;
  }

  input,
  select {
    height: 42px;
    padding: 0 14px;
    border-radius: 10px;
    border: 1px solid #d1d5db;
    font-size: 14px;
    background: #fffaf2;
  }

  /* Table Wrapper */
  .table-box {
    background: #fffaf2;
    border-radius: 14px;
    overflow-x: auto;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  }

  table {
    width: 100%;
    border-collapse: collapse;
  }

  /* Header Row */
  thead tr {
    background: #7f5af0;
  }

  th {
    padding: 14px 16px;
    font-size: 14px;
    font-weight: 600;
    color: #ffffff;
    text-align: left;
    border-right: 1px solid rgba(255, 255, 255, 0.25);
  }

  th:last-child {
    border-right: none;
    text-align: center;
  }

  /* Body Rows */
  tbody tr {
    background: #fffaf2;
    border-bottom: 1px solid #ddd;
  }

  tbody tr:hover {
    background: #fff4e5;
  }

  td {
    padding: 16px;
    font-size: 14px;
    color: #000;
    border-right: 1px solid #ddd;
    vertical-align: middle;
  }

  td:last-child {
    border-right: none;
    text-align: center;
  }

  .name {
    font-weight: 600;
  }

  /* Status Badge */
  .status {
    padding: 6px 14px;
    font-size: 13px;
    border-radius: 999px;
    font-weight: 600;
    display: inline-block;
  }

  .status.approved {
    background: #d9f3dc;
    color: #1b7f3b;
  }

  .status.pending {
    background: #fff3cd;
    color: #8a5d00;
  }

  .status.declined {
    background: #f8d7da;
    color: #842029;
  }

  /* Actions */
  .actions {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  .btn {
    width: 40px;
    height: 40px;
    border-radius: 10px;
    border: none;
    background: #f1f1f1;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.15s ease;
  }

  .btn:hover {
    background: #e5e5e5;
  }

  .approve {
    color: #1b7f3b;
  }

  .decline {
    color: #c0392b;
  }

  .remove {
    color: #e74c3c;
  }

  /* Modal */
  .modal-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;
  }

  .modal {
    background: #fffaf2;
    padding: 22px;
    width: 340px;
    border-radius: 14px;
  }

  .modal h3 {
    margin: 0 0 8px;
    font-size: 18px;
  }

  .modal p {
    font-size: 14px;
    color: #333;
  }

  .modal-actions {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    margin-top: 16px;
  }
    /* Search Bar */
.search-box {
  display: flex;
  align-items: center;
  background: #fffaf2;
  padding: 0 14px;
  height: 42px;
  border-radius: 999px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.08);
  gap: 8px;
  flex: 1;
}

.search-box input {
  border: none;
  outline: none;
  background: transparent;
  font-size: 14px;
  width: 100%;
}

.search-icon {
  font-size: 14px;
  opacity: 0.6;
}

/* Toggle Switch */
.toggle {
  width: 44px;
  height: 24px;
  border-radius: 999px;
  background: #d1d5db;
  position: relative;
  margin: auto;
}

.toggle::after {
  content: "";
  width: 18px;
  height: 18px;
  background: #fff;
  border-radius: 50%;
  position: absolute;
  top: 3px;
  left: 4px;
  transition: all 0.2s ease;
}

.toggle.on {
  background: #7f5af0;
}

.toggle.on::after {
  left: 22px;
}

.toggle.disabled {
  opacity: 0.5;
}

/* Action Buttons */
.icon-btn {
  width: 36px;
  height: 36px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f1f1f1;
}

.icon-btn:hover {
  background: #e5e5e5;
}

.icon-btn.approve {
  color: #16a34a;
}

.icon-btn.decline {
  color: #dc2626;
}

.icon-btn.remove {
  color: #6b7280;
}


  @media (max-width: 768px) {
    .toolbar {
      flex-direction: column;
      align-items: stretch;
    }

    .actions {
      flex-wrap: wrap;
    }
  }
`;

export default Wrapper;
