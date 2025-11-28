// src/components/ReportAbuseForm.jsx

import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft, FiShield, FiLock, FiCalendar } from "react-icons/fi";
import "../styles/report.css";

const ReportAbuseForm = () => {
  return (
    <div className="report-form-container">
      {/* Header */}
      <header className="form-header">
        <Link to="/"><span className="back-home-link">
          <FiArrowLeft className="icon" /> Back Home
        </span></Link>
      </header>

      {/* Security Section */}
      <section className="security-info-section">
        <h1 className="main-title">Report Safely</h1>
        <p className="main-subtitle">
          Your report is completely anonymous and secure. We will never share
          your identity.
        </p>

        <div className="encryption-notice">
          <FiLock className="icon lock" />
          <p>
            All information is end-to-end encrypted. Your anonymity is protected.
            Reports are securely stored and only accessible to authorized
            personnel.
          </p>
        </div>
      </section>

      {/* Confidential Form */}
      <section className="confidential-form-section">
        <div className="form-title-bar">
          <FiShield className="icon shield" />
          <h2>Confidential Report Form</h2>
        </div>

        <p className="identity-note">
          Your identity will never be revealed. All fields are optional except
          those marked with *
        </p>

        <form>
          {/* Type of Abuse */}
          <div className="form-group">
            <label htmlFor="typeOfAbuse">Type of Abuse *</label>
            <select id="typeOfAbuse" className="form-input select-input">
              <option>Select a category...</option>
              <option>Physical Abuse</option>
              <option>Emotional Abuse</option>
              <option>Sexual Abuse</option>
              <option>Financial Abuse</option>
              <option>Harassment</option>
              <option>Other</option>
            </select>
          </div>

          {/* Location */}
          <div className="form-group">
            <label htmlFor="location">Location of Incident *</label>
            <input
              id="location"
              type="text"
              className="form-input text-input"
              placeholder="City, area or general location"
            />
          </div>

          {/* Date */}
          <div className="form-group">
            <label htmlFor="dateIncident">When did this happen?</label>
            <input
              id="dateIncident"
              type="text"
              className="form-input date-input"
              placeholder="mm/dd/yyyy"
            />
            <FiCalendar className="calendar-icon" />
          </div>

          {/* Description */}
          <div className="form-group">
            <label htmlFor="description">Describe what happened *</label>
            <textarea
              id="description"
              className="form-input textarea-input"
              placeholder="Provide as much detail as you're comfortable sharing."
            />
          </div>

          {/* Witnesses */}
          <div className="form-group">
            <div className="char-count">0/500 characters</div>
            <label htmlFor="witnesses">Were there any witnesses?</label>
            <textarea
              id="witnesses"
              className="form-input textarea-input"
              placeholder="Names or descriptions of witnesses (optional)"
            />
          </div>

          {/* Evidence */}
          <div className="form-group">
            <label htmlFor="evidence">Evidence or Documents (optional)</label>
            <select id="evidence" className="form-input select-input">
              <option>No attachments</option>
            </select>
            <p className="attachment-note">
              All uploaded files are securely encrypted.
            </p>
          </div>
        </form>
      </section>

      {/* Rights + Submit */}
      <section className="footer-section">
        <div className="your-rights-box">
          <h3>Your Rights:</h3>
          <ul>
            <li>✓ Your identity is completely anonymous</li>
            <li>✓ You can remain unnamed throughout the process</li>
            <li>✓ No one will contact you without permission</li>
            <li>✓ Your data is encrypted and protected</li>
          </ul>
        </div>

        <button type="submit" className="submit-button">
          Submit Report Securely
        </button>

        <p className="privacy-agreement">
          By submitting, you agree that this information will be handled
          according to our privacy policy.
        </p>
      </section>
    </div>
  );
};

export default ReportAbuseForm;
