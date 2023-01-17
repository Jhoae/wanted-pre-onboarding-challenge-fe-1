import * as Style from './LoginForm.style'
import Input, { IInputProps } from '../../atoms/Input/Input'
import { StringType } from '../../../hooks/common/useForm'

interface LoginFormProps extends IInputProps {
  handleSubmit?: (event: React.FormEvent<HTMLFormElement>) => Promise<void>
  values: StringType
}

export default function LoginForm({
  values,
  type = 'text',
  handleSubmit,
  handleChange,
  width = '340px',
  height,
  placeholder,
  errorMessage,
}: LoginFormProps) {
  return (
    <Style.InputLayout width={width} height={height}>
      <Style.LoginForm onSubmit={handleSubmit}>
        <Input
          type={type}
          value={values.email}
          handleChange={handleChange}
          placeholder={placeholder}
          // errorMessage={errors.email}
          width={width}
        />
        <Style.ErrorMessage>{errorMessage}</Style.ErrorMessage>
        {/*  <Style.LoginInput
          type='password'
          name='password'
          value={values.password}
          onChange={handleChange}
          placeholder='비밀번호'
          errorMessage={errors.password}
          width='340px'
        /> */}
      </Style.LoginForm>
    </Style.InputLayout>
  )
}
