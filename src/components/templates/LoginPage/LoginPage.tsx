import LoginForm from '../../organisms/LoginForm';
import Title from '../../molecules/Title/Title';
import * as Style from './LoginPage.styles';

export default function LoginPage() {
  return (
    <>
      <Style.LoginColumn>
        <Title HeaderText={`원티드 프리온보딩 챌린지 Toda App 사전 과제`} signUpGuide={true} />
        <LoginForm />
      </Style.LoginColumn>
    </>
  );
}
