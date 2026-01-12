// src/components/Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Wrapper from "./style";
import Loader from "../../components/Loader";
import axiosInstance from "../../axios/axiosInstance";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await axiosInstance.post("/api/admin/login", {
        email,
        password,
      });

      if (response.data.status === "success") {
        localStorage.setItem("authToken", response.data.token);
        navigate("/user");
      }
    } catch (err) {
      setError(
        err.response?.data?.message || "Server unreachable. Try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Loader loading={loading} />;

  return (
    <Wrapper>
      <div className="login-container">
        <form className="login-form" onSubmit={handleLogin}>
          <h2>Admin Login</h2>
          <p className="subtitle">Access your admin dashboard</p>

          {error && <p className="error">{error}</p>}

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group password-group">
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

          <button type="submit" className="login-btn">
            Login
          </button>

          {/* Super Admin */}


          {/* Register */}
          <p className="register-text">
            Don’t have an account?
            <span onClick={() => navigate("/register-admin")}> Register</span>
          </p>

          <div className="or-divider">
            <span>OR</span>
          </div>

          <button
            type="button"
            className="root-btn"
            onClick={() => navigate("/super-admin/login")}
          >
            Login as Super Admin
          </button>
        </form>
      </div>
    </Wrapper>
  );
};

export default Login;
