import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Wrapper from "./style";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegisterAdmin = () => {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // ✅ Email domain validation
        if (!form.email.endsWith("@zordial.com")) {
            toast.error("This email address is not associated with our organization.");
            return;
        }

        // ✅ Password match validation
        if (form.password !== form.confirmPassword) {
            toast.error("Passwords do not match");
            return;
        }

        // ✅ Frontend-only success message
        toast.success("Please verify your email to continue.");

        // No login, no redirect
        console.log("Admin registration payload:", form);
    };

    return (
        <Wrapper>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                pauseOnHover
            />

            <div className="container">
                <form className="card" onSubmit={handleSubmit}>
                    <h2>Admin Registration</h2>
                    <p className="subtitle">
                        Please Register with your official Zordial email
                    </p>

                    <div className="field">
                        <label>Full Name</label>
                        <input
                            name="fullName"
                            value={form.fullName}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="field">
                        <label>Email Address</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="name@zordial.com"
                            value={form.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="field">
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="field">
                        <label>Confirm Password</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            value={form.confirmPassword}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button type="submit" className="primary-btn">
                        Submit Registration
                    </button>
                    <p className="approval-note">
                        <strong>Note:</strong> Your registration request will be reviewed by our team.
                        You will be able to log in once it has been approved.
                    </p>

                    <p className="footer-text">
                        Already approved?
                        <span onClick={() => navigate("/login")}> Login</span>
                    </p>
                </form>
            </div>
        </Wrapper>
    );
};

export default RegisterAdmin;
