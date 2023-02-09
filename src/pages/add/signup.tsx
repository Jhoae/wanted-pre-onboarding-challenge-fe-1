import { useRouter } from 'next/router';
import Navbar from './navbar';
import * as S from './styles';

function SignUp() {
  const router = useRouter();

  const goSignup = () => {
    router.push('/add/signup');
  };

  return (
    <>
      <Navbar />
      <S.ContentBox>
        <S.Title>Sign Up</S.Title>
        <S.InputLayout>
          <S.ConfirmButton>confirm</S.ConfirmButton>
          <S.InputFiled placeholder='e-mail' />
          <S.InputFiled placeholder='password' />
          <S.InputFiled placeholder='password-check' />
          <S.InputTitle>how do we call you?</S.InputTitle>
          <S.InputFiled placeholder='nickname' />
        </S.InputLayout>
        <S.Button1>Sign up</S.Button1>
      </S.ContentBox>
    </>
  );
}

export default SignUp;
