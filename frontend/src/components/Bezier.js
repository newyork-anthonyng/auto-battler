import React from "react";
import "./Bezier.css";

// https://css-tricks.com/advanced-css-animation-using-cubic-bezier/
function Bezier({ parentEle, children, onAnimationEnd }) {
  if (!parentEle) {
    return null;
  }

  const boundingClientRect = parentEle.getBoundingClientRect();
  const { width, height } = boundingClientRect;
  const heightIncrement = height - 0.5;
  const vValue = (height * 2) / 0.75;

  return (
    <div
      className="bezier"
      style={{
        "--width": `${width}px`,
        "--height": `${height}px`,
        "--heightIncrement": `${heightIncrement}px`,
        "--vValue": vValue,
      }}
      onAnimationEnd={onAnimationEnd}
    >
      {children}
    </div>
  );
}

Bezier.defaultProps = {
  width: 250,
  height: 250,
  onAnimationEnd: () => {},
};

export default Bezier;
