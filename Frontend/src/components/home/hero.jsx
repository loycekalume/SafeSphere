import "../../styles/home.css"

export default function Hero() {
  return (
    <section className="hero">
      <div className="tag">Safe • Secure • Confidential</div>

      <h1 className="hero-title">
        You're Not Alone. <br />
        We’re Here to Help.
      </h1>

      <p className="hero-subtext">
        Safesphere provides confidential support, resources, and pathways to safety 
        for those experiencing gender-based violence.
      </p>

      <div className="hero-buttons">
        <button className="btn-green">Report Safely</button>
        <button className="btn-light">Chat Support</button>
        <button className="btn-light">Emergency Line</button>
      </div>
    </section>
  );
}