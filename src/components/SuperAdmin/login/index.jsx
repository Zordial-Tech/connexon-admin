// src/components/SuperAdminLogin/index.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Wrapper from "./style";
import { FaEye, FaEyeSlash, FaShieldAlt } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SuperAdminLogin = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // frontend-only validation
    if (!email.endsWith("@zordial.com")) {
      toast.error(
        "Please use your official organization email address."
      );
      return;
    }

    toast.success("Super Admin authenticated successfully");

    // later: redirect to super admin dashboard
    // navigate("/super-admin/dashboard");
  };

  return (
    <Wrapper>
      <ToastContainer position="top-right" />
      <div className="container">
        <form className="card" onSubmit={handleSubmit}>
          <div className="icon-wrapper">
            <FaShieldAlt />
          </div>

          <h2>Super Admin Login</h2>
          <p className="subtitle">
            Restricted access · Authorized personnel only
          </p>

          <div className="field">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="name@zordial.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="field password-field">
            <label>Password</label>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <button type="submit" onClick={() => navigate("/super-admin/admin-management")} className="primary-btn">
            Login as Super Admin
          </button>

          <p className="footer-text" onClick={() => navigate("/login")}>
            ← Back to Admin Login
          </p>
        </form>
      </div>
    </Wrapper>
  );
};

export default SuperAdminLogin;
