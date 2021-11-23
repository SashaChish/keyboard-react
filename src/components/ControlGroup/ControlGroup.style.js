import styled from 'styled-components'
import { color2 } from '../../theme'

export const PresetName = styled.div`
  margin-top: 10px;
  font-size: 22px;
  letter-spacing: 2px;
  color: ${color2};
`

export const H3 = styled.h3`
  color: ${color2};
  letter-spacing: 2px;
  font-size: 20px;
`

export const Select = styled.select`
  height: 28px;
  font-size: 16px;
  border-radius: 10px;
  padding: 0px 15px;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const OptionsWrap = styled.div`
  min-width: 380px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
