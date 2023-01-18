import InputField, { InputFieldProps } from '../../atoms/Input/Input'
import * as Style from './InputFrame.style'

interface InputFrameProps extends InputFieldProps {
  //  handleSubmit?: (event: React.FormEvent<HTMLFormElement>) => Promise<void>
  errorMessage: string
  LayoutWidth?: string | number
  LayoutHeight?: string | number
}

export default function InputFrame({
  errorMessage,
  type,
  value,
  onChange,
  placeholder,
  width,
  name,
  LayoutWidth = '300px',
  LayoutHeight = '1000px',
  height,
}: InputFrameProps) {
  return (
    <Style.InputLayout width={LayoutWidth} height={LayoutHeight}>
      <InputField
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        width={width}
        height={height}
        name={name}
      />
      <Style.ErrorMessage>{errorMessage}</Style.ErrorMessage>
    </Style.InputLayout>
  )
}
