import React from 'react'
import { Octagon } from '../styles/octagons'

export default function NormalOctogen(props) {
  const color = props.color || '#C1C1C1'
  const ratio = props.ratio || 1
  const width = ratio * 100
  const height = ratio * 86.9158878505
  const rotated = props.rotated

  return (
    <Octagon zIndex={props.zIndex} rotated={rotated}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 214 186"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M52.2076 2.93812C53.1004 1.39737 54.7452 0.447724 56.5259 0.444925L157.725 0.285895C159.514 0.283083 161.169 1.23645 162.063 2.78589L212.51 90.1613C213.404 91.7108 213.403 93.6201 212.506 95.1681L161.768 182.73C160.875 184.271 159.231 185.22 157.45 185.223L56.2505 185.382C54.4614 185.385 52.8071 184.432 51.9125 182.882L1.46626 95.5066C0.571692 93.9572 0.573192 92.0478 1.47019 90.4998L52.2076 2.93812Z"
          fill={color}
        />
      </svg>
    </Octagon>
  )
}
