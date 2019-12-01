import React from 'react'

export default function Octogen(props) {
  const color = props.color
  return (
    <svg
      width="75"
      height="75"
      viewBox="0 0 390 390"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="6"
        y1="115"
        x2="5.99999"
        y2="276"
        stroke="black"
        stroke-width="10"
      />
      <line
        x1="385"
        y1="115"
        x2="385"
        y2="276"
        stroke="black"
        stroke-width="10"
      />
      <line
        x1="4.46447"
        y1="118.309"
        x2="118.309"
        y2="4.46445"
        stroke="black"
        stroke-width="10"
      />
      <line
        x1="272.536"
        y1="4.46447"
        x2="386.38"
        y2="118.309"
        stroke="black"
        stroke-width="10"
      />
      <line
        x1="4.53553"
        y1="272.464"
        x2="118.38"
        y2="386.309"
        stroke="black"
        stroke-width="10"
      />
      <line
        x1="115"
        y1="383"
        x2="276"
        y2="383"
        stroke={color}
        stroke-width="14"
      />
      <line
        x1="271.05"
        y1="384.894"
        x2="384.894"
        y2="271.05"
        stroke={color}
        stroke-width="14"
      />
      <line x1="115" y1="6" x2="276" y2="6" stroke="black" stroke-width="10" />
    </svg>
  )
}
