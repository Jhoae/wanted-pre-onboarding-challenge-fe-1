import styled from 'styled-components'
import { BlueBoxProps } from './BlueBox'

export const BlueBox = styled.button<BlueBoxProps>`
  background: #2962ff;
  border-radius: 30px;

  width: ${(props) => props.width};
  height: ${(props) => props.height};
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 29px;
  text-align: center;
  color: #ffffff;
`
