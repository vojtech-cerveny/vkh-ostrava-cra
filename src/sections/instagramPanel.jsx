import React from 'react'
import {
  H2,
  LightSection,
  InstaRow,
  Cell,
  Container,
  Column,
  Image,
} from '../css/style'
import instagram1 from '../images/instagram1.jpg'
import instagram2 from '../images/instagram2.jpg'
import instagram3 from '../images/instagram3.jpg'
import instagram4 from '../images/instagram4.jpg'
import instagram5 from '../images/instagram5.jpg'
import instagram6 from '../images/instagram6.jpg'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export function InstagramPanel() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: '60px',
    autoplay: true,
    autoplaySpeed: 2000,
    swipe: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1,
        },
      },
    ],
  }

  return (
    <LightSection>
      <Container>
        <H2>Instagram</H2>
        <Slider {...settings}>
          <Cell>
            <Image src={instagram1} />
          </Cell>
          <Cell>
            <Image src={instagram2} />
          </Cell>
          <Cell>
            <Image src={instagram3} />
          </Cell>
          <Cell>
            <Image src={instagram4} />
          </Cell>
          <Cell>
            <Image src={instagram5} />
          </Cell>
          <Cell>
            <Image src={instagram6} />
          </Cell>
        </Slider>
      </Container>
    </LightSection>
  )
}
