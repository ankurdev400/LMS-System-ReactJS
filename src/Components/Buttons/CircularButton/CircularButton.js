import React from "react";

const CircularButton = (props) => {
  return (
    <div className="circular-btn-container">
      <div
        className="CircularButton"
        onClick={props.handleClick}
        disabled={props.buttonDisabled}
      >
        <div className="btn-logo"></div>
      </div>
    </div>
  );
};

export default CircularButton;
