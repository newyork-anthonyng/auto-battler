import React from "react";
import imageMap from "../imageMap";
import CONSTANTS from "../constants";
import "./Animal.css";

const classMappings = {
  [CONSTANTS.IDLE]: "animal--idle",
  [CONSTANTS.READYBATTLE]: "animal--ready",
  [CONSTANTS.BATTLE]: "animal--battling",
  [CONSTANTS.FAINTING]: "animal--fainting",
  [CONSTANTS.FAINTED]: "animal--fainted",
};

function Animal({ name, attack, health, id, status }, ref) {
  const animalImage = imageMap[name];
  const statusClassName = classMappings[status];

  return (
    <div className={`animal ${statusClassName}`} ref={ref}>
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
