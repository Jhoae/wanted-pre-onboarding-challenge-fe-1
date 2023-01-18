import { InputHTMLAttributes } from 'react'
import styled from 'styled-components'

export const InputField = styled.input<InputHTMLAttributes<HTMLInputElement>>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};

  padding: 0.5rem;
  border: 0.1rem solid gray;
  border-radius: 0.3rem;
  box-sizing: border-box;
  outline: none;
  &:focus {
    border: 0.1rem solid black;
  }
`
