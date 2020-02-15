import React from 'react'

export default function OctagonLeft(props) {
  const background = props.background || '#030D4F'
  return (
    <div
      style={{
        zIndex: 4,
        textAlign: 'left',
      }}
    >
      <svg
        width="647"
        height="848"
        viewBox="0 0 518 679"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 678.098L309.228 678.098C319.946 678.098 329.85 672.38 335.209 663.098L513.639 354.049C518.998 344.767 518.998 333.331 513.639 324.049L335.209 15C329.85 5.71797 319.946 1.52588e-05 309.228 1.52588e-05L0 0V678.098Z"
          fill={background}
        />
      </svg>
    </div>
  )
}
