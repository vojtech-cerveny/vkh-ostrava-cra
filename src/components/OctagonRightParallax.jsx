import React from 'react'
import Parallax from 'react-rellax'

export default function OctagonRight(props) {
  return (
    <div
      style={{
        ...props.style,
        textAlign: 'left',
        zIndex: -5,
      }}
    >
      <Parallax speed={props.speed}>
        <svg
          width={props.ratio * 475}
          height={props.ratio * 491}
          viewBox="0 0 475 491"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M134.533 92.1561C138.999 84.4211 147.252 79.6561 156.184 79.6561L318.816 79.6561C327.748 79.6561 336.001 84.4211 340.467 92.1561L421.783 233C426.249 240.735 426.249 250.265 421.783 258L340.467 398.844C336.001 406.579 327.748 411.344 318.816 411.344L156.184 411.344C147.252 411.344 138.999 406.579 134.533 398.844L53.2169 258C48.751 250.265 48.751 240.735 53.2169 233L134.533 92.1561Z"
            fill={props.background || 'gray'}
          />
        </svg>
      </Parallax>
    </div>
  )
}
