import styled, { css } from 'styled-components'

const Divider = styled.div`
  background-color: #f1f6f9;
  width: 100%;
  height: 1px;
  margin-top: 5px;
  margin-bottom: 5px;
  ${props =>
    props.horizontal &&
    css`
      width: 100%;
      height: 1px;
    `} ${props =>
  props.vertical &&
    css`
      width: 1px;
      height: 100%;
    `};
`
export default Divider
