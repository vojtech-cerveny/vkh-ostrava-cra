import React from "react";
export default function Arrow() {
  return (
    <div
      style={{
        position: "absolute",
        left: "47%",
        top: "90%",
        zIndex: 100
      }}
    >
      <a href="#scrollTo">
        <svg
          width="40"
          viewBox="0 0 97 107"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="49.5"
            y1="2.40413e-07"
            x2="49.5"
            y2="96"
            stroke="#C96567"
            stroke-width="11"
          />
          <line
            x1="52.4645"
            y1="102.536"
            x2="4.46447"
            y2="54.5355"
            stroke="#C96567"
            stroke-width="10"
          />
          <line
            x1="45.4645"
            y1="102.464"
            x2="93.4645"
            y2="54.4645"
            stroke="#C96567"
            stroke-width="10"
          />
        </svg>
      </a>
    </div>
  );
}
