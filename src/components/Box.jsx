import React from 'react'
import { BoxStyle, H3 } from '../css/style'
export default function Box(props) {
  return (
    <BoxStyle
      style={{
        borderTopColor: props.section.color,
        borderTopWidth: '8px',
        borderTopStyle: 'solid',
        background: '#efefef',
      }}
    >
      <H3 style={{ textAlign: 'left' }}>{props.section.title}</H3>
      {props.section.text}
    </BoxStyle>
  )
}
