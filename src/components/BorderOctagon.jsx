import React from 'react'
import Parallax from 'react-rellax'

import { GrayOctagon } from '../styles/octagons'

export default function BorderOctagon(props) {
  const color = props.color || '#C1C1C1'
  const ratio = props.ratio || 1
  const width = ratio * 100
  const height = ratio * 86.9158878505
  const speed = props.speed || 0
  const opacity = props.opacity || 1
  return (
    <GrayOctagon
      top={props.top}
      left={props.left}
      zIndex={props.zIndex}
      opacity={opacity}
    >
      <Parallax speed={speed}>
        <svg
          width={width}
          height={height}
          viewBox="0 0 186 165"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M53.9606 0.122209C48.6184 0.130604 43.6839 2.97956 41.0055 7.60179L2.02142 74.8799C-0.669583 79.524 -0.674085 85.252 2.00962 89.9003L40.735 156.975C43.4187 161.623 48.3815 164.483 53.7489 164.475L131.506 164.352C136.848 164.344 141.782 161.495 144.461 156.873L183.445 89.5947C186.136 84.9506 186.14 79.2226 183.456 74.5743L144.731 7.5C142.047 2.85169 137.085 -0.00841599 131.717 1.86041e-05L53.9606 0.122209ZM55.9925 3.65132C50.6503 3.65972 45.7158 6.50868 43.0375 11.1309L6.10235 74.8729C3.41134 79.517 3.40685 85.245 6.09055 89.8933L42.778 153.438C45.4617 158.086 50.4246 160.946 55.792 160.938L129.462 160.822C134.804 160.814 139.738 157.965 142.417 153.342L179.352 89.6005C182.043 84.9564 182.047 79.2284 179.364 74.5801L142.676 11.0355C139.992 6.38721 135.03 3.52711 129.662 3.53554L55.9925 3.65132Z"
            fill={color}
          />
        </svg>
      </Parallax>
    </GrayOctagon>
  )
}
