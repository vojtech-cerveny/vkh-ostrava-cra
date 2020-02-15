import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { CalendareEvent } from './CalendarEvent'
import { H2 } from '../styles/style'

export function Calendar() {
  const [data, setData] = useState({ items: [] })

  useEffect(() => {
    async function fetchData() {
      const result = await axios(
        'https://www.googleapis.com/calendar/v3/calendars/vkhostrava.cz_i1n5jgnlrg7lr1o7889pb5quis%40group.calendar.google.com/events?key=AIzaSyDFRf-VTqYLCelf41yNzmkb-ZlRg-8gKP0'
      )
      setData(result.data)
    }

    fetchData()
  }, [])

  return (
    <>
      <H2 style={{ paddingTop: '200px' }}>UDÁLOSTI</H2>
      <div>
        {data.items.map(event => (
          <CalendareEvent key={event.id} event={event} />
        ))}
      </div>
    </>
  )
}
