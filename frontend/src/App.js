import React from "react";
import "./styles.css";
import data from "./data";
import Animal from "./components/Animal";
import MosquitoEffect from "./components/MosquitoEffect";
import CONSTANTS from "./constants";

// TODO: this has some nasty nested if-else conditionals
// Add some tests for this, or clean it up.
function getAnimalStatus(animal, event) {
  const isAnimalParticipating =
    animal.id === event.from || animal.id === event.to;

  const isFainted = animal.health === 0;

  if (isAnimalParticipating) {
    const isBattling = event.description === CONSTANTS.BATTLE;
    const isFainting = isBattling && isFainted;

    if (isFainting) {
      return CONSTANTS.FAINTING;
    }

    return event.description;
  } else {
    if (isFainted) {
      return CONSTANTS.FAINTED;
    }

    return CONSTANTS.IDLE;
  }
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
  const [didRender, setDidRender] = React.useState(false);

  React.useEffect(() => {
    setDidRender(true);
  }, []);

  const elementRefs = React.useRef({});

  const currentEvent = data[currentIndex];

  function handlePreviousEvent() {
    const prevIndex = Math.max(0, currentIndex - 1);
    setCurrentIndex(prevIndex);
  }

  function handleNextEvent() {
    const nextIndex = Math.min(currentIndex + 1, data.length - 1);
    setCurrentIndex(nextIndex);
  }

  const team1 = reverseArray(currentEvent.team1).map((animal) => {
    const status = getAnimalStatus(animal, currentEvent);

    return (
      <Animal
        key={animal.id}
        {...animal}
        status={status}
        ref={(dom) => {
          elementRefs.current[animal.id] = dom;
        }}
      />
    );
  });

  const team2 = currentEvent.team2.map((animal) => {
    const status = getAnimalStatus(animal, currentEvent);
    return (
      <Animal
        key={animal.id}
        {...animal}
        status={status}
        ref={(dom) => {
          elementRefs.current[animal.id] = dom;
        }}
      />
    );
  });

  let effect;

  if (didRender) {
    if (currentEvent.description === CONSTANTS["MOSQUITO.EFFECT"]) {
      const { from, to } = currentEvent;
      effect = (
        <MosquitoEffect
          leftElem={elementRefs.current[from]}
          rightElem={elementRefs.current[to]}
        />
      );
    }
  }

  return (
    <div className="app">
      <div>
        <button onClick={handlePreviousEvent}>Previous</button>
        <button onClick={handleNextEvent}>Next</button>
      </div>

      <pre style={{ fontSize: 10 }}>
        {JSON.stringify(currentEvent, null, 2)}
      </pre>

      <div className="game">
        <div className="team" data-team-id="1">
          <h2>Team 1</h2>
          {team1}
        </div>

        {effect}

        <div className="team" data-team-id="2">
          <h2>Team 2</h2>
          {team2}
        </div>
      </div>
    </div>
  );
}
