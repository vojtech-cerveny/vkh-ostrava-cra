import React from 'react'
import svg from './background.svg'
export default function SVGBg(props) {
  const ratio = 500
  return (
    <div
      style={{
        height: `${ratio * 1.2}px`,
        width: `${ratio}px`,
        background: `url(${svg}) no-repeat`,
        backgroundSize: '100%',
      }}
    >
      {props.children}
    </div>
  )
}
