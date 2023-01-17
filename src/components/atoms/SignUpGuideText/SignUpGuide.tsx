import Link from 'next/link'

export default function SignUpGuide() {
  return (
    <div>
      <p>아직 회원이 아니신가요?</p>
      <Link href='/auth/signUp'>회원가입</Link>
    </div>
  )
}
