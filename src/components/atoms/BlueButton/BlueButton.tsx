import React, { ButtonHTMLAttributes } from 'react'
import { BlueBox } from './BlueButton.styles'

export interface BlueBoxProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string
  disabled: boolean
  width?: string
  height?: string
}

const BlueButton = ({ width, height, title, onClick, disabled }: BlueBoxProps) => {
  return (
    <BlueBox width={width} height={height} title={title} onClick={onClick} disabled={disabled}>
      {title}
    </BlueBox>
  )
}

export default BlueButton
