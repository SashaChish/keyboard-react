import styled from 'styled-components'
import { color1, color2 } from '../../theme'

export const Button = styled.button`
  padding: 5px;
  margin: 20px 15px 0 0;
  letter-spacing: 2px;
	font-size: 17px;
  border: none;
  border-bottom: 2px solid ${color2};
  text-transform: uppercase;
  background-color: ${color1};
  ${({ disabled }) =>
    !disabled &&
    `
    &:hover {
      cursor: pointer;
      color: #0081ff;
      transition: color ease-in-out 0.2s;
			border-bottom: 2px solid #0081ff;
    }
  `}
`

export const ButtonsWrap = styled.div`
  min-width: 350px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`
