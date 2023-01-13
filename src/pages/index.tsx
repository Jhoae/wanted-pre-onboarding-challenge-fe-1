import Link from 'next/link'

import { BlueBox } from '../styles/common/BlueBox'
import { HomeColumn } from './styles/Home'

export default function Home() {
  return (
    <>
      <HomeColumn>
        <header>원티드 프리온보딩 챌린지</header>
        <BlueBox type='button'>
          <Link href='/auth/login'>로그인</Link>
        </BlueBox>
        <p>
          <Link href='/auth/signUp'>회원가입</Link>
        </p>
      </HomeColumn>
    </>
  )
}
