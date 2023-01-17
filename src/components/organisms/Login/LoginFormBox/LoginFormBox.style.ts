import { InputHTMLAttributes } from 'react'
import styled from 'styled-components'

import Input from '../../../atoms/Input/Input'
import BlueBox from '../../../atoms/BlueBox/BlueBox'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string
  placeholder?: string
  title?: string
}

export const SignInFormTitle = styled.span`
  display: block;
  font-size: 0.625rem;
  margin-bottom: 0.3125rem;
`

export const InputLayout = styled.div<InputProps>`
  display: flex;
  flex-direction: column;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`

export const InputField = styled.input`
  height: 2rem;
  padding: 0.5rem;
  border: 0.1rem solid gray;
  border-radius: 0.3rem;
  box-sizing: border-box;
  outline: none;
  &:focus {
    border: 0.1rem solid black;
  }
`

export const ErrorMessage = styled.span`
  margin-top: 0.3rem;
  color: red;
  font-size: 0.5rem;
`

/// /////////////////////////////////////

export const LoginColumn = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
  // color: #d5d5d5;
  padding-left: 100px;
  padding-right: 100px;
  width: 300px;
  height: 576px;
  border: 1px solid #d5d5d5;
  border-radius: 8px;
  > header {
    line-height: 1.1;
    font-style: normal;
    font-weight: bold;
    font-size: 23px;
    font-family: 'Noto Sans KR';
    width: 300px;
    height: 50px;
    padding-top: 50px;
  }
  > div {
    margin-top: 30px;
    display: flex;
    justify-content: right;
    width: 340px;
    justify-self: right;
    > p {
      color: #adb5bd;
    }
    > a {
      margin-left: 10px;
      color: blue;
    }
  }
`

export const LoginHeader = styled.header``

export const LoginForm = styled.form`
  div {
    margin-top: 50px;
  }
`

export const LoginInput = styled(Input)`
  height: 2rem;
  padding: 0.5rem;
  border: 0.1rem solid gray;
  border-radius: 0.3rem;
  box-sizing: border-box;
  outline: none;
  //  width: ${(props) => props.width};
  width: 300px;
  height: 60px;
  margin-top: 30px;
  &:focus {
    border: 0.1rem solid black;
  }
`

export const LoginBlueBox = styled(BlueBox)`
  margin-top: 50px;
`
