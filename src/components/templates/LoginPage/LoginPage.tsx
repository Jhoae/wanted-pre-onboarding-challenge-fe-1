import LoginForm from '../../organisms/Login/LoginForm/LoginForm'
import LoginTitle from '../../molecules/LoginTitle/LoginTitle'
import * as Style from './LoginPage.styles'

export default function LoginPage() {
  return (
    <>
      <Style.LoginColumn>
        <LoginTitle HeaderText={`원티드 프리온보딩 챌린지 Toda App 사전 과제`} />
        <LoginForm />
      </Style.LoginColumn>
    </>
  )
}
