import React from "react";
import Rock from "./Rock";

function MosquitoEffect({ event }) {
  const { from, to } = event;

  const [fromXCoord, setFromXCoord] = React.useState(null);
  const [toXCoord, setToXCoord] = React.useState(null);

  // get x, y coordinate for "from"
  React.useEffect(() => {
    // from => Team1.1
    // to => Team2.1
    const fromEle = document.getElementById(from);
    const toEle = document.getElementById(to);

    const fromCoord = fromEle && fromEle.getBoundingClientRect();
    const toCoord = toEle && toEle.getBoundingClientRect();

    setFromXCoord(fromCoord.x);
    setToXCoord(toCoord.x + toCoord.width);

    console.group("MosquitoEffect");
    console.log(fromCoord);
    console.log(toCoord);
    console.groupEnd("MosquitoEffect");
    // console.log(event);
  }, []);
  // get x, y coordinate for "to"
  // draw a div, with left-side starting at "from.x from.y"
  // draw a div, with right-side starting at "to.x to.y"

  const style = {};
  const didLoadCoords = fromXCoord !== null;
  if (didLoadCoords) {
    style.left = fromXCoord; // 117px
    style.width = Math.abs(toXCoord - fromXCoord); // 700px
  }

  return (
    <div className="effect effect__mosquito" style={style}>
      <Rock />
    </div>
  );
}

export default MosquitoEffect;
