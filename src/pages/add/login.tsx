import axios from 'axios';
import { useRouter } from 'next/router';
import token from '../../api/token';
import { ACCESS_TOKEN_KEY } from '../../constants/token/token.constant';
import useForm from '../../hooks/common/useForm';
import { RequireNoAuth } from '../../utils/HOC';
import validate from '../../utils/vaildate.ts/AuthValidate';
import Navbar from './navbar';
import * as S from './styles';

function Login() {
  const router = useRouter();

  const axiosLoginPost = (values: any) => {
    axios
      .post('http://localhost:8080/users/login', {
        email: values.email,
        password: values.password,
      })
      .then((response) => {
        token.setToken(ACCESS_TOKEN_KEY, response.data.token);
        router.push('/');
      })
      .catch((err) => {
        console.error('err', err);
      });
  };

  const { values, errors, handleChange, handleSubmit, submitting } = useForm({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: () => {
      alert(`로그인 시도:::'email :', ${values.email}, 'password :', ${values.password}`);
    },
    validate,
  });

  const goSignup = () => {
    router.push('/add/signup');
  };

  return (
    <RequireNoAuth>
      <>
        <Navbar />
        <S.ContentBox>
          <S.Title>로그인</S.Title>
          <S.Form onSubmit={handleSubmit}>
            <S.InputLayout>
              <S.InputFiled
                placeholder='이메일'
                type='text'
                name='email'
                spellCheck='false'
                value={values.email}
                onChange={handleChange}
                //                errorMessage={errors.email}
              />
              <S.InputFiled
                placeholder='비밀번호'
                type='password'
                value={values.password}
                onChange={handleChange}
                name='password'
                //                errorMessage={errors.password}
              />
            </S.InputLayout>
            <S.Button1 type='submit' disabled={submitting}>
              로그인 하기
            </S.Button1>
          </S.Form>
          <S.Button2 type='button' onClick={goSignup}>
            회원가입
          </S.Button2>
        </S.ContentBox>
      </>
    </RequireNoAuth>
  );
}

export default Login;
