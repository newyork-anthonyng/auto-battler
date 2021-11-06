import React from "react";
import "./styles.css";
import data from "./data";
import Animal from "./components/Animal";
import MosquitoEffect from "./components/MosquitoEffect";
import CONSTANTS from "./constants";

/*
TODO
[X] animate mosquito attacking enemy with effect
[X] animate 2 animals attacking

[ ] health should update *after* the mosquito effect animation.
Do we need to update the data for this?
[ ] Handle death. Should this be a data?
*/

function isBattling(animal, event) {
  return (
    event.description === CONSTANTS.BATTLE &&
    (animal.id === event.from || animal.id === event.to)
  );
}

function reverseArray(array) {
  const reversed = [];
  for (let i = array.length - 1; i >= 0; i--) {
    reversed.push(array[i]);
  }
  return reversed;
}

export default function App() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const currentEvent = data[currentIndex];

  function handleNextEvent() {
    const nextIndex = Math.min(currentIndex + 1, data.length - 1);
    setCurrentIndex(nextIndex);
  }

  let effect;

  if (currentEvent.description === CONSTANTS["MOSQUITO.EFFECT"]) {
    effect = <MosquitoEffect event={currentEvent} />;
  }

  return (
    <div>
      <button onClick={handleNextEvent}>Next</button>

      <div className="game">
        <div className="team" data-team-id="1">
          <h2>Team 1</h2>
          {reverseArray(currentEvent.team1).map((animal) => {
            const battle = isBattling(animal, currentEvent);
            return <Animal {...animal} isBattling={battle} />;
          })}
        </div>

        {effect}

        <div className="team" data-team-id="2">
          <h2>Team 2</h2>
          {currentEvent.team2.map((animal) => {
            const battle = isBattling(animal, currentEvent);
            return <Animal {...animal} isBattling={battle} />;
          })}
        </div>
      </div>
      <pre>{JSON.stringify(currentEvent, null, 2)}</pre>
    </div>
  );
}
