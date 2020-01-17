import React from 'react'
import OctagonParallax from '../components/OctagonParallax'
import { Paragraph, Row, Column } from '../css/style'
import SVGBg from '../components/SVGBg'
export function ParallaxOne() {
  const svgStyle = {
    padding: '0 30px',
    zIndex: 10,
  }
  const flexCenter = {
    display: 'flex',
    alignItems: 'center',
  }

  return (
    <div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          zIndex: -1,
          position: 'relative',
        }}
      >
        <OctagonParallax
          background={'white'}
          ratio={1.25}
          speed={-4}
          style={{ position: 'absolute', top: '50px', left: '40vw' }}
        />
        <OctagonParallax
          background={'#f4f4f4'}
          ratio={1.5}
          speed={-6}
          style={{ position: 'absolute', top: '200px', left: '50vw' }}
        />
        <OctagonParallax
          background={'#ededed'}
          ratio={0.75}
          speed={-2}
          style={{ position: 'absolute', top: '200px', left: '75vw' }}
        />
      </div>
      <div style={{ padding: '150px 0 150px' }}>
        <Row style={{ flex: 1, alignItems: 'stretch', padding: '0 100px' }}>
          <Column xs={12} md={4} style={flexCenter}>
            <SVGBg>
              <div style={{ ...svgStyle }}>
                <Paragraph>
                  joj asd asfhdsg sdhgfshf hfsofsho sdfh sdf sdofh soifhidiidid
                  m mm mm mmm mmm mmmmm mmmmmmmm mmmmm mmmmmm mmmm mmmmm mmm
                  mmmmmmmmmm mmmmm mmmm mmmm
                </Paragraph>
              </div>
            </SVGBg>
          </Column>
          <Column xs={12} md={4} style={flexCenter}>
            <SVGBg>
              <div style={svgStyle}>
                <Paragraph>
                  joj asd asfhdsg sdhgfshf hfsofsho sdfh sdf sdofh soifhidiidid
                  m mm mm mmm mmm mmmmm mmmmmmmm mmmmm mmmmmm mmmm mmmmm mmm
                  mmmmmmmmmm mmmmm mmmm mmmm
                </Paragraph>
              </div>
            </SVGBg>
          </Column>
          <Column xs={12} md={4} style={flexCenter}>
            <SVGBg>
              <div style={svgStyle}>
                <Paragraph>
                  joj asd asfhdsg sdhgfshf hfsofsho sdfh sdf sdofh soifhidiidid
                  m mm mm mmm mmm mmmmm mmmmmmmm mmmmm mmmmmm mmmm mmmmm mmm
                  mmmmmmmmmm mmmmm mmmm mmmm
                </Paragraph>
              </div>
            </SVGBg>
          </Column>
        </Row>
      </div>
    </div>
  )
}
