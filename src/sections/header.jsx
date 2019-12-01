import React from "react";
import {HeaderSection, LogoText} from '../css/style'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

export function Header() {
  return (
    <Slider autoplay={4000} infinite={true}>
      <HeaderSection key={0}>
        <LogoText>Vysokoškolské katolické hnutí</LogoText>
      </HeaderSection>
      <HeaderSection key={1}>
        <LogoText>Tohle je masakr co</LogoText>
      </HeaderSection>
      <HeaderSection key={2}>
        <LogoText>Jupijou.</LogoText>
      </HeaderSection>
    </Slider>
  );
}
