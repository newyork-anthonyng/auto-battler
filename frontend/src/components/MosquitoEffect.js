import React from "react";
import Bezier from "./Bezier";
import "./MosquitoEffect.css";

function MosquitoEffect({ leftElem, rightElem }) {
  const [didAnimate, setDidAnimate] = React.useState(false);
  const [, setDidMount] = React.useState(false);
  const parentEle = React.useRef(null);

  React.useEffect(() => {
    setDidMount(true);
  }, []);

  if (!leftElem || !rightElem) return null;
  if (didAnimate) return null;

  const fromCoord = leftElem.getBoundingClientRect();
  const toCoord = rightElem.getBoundingClientRect();
  const fromXCoord = fromCoord.x;
  const toXCoord = toCoord.x + toCoord.width;
  const width = Math.abs(fromXCoord - toXCoord);

  const style = {};
  style.left = fromXCoord;
  style.width = width;

  function handleAnimationEnd() {
    setDidAnimate(true);
  }

  return (
    <div className="mosquito-effect" style={style} ref={parentEle}>
      <Bezier parentEle={parentEle.current} onAnimationEnd={handleAnimationEnd}>
        <div className="rock" />
      </Bezier>
    </div>
  );
}

export default MosquitoEffect;
