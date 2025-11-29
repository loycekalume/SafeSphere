import { useState } from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import EmergencyModal from "./emergencyModal";

// React Icons
import { FiInfo, FiBookOpen, FiAlertTriangle, FiFileText, FiHeadphones } from "react-icons/fi";

export default function Navbar() {
  const [showEmergency, setShowEmergency] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-left">
          <div className="logo">Safesphere</div>
        </div>

        {/* Centered Nav Links */}
        <ul className="nav-links">
          <li onClick={() => scrollToSection("awareness")}>
            <FiInfo /> Awareness
          </li>
          <li>
            <Link to="/resources"><FiBookOpen /> Resources</Link>
          </li>
          <li>
            <Link to="/report"><FiAlertTriangle /> Report</Link>
          </li>
          <li>
            <Link to="/my-reports"><FiFileText /> My Reports</Link>
          </li>
          <li>
            <Link to="/support"><FiHeadphones /> Support</Link>
          </li>
        </ul>

        <div className="nav-right">
          <Link to="/signup">
            <button className="btn-primary">Sign Up</button>
          </Link>

          <Link to="/signin">
            <button className="btn-outline">Sign In</button>
          </Link>

          <button
            className="btn-emergency"
            onClick={() => setShowEmergency(true)}
          >
            Emergency
          </button>
        </div>
      </nav>

      {showEmergency && <EmergencyModal onClose={() => setShowEmergency(false)} />}
    </>
  );
}
