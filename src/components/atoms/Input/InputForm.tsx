import { StringType } from '../../../hooks/common/useForm'

interface IInputProps {
  value: string | number
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  name: string
  className?: string
  id?: string
  placeholder?: string
  type?: string
  required?: boolean
  errors?: StringType
}

export default function InputForm({
  value,
  onChange,
  name,
  className,
  id,
  placeholder,
  type = 'text',
  required = false,
  errors,
}: IInputProps) {
  return (
    <input
      type={type}
      name={name}
      id={id}
      value={value}
      required={required}
      onChange={onChange}
      placeholder={placeholder}
    />
  )
}
