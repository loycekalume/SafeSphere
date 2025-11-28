import AwarenessCard from "./awarenessCard";
import "../../styles/home.css"

export default function AwarenessSection() {
  return (
    <section className="awareness">
      <h2 className="aw-title">Awareness & Education</h2>
      <p className="aw-subtext">
        Learn about gender-based violence and how to prevent it
      </p>

      <div className="aw-grid">

        <AwarenessCard
          image="/images/domestic-violence.jpg"
          title="Understanding Domestic Violence"
          desc="Learn the signs and how to help"
          tag="Video"
          duration="3 min"
        />

        <AwarenessCard
          image="/images/digital-safety.jpg"
          title="Digital Safety Guide"
          desc="Protect yourself online and prevent cyberbullying"
          tag="Guide"
          duration="15 min"
        />

      </div>
    </section>
  );
}
