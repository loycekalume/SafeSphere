
import "../../styles/home.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        
        <div className="footer-section">
          <h2 className="brand">
            <span className="brand-icon">❤️</span> Safesphere
          </h2>
          <p className="brand-text">
            Supporting survivors, preventing violence, building safer communities.
          </p>
        </div>

        <div className="footer-section">
          <h3>Resources</h3>
          <ul>
            <li>Awareness Hub</li>
            <li>Prevention Tips</li>
            <li>Report Abuse</li>
            <li>Get Support</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Organizations</h3>
          <ul>
            <li>NGOs</li>
            <li>Legal Aid</li>
            <li>Health Services</li>
            <li>Community Groups</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Emergency</h3>
          <p className="hotline-title">24/7 Hotline</p>
          <p className="hotline-number">1-800-SAFE-NOW</p>
          <p className="hotline-sub">Available in multiple languages. All calls are confidential.</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2025 Safesphere. All rights reserved.</p>

        <div className="footer-links">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
          <span>Contact Us</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
