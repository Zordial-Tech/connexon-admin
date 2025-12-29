import styled from "styled-components";

const Wrapper = styled.section`
  .page {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background: #f5f7fa;
    font-family: Arial, sans-serif;
    overflow-y: auto; /* ✅ MAIN PAGE SCROLL */
  }

  .header {
    // background: #1e293b;
    color: #000;
    padding: 20px 20px;
    font-size: 32px;
    font-weight: bold;
  }

  .container {
    flex: 1;
    padding: 24px;
    max-width: 1000px;
    margin: auto;
    margin-top: -30px;
    overflow-y: auto; /* ✅ content scroll */
    // margin-left: 0;
  }
    .card {
  max-height: calc(100vh - 220px); /* header + footer space */
  overflow-y: auto;
}

  .subtitle {
    color: #64748b;
    margin-bottom: 20px;
  }

  .card {
    background: #fff;
    padding: 24px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  }

  .checkbox-group {
    display: flex;
    gap: 16px;
    margin-bottom: 16px;
  }

  .checkbox-item {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .icons {
  display: flex;
  gap: 12px;

}

.icon-btn {
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  color: #64748b;
  font-size: 14px;
  transition: color 0.2s ease;
}

.icon-btn:hover {
  color: #2563eb;
}

.icon-btn .icon {
  font-size: 16px;
}

.icon-btn .delete-icon {
  color: inherit;
}

.icon-btn:hover .delete-icon {
  color: #dc2626;
}

  .primary-btn {
    margin-top: 12px;
    padding: 12px;
    background: #2563eb;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
  }

  .primary-btn:hover {
    background: #1d4ed8;
  }

  .preview-section {
    // margin-top: 32px;
    margin-right: 50px;
  }
    .content-layout {
  display: flex;
  gap: 24px;
  align-items: flex-start;
}

/* Left block */
.content-layout .card {
  flex: 2;
}
.saved-row {
  display: flex;
  align-items: center;
  justify-content: space-between; /* 🔥 KEY LINE */
  padding: 10px 0;
  border-bottom: 1px solid #e5e7eb;
}

.saved-info {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.saved-type {
  font-weight: 600;
  font-size: 14px;
}

.saved-value {
  color: #64748b;
  font-size: 13px;
}

.icons {
  display: flex;
  gap: 12px;
}

/* Right block */

  .preview-section {
    flex: 1;
    background: #ffffff;
    padding: 24px;
    border-radius: 8px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);
    max-height: calc(100vh - 200px);
    overflow-y: auto;
  }

  .support-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 16px;
    margin-top: 16px;
  }

  .support-card {
    background: white;
    padding: 16px;
    border-radius: 8px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);
  }

  .empty-text {
    color: #64748b;
  }

  .footer {
    text-align: center;
    padding: 12px;
    background: #e2e8f0;
    font-size: 14px;
  }
    .input-row,
.saved-row {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 10px;
}

.input-row input {
  flex: 1;
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #cbd5e1;
}

.icons {
  display: flex;
  gap: 10px;
  cursor: pointer;
}

.action-buttons {
  display: flex;
  gap: 12px;
  margin-top: 16px;
}

.secondary-btn {
  padding: 12px;
  height: 100%;
  margin-top: 12px;
  background: #e5e7eb;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.saved-section {
  margin-top: 24px;
}

    @media (max-width: 768px) {
  .content-layout {
    flex-direction: column;
  }
}

`;

export default Wrapper;
