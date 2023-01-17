import SignUpGuide from '../../../atoms/SignUpGuideText/SignUpGuide'
import * as Style from './LoginTitle.style'
import { LoginHeaderProps } from './LoginTitle.style'

interface LoginTitleProps extends LoginHeaderProps {}

export default function LoginTitle({ HeaderText }: LoginTitleProps) {
  return (
    <>
      <Style.LoginHeader>{HeaderText}</Style.LoginHeader>
      <SignUpGuide />
    </>
  )
}
