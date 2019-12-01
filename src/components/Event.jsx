import React from 'react'
import { Card } from '../css/style'

export default function Event(props){
  return (
    <Card>
      {props.text}
    </Card>
  )
}