import "../../styles/home.css"

export default function QuickCard({ icon, title, text }) {
  return (
    <div className="quick-card">
      <div className="icon">{icon}</div>
      <h3>{title}</h3>
      <p>{text}</p>
      <button className="learn-btn">Learn More</button>
    </div>
  );
}