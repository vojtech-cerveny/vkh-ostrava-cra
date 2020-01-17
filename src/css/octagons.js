import styled, { css } from 'styled-components'

export const GrayOctagon = styled.div`
  position: absolute;
  width: 212.38px;
  height: 185.1px;
  left: ${props => props.left || '946.8px'};
  top: ${props => props.top || '500.29px'};
  z-index: ${props => props.zIndex || 1};
`
