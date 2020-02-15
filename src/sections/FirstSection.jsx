import React from 'react'
import Parallax from 'react-rellax'
import { H2, H3, Container } from '../styles/style'

import OctagonRight from '../components/OctagonRight'
import colors from '../styles/colors'
import SVGOne from '../components/SVGOne'

export default function FirstSection() {
  return (
    <>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Container>
          <div
            style={{
              flex: 'auto',
            }}
          >
            <Parallax speed={-2}>
              <img src="logoVKH.png" width="600px" alt="Logo VKH" />
              <H2>VKH OSTRAVA</H2>
              <H3>Vytěž ze sebe to nejlepší!</H3>
            </Parallax>
          </div>
        </Container>
        <Parallax style={{ position: 'absolute', right: '0' }} speed={-2}>
          <OctagonRight background={colors.RED} />
        </Parallax>
        <OctagonRight background={colors.LIGHT_GREEN} />
      </div>
      <SVGOne />
    </>
  )
}
