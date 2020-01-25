import React from 'react'

import one from './one/one.png'
import two from './one/two.png'
import three from './one/three.png'
import four from './one/four.png'
import six from './one/six.png'
import seven from './one/seven.png'
import Octogen from './Octogen'
import colors from '../constants/colors'
import BorderOctagon from './BorderOctagon'

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
        left=" -30px"
        top="450px"
        ratio={2.1}
        zIndex={1}
        speed={2}
        color={colors.LIGHT_GREEN}
      />
      <Octogen
        left=" 250px"
        top="1000px"
        ratio={2.3}
        zIndex={2}
        speed={3}
        color={colors.RED}
      />
      <Octogen
        left=" 400px"
        top="1300px"
        ratio={1}
        zIndex={-2}
        speed={7}
        color={colors.RED}
      />
      <Octogen
        left=" 650px"
        top="1000px"
        ratio={0.7}
        zIndex={1}
        speed={6}
        color={colors.DARK_GREEN}
      />
      <Octogen
        left=" 350px"
        top="900px"
        ratio={0.9}
        zIndex={9}
        speed={5}
        color={colors.ORANGE}
      />
      <Octogen
        left=" 400px"
        top="500px"
        ratio={2.2}
        zIndex={-3}
        speed={1}
        color={colors.LIGHT_GRAY100}
        opacity={0.5}
      />
      <Octogen
        left=" 380px"
        top="1100px"
        ratio={1.9}
        zIndex={1}
        speed={5}
        color={colors.LIGHT_GRAY100}
        opacity={0.7}
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
        left=" 530px"
        top="220px"
        ratio={2.1}
        zIndex={-2}
        speed={2}
        color={colors.ORANGE}
      />
      <Octogen
        left=" 960px"
        top="700px"
        ratio={1.5}
        zIndex={3}
        speed={7}
        color={colors.LIGHT_GRAY200}
        opacity={0.5}
      />
      <BorderOctagon
        left="850px"
        top="300px"
        ratio={2}
        speed={1}
        zIndex={1}
        color={colors.RED}
      />
      <BorderOctagon
        left="850px"
        top="300px"
        ratio={1.5}
        speed={1}
        zIndex={-2}
        color={colors.LIGHT_GREEN}
      />
      <BorderOctagon
        left="730px"
        top="380px"
        ratio={2}
        speed={3}
        zIndex={-2}
        color={colors.ORANGE}
      />
      <BorderOctagon
        left="700px"
        top="80px"
        ratio={2.2}
        speed={1}
        zIndex={-2}
        color={colors.LIGHT_GREEN}
      />
      <BorderOctagon
        left="700px"
        top="500px"
        ratio={2.4}
        speed={1.5}
        zIndex={-2}
        color={colors.LIGHT_GREEN}
      />
      <BorderOctagon
        left="180px"
        top="790px"
        ratio={2.4}
        speed={2}
        zIndex={-2}
        color={colors.LIGHT_GREEN}
      />
      <BorderOctagon
        left="330px"
        top="250px"
        ratio={2}
        speed={2}
        zIndex={-2}
        color={colors.RED}
      />
      <Octogen
        left="930px"
        top="400px"
        ratio={2}
        zIndex={1}
        speed={3}
        color={colors.ORANGE}
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
          zIndex: -3,
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
          zIndex: 5,
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
          zIndex: -3,
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
          zIndex: -3,
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
