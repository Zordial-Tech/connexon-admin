import styled from "styled-components";

const Wrapper = styled.section`
  .login-container {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(135deg, #7f5af0, #b8a7ff);
    font-family: "Poppins", sans-serif;
  }

  .login-form {
    background: #ffffff;
    padding: 32px;
    border-radius: 14px;
    width: 360px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
    animation: fadeIn 0.4s ease-in-out;
  }

  .login-form h2 {
    text-align: center;
    margin-bottom: 6px;
  }

  .subtitle {
    text-align: center;
    font-size: 13px;
    color: #6b7280;
    margin-bottom: 20px;
  }

  .form-group {
    margin-bottom: 16px;
  }

  .form-group label {
    display: block;
    font-size: 13px;
    margin-bottom: 6px;
    color: #374151;
  }

  .form-group input {
    width: 100%;
    padding: 10px 12px;
    border-radius: 10px;
    border: 1px solid #e5e7eb;
    outline: none;
  }

  .form-group input:focus {
    border-color: #7f5af0;
  }

  .password-group {
    position: relative;
  }

  .password-group span {
    position: absolute;
    right: 12px;
    top: 36px;
    cursor: pointer;
    color: #6b7280;
  }

  .login-btn {
    width: 100%;
    padding: 12px;
    background: #7f5af0;
    color: white;
    border: none;
    border-radius: 10px;
    font-size: 15px;
    cursor: pointer;
    margin-top: 8px;
  }

  .login-btn:hover {
    background: #6a46e5;
  }

  .root-btn {
    width: 100%;
    padding: 10px;
    margin-top: 10px;
    background: transparent;
    border: 1px solid #7f5af0;
    color: #7f5af0;
    border-radius: 10px;
    cursor: pointer;
  }

  .root-btn:hover {
    background: #f4f0ff;
  }
.or-divider {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 16px 0;
  position: relative;
}

.or-divider::before,
.or-divider::after {
  content: "";
  flex: 1;
  height: 1px;
  background: #e5e7eb;
}

.or-divider span {
  padding: 0 10px;
  font-size: 12px;
  color: #6b7280;
  font-weight: 500;
}

  .register-text {
    margin-top: 16px;
    font-size: 13px;
    text-align: center;
    color: #6b7280;
  }

  .register-text span {
    color: #7f5af0;
    cursor: pointer;
    font-weight: 500;
    margin-left: 4px;
  }

  .error {
    color: #dc2626;
    font-size: 13px;
    text-align: center;
    margin-bottom: 10px;
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
`;

export default Wrapper;
