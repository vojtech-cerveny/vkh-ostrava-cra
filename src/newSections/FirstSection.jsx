import React from 'react'
import Parallax from 'react-rellax'
import { H2 } from '../css/style'

import OctagonRight from '../components/OctagonRight'

export function FirstSection() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          flex: 'auto',
        }}
      >
        <Parallax speed={-2}>
          <img src="logoVKH.png" width="300px" alt="Logo VKH" />
          <H2>VKH OSTRAVA</H2>
          <div>Some awesome text here</div>
        </Parallax>
      </div>
      <Parallax style={{ position: 'absolute', right: '0' }} speed={-2}>
        <OctagonRight background={'#FFC52C'} />
      </Parallax>
      <OctagonRight />
    </div>
  )
}
