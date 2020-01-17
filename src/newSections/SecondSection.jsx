import React from 'react'
import Parallax from 'react-rellax'
import { H2, Paragraph, Behind, Infront, Container } from '../css/style'
import TEXT from '../constants/texts'
import OctagonLeft from '../components/OctagonLeft'
import colors from '../constants/colors'

export function SecondSection() {
  return (
    <Behind>
      <Parallax style={{ position: 'absolute' }} speed={3}>
        <OctagonLeft background={colors.LIGHT_GREEN} />
      </Parallax>
      <OctagonLeft background={colors.RED} />
      <Infront>
        <Container>
          <H2>VKH OSTRAVA</H2>
          <Paragraph style={{ padding: '0px 100px' }}>
            {TEXT.aboutVKH}
          </Paragraph>
        </Container>
      </Infront>
    </Behind>
  )
}
