import React, { useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom"; // Added Link
import "./styles/Login.css";
import { assets } from "../assets/assets"; // Assuming assets.hide and assets.view are defined here
import { loginUser } from "./action"; // Make sure registerUser is also imported if not already
// import { registerUser } from "./action"; // Assuming you have a registerUser action

const Login = () => {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

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

  // State for password visibility
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();
  const query = new URLSearchParams(useLocation().search);
  const mode = query.get("mode") || "login"; // Default to 'login' if mode is not present
  const isLogin = mode === "login";

  const handleLoginInputChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleRegisterInputChange = (event) => {
    setRegisterValues({ ...registerValues, [event.target.name]: event.target.value });
  };

  const handleSubmitLogin = async (event) => {
    event.preventDefault();
    try {
      const data = await loginUser(values);
      console.log("Login successful:", data);
      navigate("/Home"); // Navigate to Home on successful login
    } catch (error) {
      console.error("Login failed:", error.message);
      alert("Invalid credentials!");
    }
  };

  // Placeholder for registerUser - replace with your actual import and implementation
  const registerUser = async (payload) => {
    // This is a placeholder. Replace with your actual API call.
    console.log("Registering user with payload:", payload);
    // Example:
    // const response = await fetch('/api/register', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(payload),
    // });
    // if (!response.ok) {
    //   const errorData = await response.json();
    //   throw new Error(errorData.message || 'Registration failed');
    // }
    // return await response.json();
    return { message: "Registration successful" }; // Dummy success response
  };


  const handleSubmitRegister = async (event) => {
    event.preventDefault();
    const { confirmPassword, ...payload } = registerValues;

    if (registerValues.password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const data = await registerUser(payload); // Ensure registerUser is defined and imported
      console.log("Register successful:", data);
      alert("Registration successful! Please login.");
      navigate("/auth?mode=login");
    } catch (error) {
      console.error("Register failed:", error.message);
      alert(error.message || "Registration failed!");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleNewPasswordVisibility = () => {
    setShowNewPassword(!showNewPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="auth-container">
      <img src="/cafet.png" alt="Background" className="bg" />

      {isLogin ? (
        <div className="auth-wrapper login-mode">
          <div className="auth-panel left yellow-bg">
            <img src="/ustpfoodlogos.png" alt="Logo" className="auth-logo" />
            <h2 className="auth-heading hello">Hello, Trailblazer!</h2>
            <p>Unlock the experience--sign up and start now!</p>
            <button
              className="auth-switch"
              onClick={() => navigate("/auth?mode=signup")}
            >
              Sign Up
            </button>
          </div>

          <div className="auth-panel right white-bg">
            <h2 className="auth-heading yellow-text">LOGIN</h2>
            <form onSubmit={handleSubmitLogin}>
              <div className="input-group row-input">
                <img src={assets.profile} alt="Profile" className="icon" />
                <input
                  type="text"
                  name="username" // Added name attribute
                  placeholder="Username"
                  value={values.username} // Controlled component
                  onChange={handleLoginInputChange}
                />
              </div>
              <div className="input-group row-input">
                <img src={assets.key} alt="Key" className="icon" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password" // Added name attribute
                  placeholder="Password"
                  value={values.password} // Controlled component
                  onChange={handleLoginInputChange}
                />
                <img
                  src={showPassword ? assets.view : assets.hide}
                  alt={showPassword ? "Hide password" : "Show password"}
                  className="eye-icon"
                  onClick={togglePasswordVisibility}
                />
              </div>
              <div
                className="forgot-password"
                onClick={() => navigate("/forgot-password")} // Navigate to new path
              >
                Forgot Password?
              </div>
              <button className="auth-submit" type="submit">
                Login
              </button>
            </form>
          </div>
        </div>
      ) : (
        <div className="auth-wrapper signup-mode">
          <div className="auth-panel left white-bg">
            <h2 className="auth-heading yellow-text">SIGN UP</h2>
            <form onSubmit={handleSubmitRegister} style={{ width: '100%' }}> {/* Added form and onSubmit */}
              <div className="input-row">
                <div className="input-group">
                  <input
                    type="text"
                    name="firstName" // Added name attribute
                    placeholder="First Name"
                    value={registerValues.firstName} // Controlled component
                    onChange={handleRegisterInputChange}
                    required
                  />
                </div>
                <div className="input-group">
                  <input
                    type="text"
                    name="lastName" // Added name attribute
                    placeholder="Last Name"
                    value={registerValues.lastName} // Controlled component
                    onChange={handleRegisterInputChange}
                    required
                  />
                </div>
              </div>

              <div className="input-group">
                <input
                  type="text"
                  name="idNumber" // Added name attribute
                  placeholder="ID Number"
                  value={registerValues.idNumber} // Controlled component
                  onChange={handleRegisterInputChange}
                  required
                />
              </div>

              <div className="input-row">
                <div className="input-column">
                  <label className="label" htmlFor="birthday">
                    Birthday
                  </label>
                  <div className="input-group">
                    <input
                      type="date"
                      id="birthday"
                      name="birthday" // Added name attribute
                      value={registerValues.birthday} // Controlled component
                      onChange={handleRegisterInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="input-column">
                  <label className="label" style={{ visibility: "hidden" }}>
                    Placeholder
                  </label>
                  <div className="input-group">
                    <select
                      name="gender" // Added name attribute
                      value={registerValues.gender} // Controlled component
                      onChange={handleRegisterInputChange}
                      required
                    >
                      <option value="" disabled>
                        Gender
                      </option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="input-group">
                <input
                  type="email"
                  name="email" // Added name attribute
                  placeholder="Email"
                  value={registerValues.email} // Controlled component
                  onChange={handleRegisterInputChange}
                  required
                />
              </div>

              <div className="input-group row-input"> {/* Changed to row-input for eye icon */}
                <input
                  type={showNewPassword ? "text" : "password"}
                  name="password" // Added name attribute
                  placeholder="New Password"
                  value={registerValues.password} // Controlled component
                  onChange={handleRegisterInputChange}
                  required
                />
                <img
                  src={showNewPassword ? assets.view : assets.hide}
                  alt={showNewPassword ? "Hide password" : "Show password"}
                  className="eye-icon"
                  onClick={toggleNewPasswordVisibility}
                />
              </div>

              <div className="input-group row-input"> {/* Changed to row-input for eye icon */}
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword" // Added name attribute
                  placeholder="Confirm Password"
                  value={registerValues.confirmPassword} // Controlled component
                  onChange={handleRegisterInputChange}
                  required
                />
                <img
                  src={showConfirmPassword ? assets.view : assets.hide}
                  alt={showConfirmPassword ? "Hide password" : "Show password"}
                  className="eye-icon"
                  onClick={toggleConfirmPasswordVisibility}
                />
              </div>

              <button className="auth-submit" type="submit">Sign Up</button>
            </form>
          </div>

          <div className="auth-panel right yellow-bg">
            <img src="/ustpfoodlogos.png" alt="Logo" className="auth-logo" />
            <h2 className="auth-heading">Welcome Back!</h2>
            <p>Stay in touch--log in and keep the connection alive!</p>
            <button
              className="auth-switch"
              onClick={() => navigate("/auth?mode=login")}
            >
              Login
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;