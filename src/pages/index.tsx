import Link from 'next/link'
import Input from '../components/atoms/Input/Input'
import useForm from '../hooks/common/useForm'
import validate from '../utils/validate'

// import { BlueBox } from '../components/atoms/BlueBox/BlueBox.styles'
import BlueBox from '../components/atoms/BlueBox/BlueBox'
import Form from '../components/atoms/Form/Form'
import { HomeColumn } from './Home.styles'
import styled from 'styled-components'

const HomeForm = styled(Form)`
  div {
    margin-top: 50px;
  }
`

const HomeInput = styled(Input)`
  margin-top: 30px;
  height: 60px;
` /* 
const HomeBlueBox = styled(BlueBox)`
  margin-top: 50px;
` */

export default function Home() {
  const { values, errors, submitting, handleChange, handleSubmit } = useForm({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: () => {},
    validate,
  })

  return (
    <>
      <HomeColumn>
        <header>
          원티드 프리온보딩 챌린지 <br />
          Toda App 사전 과제
        </header>
        <div>
          <p>아직 회원이 아니신가요?</p>
          <Link href='/auth/signUp'>회원가입</Link>
        </div>
        <HomeForm onSubmit={handleSubmit}>
          <HomeInput
            type='text'
            name='email'
            value={values.email}
            onChange={handleChange}
            placeholder='이메일'
            errorMessage={errors.email}
            width='340px'
          />

          <HomeInput
            type='password'
            name='password'
            value={values.password}
            onChange={handleChange}
            placeholder='비밀번호'
            errorMessage={errors.password}
            width='340px'
          />

          <div>
            <BlueBox type='submit' width='340px' height='70px' title='로그인' />
          </div>
        </HomeForm>
      </HomeColumn>
    </>
  )
}
