import { StringType } from '../../../hooks/common/useForm'

export interface IInputProps {
  value?: string
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  // onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  // handleSubmit?: (event: React.FormEvent<HTMLFormElement>) => Promise<void>
  width?: string | number
  height?: string | number
  id?: string
  placeholder?: string
  type?: string
  errors?: StringType
  errorMessage?: string
}

export default function InputForm({
  type = 'text',
  value,
  handleChange,
  id,
  placeholder,
  width = '340px',
}: IInputProps) {
  return (
    <input
      type={type}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      width={width}
      id={id}
    />
  )
}
