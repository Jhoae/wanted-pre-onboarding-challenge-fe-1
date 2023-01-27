import SignUpForm from '../../organisms/SignUpForm';
import Title from '../../molecules/Title/Title';
import * as Style from './SignUpPage.styles';

export default function SignUpPage() {
  return (
    <>
      <Style.SignUpColumn>
        <Title HeaderText={`회원가입`} signUpGuide={false} />
        <SignUpForm />
      </Style.SignUpColumn>
    </>
  );
}
