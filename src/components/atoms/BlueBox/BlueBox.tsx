import React, { ButtonHTMLAttributes } from 'react'
import { BlueBox } from './BlueBox.styles'

export interface BlueBoxProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string
  width?: string
  height?: string
}

const BlueBoxButton = ({ width, height, title }: BlueBoxProps) => {
  return (
    <BlueBox width={width} height={height} title={title}>
      {title}
    </BlueBox>
  )
}

export default BlueBoxButton
