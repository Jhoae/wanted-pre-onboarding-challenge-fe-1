import axios from 'axios';
import { useRouter } from 'next/router';
import token from '../../api/token';
import { ACCESS_TOKEN_KEY } from '../../constants/token/token.constant';
import useForm from '../../hooks/common/useForm';
import { RequireNoAuth } from '../../utils/HOC/requireNoAuth';
import validate from '../../utils/vaildate.ts/AuthValidate';
import Navbar from './navbar';
import * as S from './styles';

function SignUp() {
  const router = useRouter();
  const axiosSignUpPost = (values: any) => {
    axios
      .post('http://localhost:8080/users/create', {
        email: values.email,
        password: values.password,
      })
      .then((response) => {
        token.setToken(ACCESS_TOKEN_KEY, response.data.token);
        router.push('/');
      })
      .catch((err) => {
        console.error('err', err);
        alert('오류 : 회원가입에 실패했습니다.');
      });
  };

  const { values, errors, handleChange, handleSubmit, submitting } = useForm({
    initialValues: {
      email: '',
      password: '',
      nickname: '',
      passwordConfirmed: '',
    },
    onSubmit: () => {
      alert(
        `회원가입 시도:::'email :', ${values.email}, 'password :', ${values.password}, 닉네임 : ${values.nickname}`,
      );
    },
    validate,
  });

  const checkEmail = () => {
    alert(`이메일 중복 체크 : ${values.email}`);
  };

  return (
    <RequireNoAuth>
      <>
        <Navbar />
        <S.ContentBox>
          <S.Title>Sign Up</S.Title>
          <S.Form onSubmit={handleSubmit}>
            <S.InputLayout>
              <S.ConfirmButton type='button' onClick={checkEmail}>
                confirm
              </S.ConfirmButton>
              <S.InputFiled
                placeholder='e-mail'
                type='email'
                spellCheck='false'
                name='email'
                onChange={handleChange}
                //                errorMessage={errors.email}
              />
              <S.InputFiled
                placeholder='password'
                type='password'
                value={values.password}
                onChange={handleChange}
                name='password'
                //                errorMessage={errors.password}
              />
              <S.InputFiled
                placeholder='password-check'
                type='password'
                value={values.passwordConfirmed}
                onChange={handleChange}
                name='passwordConfirmed'
                //                errorMessage={errors.passwordConfirmed}
              />
              <S.InputTitle htmlFor='nickname'>how do we call you?</S.InputTitle>
              <S.InputFiled
                id='nickname'
                placeholder='nickname'
                type='text'
                value={values.nickname}
                onChange={handleChange}
                name='nickname'
                //                errorMessage={errors.nickname}
              />
            </S.InputLayout>
            <S.Button1 type='submit' disabled={submitting}>
              Sign up
            </S.Button1>
          </S.Form>
        </S.ContentBox>
      </>
    </RequireNoAuth>
  );
}

export default SignUp;
