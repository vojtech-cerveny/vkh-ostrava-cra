import styled, {css} from 'styled-components';
import headerImg from '../images/header.jpg'
import COLORS from '../constants/colors'

export const Paragraph = styled.p`
  font-family: 'Montserrat', sans-serif;
  margin-bottom: 20px;
  padding: 0 10rem;
  text-align: justify;
`;

export const H2 = styled.h2``;

const Section = css`
  padding: 2rem 0;
`;

export const LightSection = styled.div`
  ${Section}
  background-color: white
`;

export const DarkSection = styled.div`
  ${Section}
  background-color: ${COLORS.BG_DARK};
  color: white;
`;


export const HeaderSection = styled.div`
  background-image: url(${headerImg});
  background-position: center; 
  background-size: cover; 
  min-height: 30vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

export const LogoText = styled.div`
font-family: 'Bebas Neue';
  font-size: 2.5rem;
  text-transform: uppercase;
  color: ${COLORS.PRIMARY};
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 40%;
  padding-left: 20px;
  `;

export const WordContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 1rem 0;
`

export const Word = styled.div`
  font-family: 'Bebas Neue';
  font-size: 5rem;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  flex-basis: 100%;
  flex: 1;
  min-height: 100px;
`

export const WordStyle = css`
  font-family: 'Bebas Neue';
  font-size: 5rem;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  flex-basis: 100%;
  flex: 1;
  min-height: 100px;
`