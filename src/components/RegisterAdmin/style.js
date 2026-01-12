import styled from "styled-components";

const PRIMARY = "#7f5af0";

const Wrapper = styled.section`
  .container {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(135deg, #7f5af0, #b8a7ff);
    font-family: "Poppins", sans-serif;
  }
.approval-note {
  font-size: 12.5px;
  color: #6b7280;
  background: #f9fafb;
  border-left: 4px solid #7f5af0;
  padding: 10px 12px;
  border-radius: 8px;
  margin: 14px 0;
  line-height: 1.4;
}

  .card {
    background: #ffffff;
    padding: 32px;
    border-radius: 16px;
    width: 420px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
    animation: fadeIn 0.4s ease-in-out;
  }

  h2 {
    text-align: center;
    margin-bottom: 6px;
  }

  .subtitle {
    text-align: center;
    font-size: 13px;
    color: #6b7280;
    margin-bottom: 20px;
  }

  .field {
    margin-bottom: 14px;
  }

  .field label {
    display: block;
    font-size: 13px;
    margin-bottom: 6px;
    color: #374151;
  }

  .field input {
    width: 100%;
    padding: 10px 12px;
    border-radius: 10px;
    border: 1px solid #e5e7eb;
    outline: none;
  }

  .field input:focus {
    border-color: ${PRIMARY};
  }

  .primary-btn {
    width: 100%;
    margin-top: 18px;
    padding: 12px;
    border-radius: 10px;
    border: none;
    background: ${PRIMARY};
    color: #ffffff;
    font-size: 15px;
    cursor: pointer;
  }

  .primary-btn:hover {
    background: #6a46e5;
  }

  .footer-text {
    margin-top: 16px;
    font-size: 13px;
    text-align: center;
    color: #6b7280;
  }

  .footer-text span {
    color: ${PRIMARY};
    cursor: pointer;
    font-weight: 500;
    margin-left: 4px;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 480px) {
    .card {
      width: 92%;
    }
  }
`;

export default Wrapper;
