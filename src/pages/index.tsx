import useForm from '../hooks/common/useForm'
import validate from '../utils/validate'
import LoginPage from '../components/templates/Login/Login'

export default function Login() {
  const { values, errors, submitting, handleChange, handleSubmit } = useForm({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: () => {},
    validate,
  })

  return (
    <LoginPage
      values={values}
      errors={errors}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      submitting={submitting}
      HeaderText={`원티드 프리온보딩 챌린지 Toda App 사전 과제`}
    />
  )
}
