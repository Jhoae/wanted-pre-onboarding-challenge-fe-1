import { ChangeEvent } from 'react'
import InputField from '../../components/atoms/Input/Input'
import useForm from '../../hooks/common/useForm'
import validate from '../../utils/validate'

export default function Auth() {
  const { values, errors, handleChange, handleSubmit } = useForm({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: () => {},
    validate,
  })
  return (
    <>
      <div>auth</div>
      <InputField
        onChange={function (event: ChangeEvent<HTMLInputElement>): void {
          throw new Error('Function not implemented.')
        }}
        value={values.email}
      />
    </>
  )
}
