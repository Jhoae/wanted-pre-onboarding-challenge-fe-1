import React, { FC, InputHTMLAttributes } from 'react'
import * as Style from './Input.styles'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string
  placeholder?: string
  title?: string
}

const Input: FC<InputProps> = ({
  width = '17.5rem',
  title,
  height,
  placeholder,
  errorMessage,
  ...props
}) => {
  return (
    <Style.InputLayout width={width} height={height}>
      <Style.SignInFormTitle>{title}</Style.SignInFormTitle>
      <Style.InputField placeholder={placeholder} {...props} />
      <Style.ErrorMessage>{errorMessage}</Style.ErrorMessage>
      {/*   {errors.email && <span className='errorMessage'>{errors.email}</span>}
      <br />
      {errors.password && <span className='errorMessage'>{errors.password}</span>}{' '}
   */}
    </Style.InputLayout>
  )
}

export default Input
