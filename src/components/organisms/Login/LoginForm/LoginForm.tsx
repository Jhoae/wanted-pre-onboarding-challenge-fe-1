import * as Style from './LoginForm.style'
import useForm from '../../../../hooks/common/useForm'
import BlueButton from '../../../atoms/BlueButton/BlueButton'
import InputFrame from '../../../molecules/InputFrame/InputFrame'
import validate from '../../../../utils/validate'
import { useState } from 'react'

export default function LoginForm() {
  const { values, errors, handleChange, handleSubmit, submitting } = useForm({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: () => {},
    validate,
  })

  const [count, setCount] = useState(0)
  const onClick = () => {
    setCount((prev) => prev + 1)
  }

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
          onClick={onClick}
          disabled={submitting}
        />
      </Style.LoginForm>
    </Style.FormLayout>
  )
}
