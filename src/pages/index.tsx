import LoginForm from '../components/organisms/Login/LoginForm/LoginForm'
import LoginTitle from '../components/molecules/LoginTitle/LoginTitle'
import * as Style from './Login.styles'

export default function Login() {
  return (
    <>
      <Style.LoginColumn>
        <LoginTitle HeaderText={`원티드 프리온보딩 챌린지 Toda App 사전 과제`} />
        <LoginForm />
      </Style.LoginColumn>
    </>
  )
}
