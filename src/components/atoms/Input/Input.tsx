import * as Style from './Input.styles'

export interface InputFieldProps {
  type?: string
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  width?: string | number
  height?: string | number
  name: string
  id?: string
  //  errors?: StringType
  //  errorMessage?: string
}

export default function InputField({
  type = 'text',
  value,
  onChange,
  id,
  placeholder,
  name,
  width = '30rem',
  height = '5rem',
}: InputFieldProps) {
  return (
    <Style.InputField
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      width={width}
      height={height}
      id={id}
      name={name}
    />
  )
}
