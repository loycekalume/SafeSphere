import "../../styles/home.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <div className="logo">Safesphere</div>

        <ul className="nav-links">
          <li onClick={() => scrollToSection("awareness")}>Awareness</li>

          <li><Link to="/resources">Resources</Link></li>
          <li><Link to="/report">Report</Link></li>
          <li><Link to="/my-reports">My Reports</Link></li>
          <li><Link to="/support">Support</Link></li>
        </ul>
      </div>

      <div className="nav-right">
        <Link to="/signup">
          <button className="btn-primary">Sign Up</button>
        </Link>

        <Link to="/signin">
          <button className="btn-outline">Sign In</button>
        </Link>

        <Link to="/emergency">
          <button className="btn-emergency">Emergency</button>
        </Link>
      </div>
    </nav>
  );
}
