import styled from 'styled-components'
import Input from '../../atoms/Input/Input'
import BlueBox from '../../../components/atoms/BlueBox/BlueBox'

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
  margin-top: 30px;
  height: 60px;
`

export const LoginBlueBox = styled(BlueBox)`
  margin-top: 50px;
`
