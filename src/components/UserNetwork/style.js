import styled from "styled-components";

const Wrapper = styled.section`

  /* ---------- HEADER SECTION ---------- */
  .events {
    margin: 3px 20px;
    display: flex;
    justify-content: space-between;

    h1 {
      font-size: 30px;
    }

    .button-placeholder {
      display: flex;
      gap: 10px;
      align-items: center;
    }

    .mass-delete {
      background-color: rgb(244, 67, 54);
      color: #fff;
      border: none;
      padding: 8px 15px;
      cursor: pointer;
      border-radius: 5px;
      font-size: 16px;
      min-width: 70px;
      display: flex;
      align-items: center;
      gap: 5px;
    }

    .mass-delete-placeholder {
      width: 107px;
      height: 36px;
    }

    .add-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #7f5af0;
      color: black;
      font-size: 16px;
      font-weight: bold;
      border: none;
      padding: 8px 15px;
      border-radius: 5px;
      cursor: pointer;
      gap: 5px;

      &:hover {
        background-color: #7f5af0;
      }
    }
  }

  .button-class {
    display: flex;
    gap: 10px;
    width: 190px;
  }

  /* ---------- SEARCH BOX ---------- */
  .search-container {
    display: flex;
    align-items: center;
    width: 100%;
    margin-top: 20px;
    justify-content: flex-end;
    position: relative;
  }

  .search-input {
    width: 280px;
    padding: 12px 45px 12px 15px;
    font-size: 16px;
    border: 1px solid #ddd;
    border-radius: 8px;
    outline: none;
    background: #f9f9f9;
    transition: all 0.3s ease-in-out;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

    &:focus {
      border-color: #007bff;
      background: white;
      box-shadow: 0 3px 8px rgba(0, 123, 255, 0.3);
    }
  }

  .search-icon {
    position: relative;
    right: 30px;
    color: #777;
    cursor: pointer;
    font-size: 18px;
    transition: color 0.3s ease-in-out;

    &:hover {
      color: #007bff;
    }
  }

  /* ---------- TABLE WRAPPER ---------- */
  .table-container {
    max-height: calc(100vh - 200px);
    overflow-y: auto;
    margin: 0 10px;
    box-sizing: border-box;
  }

  /* ---------- MAIN TABLE ---------- */
  .attendee-table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
    background-color: white;

    thead th {
      background-color: #7f5af0;
      color: #000;
      font-size: 1rem;
      font-weight: 700;
      padding: 11px;
      position: sticky;
      top: 0;
      z-index: 100;
      text-align: center;
    }

    th,
    td {
      padding: 14px;
      text-align: center;
      border-bottom: 1px solid #ddd;
      border-right: 1px solid #ddd;
    }

    td:last-child,
    th:last-child {
      border-right: none;
    }

    tbody tr:nth-child(even) {
      background-color: #f9f9f9;
    }

    tbody tr:hover {
      background-color: #f8f9fa;
    }
  }

  /* ---------- SCROLLABLE ALT TABLE (if used elsewhere) ---------- */
  .event-table-container {
    overflow-x: auto;
    margin-top: 20px;
    width: 100%;
    scrollbar-width: thin;
    scrollbar-color: black #f3f3f3;

    &::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: black;
      border-radius: 6px;
    }
    &::-webkit-scrollbar-track {
      background-color: #f3f3f3;
    }
  }

  .event-table {
    width: 100%;
    border-collapse: collapse;

    th,
    td {
      padding: 12px;
      border: 1px solid #ddd;
      text-align: left;
    }

    th {
      background-color: rgba(0, 0, 0, 0.58);
      color: white;
    }
  }

  /* ---------- BUTTON ---------- */
  .view-profile {
    background-color: #7f5af0;
    color: #000000c6;
    padding: 8px 14px;
    border-radius: 6px;
    cursor: pointer;
    border: none;
    font-size: 12px;
    font-weight: 550;
    transition: all 0.3s ease-in-out;

    // &:hover {
    //   background-color: #161f28ff;
    //   color: white;
    // }
  }

  /* ---------- RESPONSIVE ---------- */
  @media (max-width: 768px) {
    .events {
      flex-direction: column;
      align-items: stretch;
      gap: 16px;
    }

    .search-input {
      width: 100% !important;
      padding: 10px 38px 10px 12px;
      font-size: 14px;
    }

    .table-container {
      margin: 0;
      max-height: calc(100vh - 220px);
    }
  }

  /* ---------- TEXT WRAPPING ---------- */
  .name-wrap {
    text-align: left;
    vertical-align: middle;
    padding: 8px;
    max-width: 150px;
  }

  .name-text {
    text-align: left;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    word-break: break-word;
    max-width: 280px;
    margin: 0;
  }

`;

export default Wrapper;
