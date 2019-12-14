import React from 'react'
import Fade from 'react-reveal/Fade'
import {
  Paragraph,
  H2,
  LightSection,
  Row,
  Cell,
  Image,
  Container,
  Column,
  DarkSection,
} from '../css/style'
import Box from '../components/Box'
import TEXT from '../constants/texts'
import one from '../images/1.png'
import two from '../images/2.png'
import three from '../images/3.png'

export function AboutVKH() {
  return (
    <div>
      <LightSection>
        <Container>
          <img src="logoVKH.png" width="300px" />
          <Paragraph>{TEXT.aboutVKH}</Paragraph>
        </Container>
      </LightSection>
      <DarkSection>
        <Container>
          <Row>
            <Column xs="12" md="4">
              <Box section={TEXT.pray} />
            </Column>
            <Column xs="12" md="4">
              <Box section={TEXT.fun} />
            </Column>
            <Column xs="12" md="4">
              <Box section={TEXT.talk} />
            </Column>
          </Row>
        </Container>
      </DarkSection>
      <LightSection>
        <Container>
          <Row>
            <Column xs="12" md="6">
              <Cell>
                <Fade left>
                  <Image src={one} alt={'something'} />
                </Fade>
              </Cell>
            </Column>
            <Column xs="12" md="6">
              <Cell>
                <Paragraph>citat</Paragraph>
              </Cell>
            </Column>
          </Row>
          <Row>
            <Column xs="12" md="6">
              <Cell>
                <Paragraph>citat</Paragraph>
              </Cell>
            </Column>
            <Column xs="12" md="6">
              <Cell>
                <Fade right>
                  <Image src={two} alt={'something'} />
                </Fade>
              </Cell>
            </Column>
          </Row>
          <Row>
            <Column xs="12" md="6">
              <Cell>
                <Fade left>
                  <Image src={three} alt={'something'} />
                </Fade>
              </Cell>
            </Column>
            <Column xs="12" md="6">
              <Cell>
                <Paragraph>Blablabla citat</Paragraph>
              </Cell>
            </Column>
          </Row>
        </Container>
      </LightSection>
    </div>
  )
}
