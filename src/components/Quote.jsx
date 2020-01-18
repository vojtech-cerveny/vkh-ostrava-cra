import React from 'react'
import { Blockquote } from '../css/style'
export default function Quote(props) {
  return <Blockquote style={props.style}>{props.children}</Blockquote>
}
