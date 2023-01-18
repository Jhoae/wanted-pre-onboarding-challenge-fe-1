import { InputHTMLAttributes } from 'react'
import styled from 'styled-components'

/// /////////////////////
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string
  placeholder?: string
  title?: string
}

export const FormLayout = styled.div<InputProps>`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 500px;
  > form > button {
    margin-top: 50px;
  }
`
export const LoginForm = styled.form`
  div {
    margin-top: 30px;
  }
`

/* export const LoginColumn = styled.div`
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
  
`
export const LoginHeader = styled.header``
 */
