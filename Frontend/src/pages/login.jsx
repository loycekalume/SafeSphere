import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import "../styles/auth.css";

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function validate() {
    const newErrors = {};
    if (!form.email.trim()) newErrors.email = "Email is required";
    if (!form.password.trim()) newErrors.password = "Password is required";
    return newErrors;
  }

  function handleSubmit(e) {
    e.preventDefault();

    const val = validate();
    if (Object.keys(val).length > 0) {
      setErrors(val);
      return;
    }

    setErrors({});
    setSuccess(true);
    console.log("Login data:", form);
  }

  return (
    <div className="auth-container">
      {success && (
        <div className="modal-overlay">
          <div className="success-modal">
            <h3>Login Successful</h3>
            <p>Welcome back to Safesphere.</p>
            <button className="modal-btn" onClick={() => setSuccess(false)}>
              Continue
            </button>
          </div>
        </div>
      )}

      <form className="auth-card" onSubmit={handleSubmit}>
        <h2>Welcome Back</h2>
        <p className="auth-sub">Login to your Safesphere account</p>

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
        />
        {errors.email && <p className="error">{errors.email}</p>}

        {/* Password */}
        <div className="password-wrapper">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
          />

          <span
            className="password-toggle"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FiEye /> : <FiEyeOff />}
          </span>
        </div>
        {errors.password && <p className="error">{errors.password}</p>}

        <button type="submit" className="auth-btn">Login</button>

        <p className="auth-link">
          Don’t have an account? <a href="/signup">Create one</a>
        </p>
      </form>
    </div>
  );
}
