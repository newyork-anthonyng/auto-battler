import React from "react";
import imageMap from "../imageMap";

function Animal({ name, attack, health, id, isBattling }, ref) {
  const animalImage = imageMap[name];

  if (health === 0) {
    return null;
  }

  return (
    <div
      className={`animal window ${isBattling ? "animal--battling" : ""}`}
      id={id}
      ref={ref}
    >
      <div className="animal__image">{animalImage}</div>
      <div className="animal__stats">
        <div className="animal__stats__attack">
          <span aria-label="attack" role="img">
            ⚔️
          </span>{" "}
          {attack}
        </div>
        <div className="animal__stats__health">
          <span aria-label="attack" role="img">
            ❤️
          </span>
          {health}
        </div>
      </div>
    </div>
  );
}

export default React.forwardRef(Animal);
