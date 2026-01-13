import styled from "styled-components";

const PRIMARY = "#7f5af0";

const Wrapper = styled.section`
  .container {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: radial-gradient(circle at top, #7f5af0, #1f2937);
    font-family: "Poppins", sans-serif;
  }

  .card {
    background: #ffffff;
    padding: 34px;
    border-radius: 18px;
    width: 420px;
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.35);
    animation: fadeIn 0.4s ease;
  }

  .icon-wrapper {
    width: 54px;
    height: 54px;
    background: ${PRIMARY};
    color: #fff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 14px;
    font-size: 22px;
  }

  h2 {
    text-align: center;
    margin-bottom: 6px;
  }

  .subtitle {
    text-align: center;
    font-size: 13px;
    color: #6b7280;
    margin-bottom: 22px;
  }

  .field {
    margin-bottom: 16px;
  }

  .field label {
    display: block;
    font-size: 13px;
    margin-bottom: 6px;
    color: #374151;
  }

  .field input {
    width: 100%;
    padding: 11px 12px;
    border-radius: 10px;
    border: 1px solid #e5e7eb;
    outline: none;
  }

  .field input:focus {
    border-color: ${PRIMARY};
  }

  .password-field {
    position: relative;
  }

  .password-field span {
    position: absolute;
    right: 12px;
    top: 38px;
    cursor: pointer;
    color: #6b7280;
  }

  .primary-btn {
    width: 100%;
    margin-top: 10px;
    padding: 13px;
    border-radius: 12px;
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
    margin-top: 18px;
    text-align: center;
    font-size: 13px;
    color: ${PRIMARY};
    cursor: pointer;
    font-weight: 500;
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
