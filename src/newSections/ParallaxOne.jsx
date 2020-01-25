import React from 'react'
import NormalOctogen from '../components/NormalOctogen'
import Octogen from '../components/Octogen'
import Quote from '../components/Quote'
import TEXTS from '../constants/texts'
import { Behind, Infront } from '../css/style'
import colors from '../constants/colors'
import BorderOctagon from '../components/BorderOctagon'

export function ParallaxOne() {
  return (
    <div id="quotes" style={{ margin: '0 auto' }}>
      <Behind
        style={{
          position: 'relative',
          height: '900px',
          width: '1100px',
          left: '-416px',
          margin: '0 auto',
          top: '-146px',
          transform: 'scale(0.8)',
        }}
      >
        <Octogen
          left="1300px"
          top="900px"
          ratio={1.3}
          zIndex={-1}
          speed={2.4}
          color={colors.ORANGE}
        />
        <Octogen
          left="461px"
          top="1415px"
          ratio={3.5}
          zIndex={-1}
          speed={3}
          color={colors.DARK_GREEN}
        />
        <Octogen
          left="750px"
          top="1250px"
          ratio={3.5}
          zIndex={-3}
          speed={3}
          color={colors.ORANGE}
        />
        <Octogen
          left="1050px"
          top="1000px"
          ratio={2}
          zIndex={1}
          speed={3}
          color={colors.LIGHT_GRAY200}
          opacity={0.5}
        />
        <Octogen
          left="950px"
          top="1200px"
          ratio={2}
          zIndex={1}
          speed={3}
          color={colors.LIGHT_GRAY200}
          opacity={0.5}
        />
        <Octogen
          left="430px"
          top="1400px"
          ratio={2}
          zIndex={1}
          speed={4}
          color={colors.LIGHT_GRAY200}
          opacity={0.7}
        />
        <Octogen
          left="350px"
          top="1650px"
          ratio={2}
          zIndex={1}
          speed={4}
          color={colors.LIGHT_GRAY200}
          opacity={0.4}
        />
        <Octogen
          left="500px"
          top="2200px"
          ratio={2}
          zIndex={1}
          speed={5}
          color={colors.LIGHT_GRAY200}
          opacity={0.3}
        />
        <Octogen
          left="1200px"
          top="2250px"
          ratio={2}
          zIndex={1}
          speed={5}
          color={colors.LIGHT_GRAY200}
          opacity={0.3}
        />
        <Octogen
          left="1120px"
          top="2460px"
          ratio={2}
          zIndex={7}
          speed={5}
          color={colors.LIGHT_GRAY200}
          opacity={0.3}
        />
        <Octogen
          left="1200px"
          top="2800px"
          ratio={2}
          zIndex={1}
          speed={6}
          color={colors.LIGHT_GRAY200}
          opacity={0.3}
        />
        <Octogen
          left="920px"
          top="2850px"
          ratio={1.3}
          zIndex={-3}
          speed={6}
          color={colors.RED}
        />
        <BorderOctagon
          left="951px"
          top="1660px"
          ratio={5}
          zIndex={2}
          speed={3}
          color={colors.ORANGE}
        />
        <BorderOctagon
          left="980px"
          top="700px"
          ratio={2}
          zIndex={2}
          speed={2}
          color={colors.DARK_GREEN}
        />
        <BorderOctagon
          left="670px"
          top="2115px"
          ratio={1.5}
          speed={4}
          zIndex={-2}
          color={colors.RED}
        />
        <BorderOctagon
          left="540px"
          top="2100px"
          ratio={2.5}
          speed={4}
          zIndex={-2}
          color={colors.GREEN}
        />
        <BorderOctagon
          left="650px"
          top="700px"
          ratio={3.5}
          zIndex={6}
          speed={2}
          color={colors.LIGHT_GREEN}
        />
        <BorderOctagon
          left="450px"
          top="450px"
          ratio={4.5}
          zIndex={9}
          speed={2}
          color={colors.DARK_GREEN}
        />
        <NormalOctogen
          left="751px"
          top="146px"
          ratio={4}
          zIndex={-5}
          color={colors.RED}
        />
        <NormalOctogen
          left="1050px"
          top="1000px"
          ratio={3}
          zIndex={2}
          speed={1}
          color={colors.LIGHT_GREEN}
        />
        <img
          style={{ position: 'absolute', left: '1100px', top: '358px' }}
          src="images/quotes/top.png"
          alt="top quote"
        />
        <img
          style={{ position: 'absolute', left: '790px', top: '535px' }}
          src="images/quotes/mid.png"
          alt="mid quote"
        />
        <img
          style={{ position: 'absolute', left: '810px', top: '850px' }}
          src="images/quotes/down.png"
          alt="down quote"
        />
        <Quote style={{ position: 'absolute', left: '217px', top: '518px' }}>
          {TEXTS.quotes[0]}
        </Quote>
        <Quote style={{ position: 'absolute', left: '1365px', top: '305px' }}>
          {TEXTS.quotes[1]}
        </Quote>
        <Quote style={{ position: 'absolute', left: '1055px', top: '648px' }}>
          {TEXTS.quotes[2]}
        </Quote>
      </Behind>
    </div>
  )
}
