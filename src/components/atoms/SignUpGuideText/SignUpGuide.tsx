import Link from 'next/link'
import * as Style from './SignUpGuide.style'

export default function SignUpGuide() {
  return (
    <Style.SignUpGuideText>
      <p>아직 회원이 아니신가요?</p>
      <Link href='/auth/signup'>회원가입</Link>
    </Style.SignUpGuideText>
  )
}
