import QuickCard from "./quickCard";
import "../../styles/home.css"

export default function QuickAccess() {
  return (
    <section className="quick-section">
      <h2 className="quick-title">Quick Access</h2>
      <p className="quick-subtext">Find what you need in seconds</p>

      <div className="quick-grid">
        <QuickCard icon="📞" title="Emergency Contact" text="Immediate help and hotlines" />
        <QuickCard icon="⚠️" title="Report Abuse" text="Anonymous safe reporting" />
        <QuickCard icon="📘" title="Learn & Prevent" text="Awareness and safety tips" />
        <QuickCard icon="👥" title="Community Support" text="Connect with survivors" />
        <QuickCard icon="📄" title="My Reports" text="Track your submissions" />
        <QuickCard icon="❓" title="Help & Support" text="FAQ and contact" />
      </div>
    </section>
  );
}
