import React from 'react'
import COLORS from '../constants/colors'
export default {
  title: 'Colors',
}

export const colors = () => (
  <div>
    <p>You can easily show color pallete and this can be your guide. </p>
    <div
      style={{
        height: '100px',
        width: '200px',
        margin: '10px',
        background: COLORS.PRIMARY,
      }}
    >
      PRIMARY
    </div>
    <div
      style={{
        height: '100px',
        width: '200px',
        margin: '10px',
        background: COLORS.BG_DARK,
      }}
    >
      BG_DARK
    </div>
    <div
      style={{
        height: '100px',
        width: '200px',
        margin: '10px',
        background: COLORS.TEXT_HIGHTLIGHTED,
      }}
    >
      TEXT_HIGHTLIGHTED
    </div>
    <div
      style={{
        height: '100px',
        width: '200px',
        margin: '10px',
        background: COLORS.EVENTS.TALK,
      }}
    >
      EVENTS.TALK
    </div>
    <div
      style={{
        height: '100px',
        width: '200px',
        margin: '10px',
        background: COLORS.EVENTS.PRAY,
      }}
    >
      EVENTS.PRAY
    </div>
    <div
      style={{
        height: '100px',
        width: '200px',
        margin: '10px',
        background: COLORS.EVENTS.FUN,
      }}
    >
      EVENTS.FUN
    </div>
  </div>
)
