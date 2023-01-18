import { StringType } from '../../../../hooks/common/useForm'
import BlueBox from '../../../atoms/BlueBox/BlueBox'
import Input from '../../../atoms/Input/Input'
import * as Style from './LoginFormBox.style'

interface LoginFormProps {
  values: StringType
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => Promise<void>
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  errors: StringType
}

export default function LoginForm({ handleSubmit, values, handleChange, errors }: LoginFormProps) {
  return (
    <Style.LoginForm onSubmit={handleSubmit}>
      <Input
        type='text'
        value={values.email}
        handleChange={handleChange}
        placeholder='이메일'
        //        errorMessage={errors.email}
        width='3400px'
      />

      <Input
        type='password'
        value={values.password}
        handleChange={handleChange}
        placeholder='비밀번호'
        //        errorMessage={errors.password}
        width='340px'
      />
      <div>
        <BlueBox type='submit' width='340px' height='70px' title='로그인' />
      </div>
    </Style.LoginForm>
  )
}
