import "../../styles/home.css"
export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <div className="logo">Safesphere</div>

        <ul className="nav-links">
          <li>Awareness</li>
          <li>Resources</li>
          <li>Report</li>
          <li>My Reports</li>
          <li>Support</li>
        </ul>
      </div>

      <div className="nav-right">
        <button className="btn-outline">Sign In</button>
        <button className="btn-emergency">Emergency</button>
      </div>
    </nav>
  );
}