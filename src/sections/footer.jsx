import React from 'react'
import { H3, Container, LightSection } from '../css/style'

export function Footer() {
  return (
    <LightSection>
      <Container>
        <div
          style={{
            borderTopStyle: 'solid',
            borderTopWidth: '1px',
            borderTopColor: '#e5e5e5',
            padding: '15px 0',
          }}
        >
          <img src="logoVKH.png" width="75px" alt="Logo VKH" />
          <H3>VKH OSTRAVA</H3>
        </div>
      </Container>
    </LightSection>
  )
}
