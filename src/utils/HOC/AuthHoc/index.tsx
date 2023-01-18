import { ComponentType } from 'react'
import useTokenCheck from '../../../hooks/auth/useTokenCheck'

const AuthHoc = (AuthComponent: ComponentType) => {
  const AuthCheck = () => {
    const { isAuthority } = useTokenCheck()

    // if (isAuthority) {
    if (!isAuthority) {
      window.alert('로그인이 필요합니다.')
      window.location.href = '/auth/login'
      return <></>
    }

    return <AuthComponent />
  }

  return AuthCheck
}

export default AuthHoc
