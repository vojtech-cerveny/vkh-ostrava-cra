import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { CalendarEvent } from './CalendarEvent/CalendarEvent.jsx'
import { H2, Container } from '../styles/style'

export function Calendar() {
  const [data, setData] = useState({ items: [] })
  let counterReverse = 1

  useEffect(() => {
    async function fetchData() {
      const result = await axios(
        'https://www.googleapis.com/calendar/v3/calendars/vkhostrava.cz_o4gjrck3s2cnq03guci1hlb06c@group.calendar.google.com/events?orderBy=startTime&key=AIzaSyDFRf-VTqYLCelf41yNzmkb-ZlRg-8gKP0&singleEvents=true&timeMin=' +
          new Date().toISOString()
      )
      setData(result.data)
    }

    fetchData()
  }, [])

  return (
    <>
      <H2 style={{ paddingTop: '200px' }}>UDÁLOSTI</H2>
      <Container>
        {data.items.map(event => {
          const isReversed = counterReverse++ % 2 == 0
          return (
            <CalendarEvent key={event.id} event={event} reverse={isReversed} />
          )
        })}
      </Container>
    </>
  )
}
