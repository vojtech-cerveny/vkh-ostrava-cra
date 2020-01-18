import React from 'react'
import NormalOctogen from '../components/NormalOctogen'
import Octogen from '../components/Octogen'
import Quote from '../components/Quote'
import TEXTS from '../constants/texts'
import { Behind, Infront } from '../css/style'
import colors from '../constants/colors'

export function ParallaxOne() {
  return (
    <div style={{ margin: '0 auto' }}>
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
          ratio={2}
          zIndex={-1}
          speed={2}
          color={colors.ORANGE}
        />
        <Octogen
          left="700px"
          top="1550px"
          ratio={1.5}
          zIndex={-1}
          speed={3}
          color={colors.DARK_GREEN}
        />
        <Octogen
          left="1000px"
          top="1450px"
          ratio={1.5}
          zIndex={2}
          speed={3}
          color={colors.RED}
        />
        <Octogen
          left="600px"
          top="2000px"
          ratio={1}
          zIndex={-1}
          speed={4}
          color={colors.RED}
        />
        <NormalOctogen
          left="751px"
          top="146px"
          ratio={4}
          zIndex={2}
          color={colors.RED}
        />
        <NormalOctogen
          left="416px"
          top="359px"
          ratio={4}
          zIndex={2}
          color={colors.GREEN}
        />
        <NormalOctogen
          left="1076px"
          top="675px"
          ratio={4}
          zIndex={2}
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
        <Quote style={{ position: 'absolute', left: '217px', top: '495px' }}>
          {TEXTS.quotes[0]}
        </Quote>
        <Quote style={{ position: 'absolute', left: '532px', top: '117px' }}>
          {TEXTS.quotes[1]}
        </Quote>
        <Quote style={{ position: 'absolute', left: '1130px', top: '800px' }}>
          {TEXTS.quotes[2]}
        </Quote>
      </Behind>
    </div>
  )
}
