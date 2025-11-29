import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/auth.css";

export default function Signup() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    gender: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function validate() {
    const newErrors = {};

    if (!form.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";

    if (!form.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!/^[0-9+]{7,15}$/.test(form.phone))
      newErrors.phone = "Invalid phone number";

    if (!form.gender) newErrors.gender = "Please select your gender";

    if (form.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    if (form.password !== form.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    return newErrors;
  }

  function handleSubmit(e) {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setSuccess(true);

    console.log("Signup data:", form);
    // TODO: send data to backend API
  }

  return (
    <div className="auth-container">

      {/* Success Modal */}
      {success && (
        <div className="modal-overlay">
          <div className="success-modal">
            <h3>Account Created Successfully 🎉</h3>
            <p>You may now log into your Safesphere account.</p>
            <button
              className="modal-btn"
              onClick={() => setSuccess(false)}
            >
              Continue
            </button>
          </div>
        </div>
      )}

      <form className="auth-card" onSubmit={handleSubmit}>
        <h2>Create an Account</h2>
        <p className="auth-sub">Join Safesphere and access confidential help.</p>

        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={form.fullName}
          onChange={handleChange}
        />
        {errors.fullName && <p className="error">{errors.fullName}</p>}

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
        />
        {errors.email && <p className="error">{errors.email}</p>}

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
        />
        {errors.phone && <p className="error">{errors.phone}</p>}

        <select
          name="gender"
          value={form.gender}
          onChange={handleChange}
          className="auth-select"
        >
          <option value="">Select Gender</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
          <option value="other">Other</option>
          <option value="prefer_not">Prefer not to say</option>
        </select>
        {errors.gender && <p className="error">{errors.gender}</p>}

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
        />
        {errors.password && <p className="error">{errors.password}</p>}

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={form.confirmPassword}
          onChange={handleChange}
        />
        {errors.confirmPassword && (
          <p className="error">{errors.confirmPassword}</p>
        )}

        <button type="submit" className="auth-btn">Sign Up</button>

        <p className="auth-link">
          Already have an account? <Link to="/signin">Login</Link>
        </p>
      </form>
    </div>
  );
}
