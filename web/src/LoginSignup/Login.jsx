import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./styles/Login.css";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

import { useState } from "react";
import { loginUser } from "./action";

const Login = () => {
  const [values, setValues] = useState({
    username: "",
    password: "",
  })

  const [registerValues, setRegisterValues] = useState({
    firstName: "",
    lastName: "",
    idNumber: "",
    birthday: "",
    gender: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmitLogin = async (event) => {
    event.preventDefault();
    try {
      const data = await loginUser(values);
      console.log('Login successful:', data);
      navigate('/Home');
    } catch (error) {
      console.error('Login failed:', error.message);
      alert('Invalid credentials!');
    }
  };

  const handleSubmitRegister = async (event) => {
    event.preventDefault();
    const { confirmPassword, ...payload } = registerValues;

    if (registerValues.password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const data = await registerUser(payload);
      console.log("Register successful:", data);
      navigate("/auth?mode=login");
    } catch (error) {
      console.error("Register failed:", error.message);
      alert(error.message || "Registration failed!");
    }
  };

  const query = new URLSearchParams(useLocation().search);
  const mode = query.get("mode");
  const isLogin = mode === "login";
  const navigate = useNavigate();

  return (
    <div className="auth-container">
      <img src="/cafet.png" alt="Background" className="bg" />

      {isLogin ? (
        <div className="auth-wrapper login-mode">

          {/* Left Panel - Sign Up Prompt */}
          <div className="auth-panel left yellow-bg">
            <img src="/ustpfoodlogos.png" alt="Logo" className="auth-logo" />
            <h2 className="auth-heading hello">Hello, Trailblazer!</h2>
            <p>Unlock the experience--sign up and start now!</p>
            <button className="auth-switch" onClick={() => navigate("/auth?mode=signup")}>Sign Up</button>
          </div>

          {/* Right Panel - Login Form */}
          <div className="auth-panel right white-bg">
            <h2 className="auth-heading yellow-text">LOGIN</h2>
            <form onSubmit={handleSubmitLogin}>
              <div className="input-group row-input">
                <img src={assets.profile} alt="Profile" className="icon" />
                <input type="text" placeholder="Username" onChange={e => setValues({ ...values, username: e.target.value })} />
              </div>
              <div className="input-group row-input">
                <img src={assets.key} alt="Key" className="icon" />
                <input type="password" placeholder="Password" onChange={e => setValues({ ...values, password: e.target.value })} />
              </div>
              <div className="forgot-password">Forgot Password?</div>
              <button className="auth-submit" type="submit">Login</button>
            </form>
          </div>

        </div>
      ) : (
        <div className="auth-wrapper signup-mode">
          {/* Left Panel - Sign Up Form */}
          <div className="auth-panel left white-bg">
            <h2 className="auth-heading yellow-text">SIGN UP</h2>

            <div className="input-row">
              <div className="input-group">
                <input type="text" placeholder="First Name" />
              </div>
              <div className="input-group">
                <input type="text" placeholder="Last Name" />
              </div>
            </div>

            <div className="input-group">
              <input type="text" placeholder="ID Number" />
            </div>

            <div className="input-row">
              <div className="input-column">
                <label className="label" htmlFor="birthday">Birthday</label>
                <div className="input-group">
                  <input type="date" id="birthday" />
                </div>
              </div>

              <div className="input-column">
                <label className="label" style={{ visibility: "hidden" }}>Placeholder</label>
                <div className="input-group">
                  <select defaultValue="">
                    <option value="" disabled>Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="input-group">
              <input type="email" placeholder="Email" />
            </div>

            <div className="input-group">
              <input type="password" placeholder="New Password" />
            </div>

            <div className="input-group">
              <input type="password" placeholder="Confirm Password" />
            </div>

            <Link to="/Homepage"><button className="auth-submit">Sign Up</button></Link>
          </div>

          {/* Right Panel - Login Prompt */}
          <div className="auth-panel right yellow-bg">
            <img src="/ustpfoodlogos.png" alt="Logo" className="auth-logo" />
            <h2 className="auth-heading">Welcome Back!</h2>
            <p>Stay in touch--log in and keep the connection alive!</p>
            <button className="auth-switch" onClick={() => navigate("/auth?mode=login")}>Login</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;