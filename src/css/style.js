import styled, { css } from 'styled-components'
import headerImg from '../images/header.jpg'
import COLORS from '../constants/colors'

export const Paragraph = styled.p`
  font-family: 'Montserrat', sans-serif;
  margin-bottom: 20px;
  text-align: justify;
`

export const H2 = styled.h2``

const Section = css`
  padding: 2rem 0;
`

export const LightSection = styled.div`
  ${Section}
  background-color: white
`

export const DarkSection = styled.div`
  ${Section}
  ${({ bg }) =>
    bg ? `background-color:${bg}` : `background-color:${COLORS.BG_DARK}`};
  color: white;
`

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
  font-size: 6vw;
  text-transform: uppercase;
  color: ${COLORS.PRIMARY};
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 40%;
  padding-left: 20px;
  text-shadow: 2px 2px black;
`

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

const CellDimesion = css`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  flex-basis: 100%;
  flex: 1;
`

export const CellCss = css`
  ${CellDimesion}
  font-family: 'Bebas Neue';
  font-size: 5rem;
  text-transform: uppercase;

  min-height: 100px;
`

export const Cell = styled.div`
  ${CellDimesion}
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

export const InstaRow = styled(Row)`
  @media only screen and (min-width: 768px) {
    width: 90%;
    height: 27%;
    align-self: center;
  }
`

export const Image = styled.img`
  align-self: center;
  width: 100%;
`

export const Card = styled.div`
  @media only screen and (min-width: 768px) {
    width: 90%;
    align-self: center;
  }
  height: 100px;
  background-color: ${props => props.bg};
  color: gray;
  align-self: center;
  text-align: left;
  transition: all 0.25s ease-in;
  border-bottom: 5px solid transparent;
  border-radius: 2px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.15);
  padding: 10px;
  margin: 10px 0;
  &:hover {
    -webkit-transform: translateY(-5px);
    transform: translateY(-5px);
    border: none;
    border-bottom: 5px solid #2196fe;
  }
`

function getWidthString(span) {
  if (!span) return
  let width = (span / 12) * 100
  return `width: ${width}%;`
}

export const Column = styled.div`
  ${({ xs }) => (xs ? getWidthString(xs) : 'width: 100%')};
  @media only screen and (min-width: 768px) {
    ${({ sm }) => sm && getWidthString(sm)};
  }

  @media only screen and (min-width: 992px) {
    ${({ md }) => md && getWidthString(md)};
  }

  @media only screen and (min-width: 1200px) {
    ${({ lg }) => lg && getWidthString(lg)};
  }
`

export const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  max-width: 1280px;

  @media only screen and (min-width: 768px) {
    width: 90%;
    align-self: center;
  }

  @media only screen and (min-width: 992px) {
    width: 80%;
    align-self: center;
  }
`
