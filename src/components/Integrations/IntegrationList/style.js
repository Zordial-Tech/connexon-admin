import styled from "styled-components";

const Wrapper = styled.div`
  font-family: system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
  padding: 20px;

  .header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 14px;
  }

  h1 {
    font-size: 20px;
    margin: 0;
  }
    
  
  .primary {
    background: #7f5af0;
    color: #fff;
    border: none;
    padding: 8px 14px;
    border-radius: 6px;
    font-size: 13px;
    cursor: pointer;
  }

  .table-box {
    background: #fff;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    overflow-x: auto;
  }

  table {
    width: 100%;
    border-collapse: collapse;
  }


  th,
  td {
    padding: 12px;
    font-size: 14px;
    border-bottom: 1px solid #e5e7eb;
    text-align: left;
  }

  th {
    background: #7f5af0;
    font-weight: 600;
    color: #fff;
  }

  .center {
    text-align: center;
    
  }

  .strong {
    font-weight: 500;
  }

  .status {
    padding: 3px 8px;
    border-radius: 4px;
    font-size: 14px;
  }

  .status.active {
    background: #e6f4ea;
    color: #137333;
  }

  .status.blocked {
    background: #fde8e8;
    color: #991b1b;
  }

  .actions {
    display: flex;
    justify-content: center;
    gap: 6px;
  }

  .btn {
    border: 1px solid #d1d5db;
    background: #fff;
    padding: 4px 8px;
    font-size: 12px;
    border-radius: 4px;
    cursor: pointer;
  }
.actions {
  display: flex;
  justify-content: center;
  gap: 8px;
  flex-wrap: wrap;
}

/* Base button */
.btn {
  border: 1px solid #d1d5db;
  background: #fff;
  padding: 8px 18px;
  font-size: 12px;
  border-radius: 6px;
  cursor: pointer;
  white-space: nowrap;
}

/* Primary action */
.primary-btn {
  background: #7f5af0;
  color: #fff;
  border-color: #7f5af0;
}

.primary-btn:hover {
  opacity: 0.9;
}

/* Enable / Disable */
.toggle-btn {
  color: #111827;
}

.toggle-btn:hover {
  background: #f3f4f6;
}

/* Rotate key (danger but subtle) */
.warn-btn {
  color: #92400e;
  border-color: #f3e8d2;
}

.warn-btn:hover {
  background: #fff7ed;
}

  .btn.warn {
    color: #92400e;
  }
`;

export default Wrapper;
