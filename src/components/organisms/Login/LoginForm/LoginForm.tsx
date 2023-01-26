import * as Style from './LoginForm.style';
import useForm from '../../../../hooks/common/useForm';
import BlueButton from '../../../atoms/BlueButton/BlueButton';
import InputFrame from '../../../molecules/InputFrame/InputFrame';
import validate from '../../../../utils/validate';
import axios from 'axios';
import token from '../../../../api/token';
import { ACCESS_TOKEN_KEY } from '../../../../constants/token/token.constant';
import Router from 'next/router';

export default function LoginForm() {
  const axiosLoginPost = (values: any) => {
    axios
      .post('http://localhost:8080/users/login', {
        email: values.email,
        password: values.password,
      })
      .then((response) => {
        console.log('response', response);
        token.setToken(ACCESS_TOKEN_KEY, response.data.token);
        alert(response.data.message);
        Router.push('/');
      })
      .catch((err) => {
        console.error('err', err);
        alert(err);
      });
  };

  const { values, errors, handleChange, handleSubmit, submitting } = useForm({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: axiosLoginPost,
    validate,
  });

  return (
    <Style.FormLayout>
      <Style.LoginForm onSubmit={handleSubmit}>
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
        <BlueButton
          type='submit'
          width='340px'
          height='70px'
          title='로그인'
          disabled={submitting}
        />
      </Style.LoginForm>
    </Style.FormLayout>
  );
}
