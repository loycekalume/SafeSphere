import React from "react";
import "../../styles/emergency.css";

export default function EmergencyModal({ onClose }) {
  return (
    <div className="em-overlay">
      <div className="em-modal">
        <h2>Emergency Contacts</h2>
        <p className="em-org">Safesphere Support Organization</p>

        <div className="em-section">
          <h3>Hotline Numbers</h3>
          <p><strong>📞 1195</strong> – GBV Toll-Free Hotline (Kenya)</p>
          <p><strong>📞 +254 711 200 400</strong> – Safesphere Rapid Response</p>
        </div>

        <div className="em-section">
          <h3>Email Support</h3>
          <p><strong>✉️ support@safesphere.org</strong></p>
        </div>

        <button className="em-close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}
