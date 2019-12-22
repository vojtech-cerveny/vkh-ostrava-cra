import React from 'react'
export default function OctagonRight(props) {
  const background = props.background || '#030D4F'
  return (
    <div
      style={{
        zIndex: 4,
        textAlign: 'left',
      }}
    >
      <svg
        height="100vh"
        max-width="50%"
        viewBox="0 0 858 979"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M858 978.198V0H198.556L7.345 331.187C-2.44833 348.15 -2.44833 369.048 7.345 386.011L333.418 950.786C343.211 967.748 361.31 978.198 380.897 978.198H858Z"
          fill={background}
        />
      </svg>
    </div>
  )
}
