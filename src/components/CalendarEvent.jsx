import React from 'react'
import NormalOctagon from './NormalOctagon'
import colors from '../constants/colors'
export function CalendareEvent(props) {
  const event = props.event
  console.log(event)
  return (
    <div
      style={{
        position: 'relative',
      }}
    >
      <NormalOctagon
        left=" -40px"
        top="-50px"
        ratio={1}
        speed={0}
        color={colors.ORANGE}
      />
      <div
        style={{
          width: '400px',
          height: '200px',
          padding: '20px',
          margin: '60px',
          backgroundColor: colors.LIGHT_GREEN,
          color: 'black',
        }}
        key={event.id}
      >
        <h3> {event.summary}</h3>
        <p>Zaciname {event.start.date} </p>
        {event.location && <p> {event.location}</p>}
        {event.description && <p> {event.description}</p>}
      </div>
    </div>
  )
}
