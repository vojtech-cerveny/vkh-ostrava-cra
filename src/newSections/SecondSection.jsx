import React from 'react'
import Parallax from 'react-rellax'
import { H2, Paragraph, Behind, Infront, Container } from '../css/style'
import TEXT from '../constants/texts'
import OctagonLeft from '../components/OctagonLeft'
import OctagonParallax from '../components/OctagonParallax'
import colors from '../constants/colors'

export function SecondSection() {
  return (
    <Behind style={{ paddingTop: '300px' }}>
      <Parallax style={{ position: 'absolute' }} speed={1}>
        <OctagonLeft background={colors.LIGHT_GREEN} />
      </Parallax>
      <OctagonLeft background={colors.RED} />
      <OctagonParallax
        background={colors.LIGHT_GREEN}
        ratio={1}
        speed={2}
        style={{ position: 'absolute', top: '300px', left: '50%' }}
      />
      <OctagonParallax
        background={colors.LIGHT_GRAY200}
        ratio={0.75}
        speed={4}
        style={{ position: 'absolute', top: '900px', left: '70%' }}
      />
      <OctagonParallax
        background={colors.LIGHT_GRAY100}
        ratio={0.75}
        speed={2}
        style={{ position: 'absolute', top: '1100px', left: '35%' }}
      />
      <Infront>
        <Container style={{ paddingTop: '250px' }}>
          <H2>VKH OSTRAVA</H2>
          <Paragraph style={{ padding: '0px 100px' }}>
            {TEXT.aboutVKH}
          </Paragraph>
        </Container>
      </Infront>
    </Behind>
  )
}
