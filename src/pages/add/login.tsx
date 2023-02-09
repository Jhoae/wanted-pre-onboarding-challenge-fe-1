import { useRouter } from 'next/router';
import Navbar from './navbar';
import * as S from './styles';

function Login() {
  const router = useRouter();

  const goSignup = () => {
    router.push('/add/signup');
  };

  return (
    <>
      <Navbar />
      <S.ContentBox>
        <S.Title>Login</S.Title>
        <S.InputLayout>
          <S.InputFiled placeholder='e-mail' type='email' spellCheck='false' />
          <S.InputFiled placeholder='password' type='password' />
        </S.InputLayout>
        <S.Button1>Login</S.Button1>
        <S.Button2 onClick={goSignup}>Sign up?</S.Button2>
      </S.ContentBox>
    </>
  );
}

export default Login;
