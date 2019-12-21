import React from 'react'
import Fade from 'react-reveal/Fade'
import {
  Paragraph,
  H3,
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

const h3Style = {
  fontWeight: '100',
  lineHeight: '3.5rem',
  display: 'flex',
  justifyContent: 'center',
  alignContent: 'center',
  flexDirection: 'column',
}

export function AboutVKH() {
  return (
    <div>
      <LightSection>
        <Container>
          <img src="logoVKH.png" width="300px" alt="Logo VKH" />
          <Paragraph>{TEXT.aboutVKH}</Paragraph>
        </Container>
      </LightSection>
      <DarkSection>
        <Container>
          <Row style={{ flex: 1, alignItems: 'stretch' }}>
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
          <Row style={{ flex: 1 }}>
            <Column xs="12" md="6">
              <Cell>
                <Fade left>
                  <Image src="lidi1.png" alt={'something'} />
                </Fade>
              </Cell>
            </Column>
            <Column xs="12" md="6" style={h3Style}>
              <Cell>
                <H3 style={h3Style}>
                  „VKH je pro mě společenství mladých věřících studentů, mezi
                  kterými se cítím přijatý“
                </H3>
              </Cell>
            </Column>
          </Row>
          <Row reverse>
            <Column xs="12" md="6" style={h3Style}>
              <Cell>
                <H3>
                  „Do VéKaHáčka chodím, protože chci vytěžit se zese to nejlepší
                  jak při darování krve, tak ve schole“
                </H3>
              </Cell>
            </Column>
            <Column xs="12" md="6">
              <Cell>
                <Fade right>
                  <Image src="lidi2.png" alt={'something'} />
                </Fade>
              </Cell>
            </Column>
          </Row>
          <Row>
            <Column xs="12" md="6">
              <Cell>
                <Fade left>
                  <Image src="lidi3.png" alt={'something'} />
                </Fade>
              </Cell>
            </Column>
            <Column xs="12" md="6" style={h3Style}>
              <Cell>
                <H3>
                  „Mše, modlitba, kamarádi, akce, zajímavé přednášky, "pivo" po
                  programu to je pro me VKH“
                </H3>
              </Cell>
            </Column>
          </Row>
        </Container>
      </LightSection>
    </div>
  )
}
