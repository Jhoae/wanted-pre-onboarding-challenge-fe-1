import * as Style from './LoginForm.style'
import useForm from '../../../../hooks/common/useForm'
import BlueBox from '../../../atoms/BlueBox/BlueBox'
import InputFrame from '../../../molecules/InputFrame/InputFrame'
import validate from '../../../../utils/validate'

// interface LoginFormProps {
//   values: StringType
//   errors: StringType
//   errorMessage: string
//   onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
//   handleSubmit?: (event: React.FormEvent<HTMLFormElement>) => Promise<void>
//   width?: string | number
//   height?: string | number
// }

export default function LoginForm() {
  const { values, errors, handleChange, handleSubmit } = useForm({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: () => {},
    validate,
  })

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
        <BlueBox type='submit' width='340px' height='70px' title='로그인' />
      </Style.LoginForm>
    </Style.FormLayout>
  )
}
