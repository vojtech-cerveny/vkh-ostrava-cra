import React from 'react'
import Parallax from 'react-rellax'
import { H2, Paragraph } from '../css/style'
import TEXT from '../constants/texts'
import OctagonLeft from '../components/OctagonLeft'

export function SecondSection() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Parallax style={{ position: 'absolute' }} speed={3}>
        <OctagonLeft background={'#FFC52C'} />
      </Parallax>
      <OctagonLeft />

      <div
        style={{
          flex: 'auto',
        }}
      >
        <H2>VKH OSTRAVA</H2>
        <Paragraph style={{ padding: '0px 100px' }}>{TEXT.aboutVKH}</Paragraph>
      </div>
    </div>
  )
}
