import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CircularProgressDate = () => {
  const percentage = 70;
  return (
    <div className="calendar-progress-bar">
      <div className="circular-container-bar-calender">
        <div style={{ height: "100px", width: "100px" }}>
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            strokeWidth={20}
            styles={buildStyles({
              textColor: "var(--bgthemecolor)",
              pathColor: "#00fb28",
              trailColor: "#a9a7a6",
              rotation: 0.5,
            })}
          />
        </div>
      </div>
    </div>
  );
};

export default CircularProgressDate;
