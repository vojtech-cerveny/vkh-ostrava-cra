import styled, { css } from 'styled-components'

export const GrayOctagon = styled.div`
  position: absolute;
  width: 212.38px;
  height: 185.1px;
  left: ${props => props.left || '0px'};
  top: ${props => props.top || '0px'};
  z-index: ${props => props.zIndex || 1};
`
