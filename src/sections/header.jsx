import React from "react";
import {HeaderSection, LogoText} from '../css/style'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

import Arrow from '../components/Arrow'

export function Header() {
  return (
    <div style={{height: '100hv'}}>
      <Arrow />
    <Slider autoplay={3000} infinite={true} touchDisabled={true}>
      <HeaderSection key={0}>
        <LogoText>Vysokoškolské katolické hnutí</LogoText>

      </HeaderSection>
      <HeaderSection key={1}>
        <LogoText>VKH sem, VKH tam</LogoText>
        
      </HeaderSection>
      <HeaderSection key={2}>
        <LogoText>Jupijou.</LogoText>
      </HeaderSection>
    </Slider>
    </div>
  );
}
