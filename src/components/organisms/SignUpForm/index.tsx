import * as Style from './styles';
import useForm from '../../../hooks/common/useForm';
import BlueButton from '../../atoms/BlueButton/BlueButton';
import InputFrame from '../../molecules/InputFrame/InputFrame';
import validate from '../../../utils/vaildate.ts/AuthValidate';
import axios from 'axios';
import token from '../../../api/token';
import { ACCESS_TOKEN_KEY } from '../../../constants/token/token.constant';
import Router, { useRouter } from 'next/router';

export default function SignUpForm() {
  const router = useRouter();
  const axiosSignUpPost = (values: any) => {
    axios
      .post('http://localhost:8080/users/create', {
        email: values.email,
        password: values.password,
      })
      .then((response) => {
        console.log('회원가입 성공');
        console.log('response', response.data.token);
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
    onSubmit: axiosSignUpPost,
    validate,
  });

  return (
    <Style.FormLayout>
      <Style.SignUpForm onSubmit={handleSubmit}>
        <InputFrame
          type='text'
          value={values.nickname}
          onChange={handleChange}
          placeholder='닉네임'
          errorMessage={errors.nickname}
          name='nickname'
        />
        <InputFrame
          type='text'
          value={values.email}
          onChange={handleChange}
          placeholder='이메일'
          errorMessage={errors.email}
          name='email'
        />
        <InputFrame
          type='password'
          value={values.password}
          onChange={handleChange}
          placeholder='비밀번호'
          errorMessage={errors.password}
          name='password'
        />
        <InputFrame
          type='password'
          value={values.passwordConfirmed}
          onChange={handleChange}
          placeholder='비밀번호확인'
          errorMessage={errors.passwordConfirmed}
          name='passwordConfirmed'
        />
        <BlueButton
          type='submit'
          width='340px'
          height='70px'
          title='회원가입'
          disabled={submitting}
        />
      </Style.SignUpForm>
    </Style.FormLayout>
  );
}
