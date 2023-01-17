import { IFormReturns } from '../../../hooks/common/useForm'
import * as Style from './Login.styles'
import LoginTitle from '../../organisms/Login/LoginTitle/LoginTitle'
import LoginForm from '../../organisms/Login/LoginFormBox/LoginFormBox'

interface LoginTypes extends IFormReturns {
  HeaderText: string
}

export default function Login({
  values,
  errors,
  handleChange,
  handleSubmit,
  HeaderText,
}: LoginTypes) {
  return (
    <>
      <Style.LoginColumn>
        <LoginTitle HeaderText={HeaderText} />
        <LoginForm
          values={values}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          errors={errors}
        />
      </Style.LoginColumn>
    </>
  )
}
