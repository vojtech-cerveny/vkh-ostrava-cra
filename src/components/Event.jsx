import React from 'react'
import { Card } from '../css/style'
import Octogen from '../components/Octogen'
export default function Event(props) {
  return (
    <Card bg={'white'}>
      <Octogen color={props.bg}></Octogen>
      {props.text}
    </Card>
  )
}
