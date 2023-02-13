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
          <S.Title>회원가입</S.Title>
          <S.Form onSubmit={handleSubmit}>
            <S.InputLayout>
              <S.ConfirmButton type='button' onClick={checkEmail}>
                확인
              </S.ConfirmButton>
              <S.InputFiled
                placeholder='이메일 입력'
                type='text'
                spellCheck='false'
                name='email'
                onChange={handleChange}
                //                errorMessage={errors.email}
              />
              <S.InputTitle htmlFor='nickname'>닉네임을 정해주세요</S.InputTitle>
              <S.InputFiled
                id='nickname'
                placeholder='닉네임 입력'
                type='text'
                value={values.nickname}
                onChange={handleChange}
                name='nickname'
                //                errorMessage={errors.nickname}
              />
              <S.InputFiled
                placeholder='비밀번호 입력'
                type='password'
                value={values.password}
                onChange={handleChange}
                name='password'
                //                errorMessage={errors.password}
              />
              <S.InputFiled
                placeholder='비밀번호 확인'
                type='password'
                value={values.passwordConfirmed}
                onChange={handleChange}
                name='passwordConfirmed'
                //                errorMessage={errors.passwordConfirmed}
              />
            </S.InputLayout>
            <S.Button1 type='submit' disabled={submitting}>
              회원가입 하기
            </S.Button1>
          </S.Form>
        </S.ContentBox>
      </>
    </RequireNoAuth>
  );
}

export default SignUp;
