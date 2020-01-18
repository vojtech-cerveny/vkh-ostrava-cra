import React from 'react'

import one from './one/one.png'
import two from './one/two.png'
import three from './one/three.png'
import four from './one/four.png'
import six from './one/six.png'
import seven from './one/seven.png'
import Octogen from './Octogen'
import colors from '../constants/colors'

export default function SVGOne() {
  return (
    <div
      style={{
        position: 'relative',
        height: '900px',
        width: '1100px',
        left: '-128.43px',
        margin: '0 auto',
        top: '100px',
      }}
    >
      <Octogen
        left=" 100px"
        top="450px"
        ratio={2.1}
        zIndex={1}
        speed={2}
        color={colors.GREEN}
      />

      <Octogen
        left=" 266px"
        top="500px"
        ratio={1.1}
        zIndex={2}
        speed={3}
        color={colors.RED}
      />
      <Octogen
        left=" 300px"
        top="300px"
        ratio={3.2}
        zIndex={-4}
        speed={'-2'}
        color={colors.ORANGE}
      />
      <Octogen
        left=" 400px"
        top="1000px"
        ratio={1.1}
        zIndex={1}
        speed={6}
        color={colors.LIGHT_GREEN}
      />
      <Octogen
        left=" 600px"
        top="400px"
        ratio={1.1}
        zIndex={-4}
        speed={1}
        color={colors.RED}
      />
      <Octogen
        left=" 700px"
        top="600px"
        ratio={1.5}
        zIndex={9}
        speed={2}
        color={colors.RED}
      />
      <Octogen
        left=" 800px"
        top="400px"
        ratio={1.1}
        zIndex={12}
        speed={'-2'}
        color={colors.RED}
      />
      <Octogen
        left="1000px"
        top="400px"
        ratio={1.1}
        zIndex={1}
        speed={2}
        color={colors.LIGHT_GREEN}
      />
      <img
        src={one}
        alt="deskovky"
        style={{
          position: 'absolute',
          width: '360.02px',
          height: '312.84px',
          left: '128.43px',
          top: '53.51px',
          zIndex: -1,
        }}
      />
      <img
        src={two}
        alt="mse svata"
        style={{
          position: 'absolute',
          width: '457.37px',
          height: '397.07px',
          left: '419.71px',
          top: '181.28px',
          zIndex: -3,
        }}
      />
      <img
        src={three}
        alt="kriz"
        style={{
          position: 'absolute',
          width: '204px',
          height: '178px',
          left: '825px',
          top: '130px',
          zIndex: -1,
        }}
      />
      <img
        src={four}
        alt="zpevaci"
        style={{
          position: 'absolute',
          width: '490px',
          height: '424px',
          left: '785px',
          top: '379px',
          zIndex: 10,
        }}
      />
      <img
        src={six}
        alt="kost"
        style={{
          position: 'absolute',
          width: '351px',
          height: '305px',
          left: '492px',
          top: '608px',
          zIndex: -1,
        }}
      />
      <img
        src={seven}
        alt="diskuze"
        style={{
          position: 'absolute',
          width: '347px',
          height: '302px',
          left: '134px',
          top: '394px',
          zIndex: 10,
        }}
      />
    </div>
  )
}
