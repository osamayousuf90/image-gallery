import React from "react";

const ProgressBar = ({ res }) => {
  return (
    <div>
      <div className="progress-bar">
        <div
          className="progress-bar-inner"
          style={{ width: `${res?.per}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
