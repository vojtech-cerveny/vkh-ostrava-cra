import styled, { css } from 'styled-components'
import colors from './colors'

export const Paragraph = styled.p`
  font-family: 'Montserrat', sans-serif;
  margin-bottom: 20px;
  text-align: justify;
  font-size: 1.8rem;
  line-height: 2.4rem;
`

export const H2 = styled.h2`
  font-family: 'Bebas Neue';
  font-size: 8.5rem;
  margin: 2rem 0;
  font-style: normal;
  font-weight: normal;
  text-transform: uppercase;
`

export const H3 = styled.h3`
  font-family: 'Bebas Neue';
  font-size: 3.5rem;
  line-height: 3rem;
  margin: 0rem;
  font-style: normal;
  font-weight: normal;
  text-transform: uppercase;
  color: ${colors.DARK_GREEN};
`

export const Behind = styled.div`
  position: relative;
  width: 100%;
`
export const Infront = styled.div`
  position: absolute;
  right: 0px;
  top: 0px;
  width: 100%;
`
const Section = css`
  padding: 2rem 0;
`

export const LightSection = styled.div`
  ${Section}
  background-color: white;
`

export const DarkSection = styled.div`
  ${Section}
  ${({ bg }) =>
    bg ? `background-color:${bg}` : `background-color:${colors.BG_DARK}`};
  color: white;
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

  @media only screen and (max-width: 768px) {
    ${({ reverse }) => (reverse ? 'flex-direction: column-reverse;' : '')};
  }
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

function getWidthString(span) {
  if (!span) return
  let width = (span / 12) * 100
  return `width: ${width}%;`
}

export const Column = styled.div`
  ${({ xs }) => (xs ? getWidthString(xs) : 'width: 100%')};
  @media only screen and (min-width: 768px) {
    ${({ sm }) => sm && getWidthString(sm)};
    flex-direction: column-reverse;
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
  max-width: 1300px;

  @media only screen and (max-width: 768px) {
    width: 95%;
    margin: 0 auto;
    align-self: center;
  }
`
export const Blockquote = styled.blockquote`
  padding: 10px 25px;
  width: 480px;
  text-align: center;
  position: relative;

  font-family: Montserrat;
  font-size: 35px;
  line-height: 34px;
  text-align: center;
  z-index: 10;

  :before,
  :after {
    position: absolute;
    font-size: 100px;
    color: gray;
    /* font-style: normal; */
    font-weight: 700;
  }
  :before {
    content: '„';
    bottom: 30px;
    left: 10px;
  }
  :after {
    content: '“';
    top: 0;
    right: 10px;
  }
`

export const NavItem = styled.a`
  padding: 30px 20px 0 150px;
  font-family: 'Bebas Neue';
  font-size: 3.5rem;
  line-height: 3rem;
  margin: 0rem;
  font-style: normal;
  font-weight: normal;
  text-transform: uppercase;
  color: black;
  align-self: flex-end;
`

export const Hamburger = styled.div`
  color: ${colors.BG_DARK};

  #loading-bar-left {
    animation: loading-bar-morph 5s linear 0.1s infinite;
    transform-origin: center;
    color: blue;
  }
  #loading-bar-middle {
    animation: loading-bar-morph 5s linear 0.2s infinite;
    transform-origin: center;
  }
  #loading-bar-right {
    animation: loading-bar-morph 5s linear 0.4s infinite;
    transform-origin: center;
  }

  @keyframes loading-bar-morph {
    0% {
      transform: scaleX(1);
    }
    25% {
      transform: scaleX(0.7);
    }
    50% {
      transform: scaleX(0.9);
    }
    75% {
      transform: scaleX(0.7);
    }
  }
`

export const Switch = styled.label`
  cursor: pointer;
  background: #7c7c7c;
  padding: 7px;
  width: 50px;
  height: 25px;
  border-radius: 25px;
  input {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
  }

  div {
    height: 100%;
    display: grid;
    grid-template-columns: 0fr 1fr 1fr;
    transition: 0.2s;
    //ICYMI, pseudo elements are treated as grid items
    &::after {
      content: '';
      border-radius: 50%;
      background: #15273b;
      grid-column: 2;
      transition: background-color 0.3s;
    }
  }
  input:checked {
    + .switch {
      grid-template-columns: 1fr 1fr 0fr;
      &::after {
        background-color: white;
      }
    }
  }
`
