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
          <S.InputFiled placeholder='e-mail' type='email' spellCheck='false' />
          <S.InputFiled placeholder='password' type='password' />
          <S.InputFiled placeholder='password-check' type='password' />
          <S.InputTitle htmlFor='nickname'>how do we call you?</S.InputTitle>
          <S.InputFiled id='nickname' placeholder='nickname' type='text' />
        </S.InputLayout>
        <S.Button1>Sign up</S.Button1>
      </S.ContentBox>
    </>
  );
}

export default SignUp;
