import "../../styles/home.css"

export default function AwarenessCard({ image, title, desc, tag, duration }) {
  return (
    <div className="aw-card">
      <div className="aw-img">
        <img src={image} alt={title} />
        <div className="play-btn">▶</div>
      </div>

      <div className="aw-body">
        <h3>{title}</h3>
        <span className="aw-tag">{tag}</span>
        <p className="aw-desc">{desc}</p>

        <div className="aw-bottom">
          <span className="aw-time">{duration}</span>

          <div className="aw-actions">
            <button className="share-btn">⇆</button>
            <button className="explore-btn">Explore</button>
          </div>
        </div>
      </div>
    </div>
  );
}
