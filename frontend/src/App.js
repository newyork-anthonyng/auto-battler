import React from "react";
import "./styles.css";
import data from "./data";
import Animal from "./components/Animal";
import MosquitoEffect from "./components/MosquitoEffect";
import CONSTANTS from "./constants";

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
  const [didRender, setDidRender] = React.useState(false);

  React.useEffect(() => {
    setDidRender(true);
  }, []);

  const elementRefs = React.useRef({});

  const currentEvent = data[currentIndex];

  function handleNextEvent() {
    const nextIndex = Math.min(currentIndex + 1, data.length - 1);
    setCurrentIndex(nextIndex);
  }

  const team1 = reverseArray(currentEvent.team1).map((animal) => {
    const battle = isBattling(animal, currentEvent);

    return (
      <Animal
        key={animal.id}
        {...animal}
        isBattling={battle}
        ref={(dom) => {
          elementRefs.current[animal.id] = dom;
        }}
      />
    );
  });

  const team2 = currentEvent.team2.map((animal) => {
    const battle = isBattling(animal, currentEvent);
    return (
      <Animal
        key={animal.id}
        {...animal}
        isBattling={battle}
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
      <button onClick={handleNextEvent}>Next</button>

      {/* <pre>{JSON.stringify(currentEvent, null, 2)}</pre> */}

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
