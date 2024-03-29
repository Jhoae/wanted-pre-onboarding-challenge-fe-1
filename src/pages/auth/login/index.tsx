import Router, { useRouter } from 'next/router';
import { useEffect } from 'react';
import Homepage from '../..';
import LoginPage from '../../../components/templates/LoginPage/LoginPage';
import useTokenCheck from '../../../hooks/auth/useTokenCheck';
import { RequireNoAuth } from '../../../utils/HOC';

export default function Login() {
  const { isAuthority } = useTokenCheck();
  const router = useRouter();

  if (isAuthority) {
    router.push('/');
    return <></>;
  }

  // 로그인 페이지
  // 로그인 o-> 홈페이지 , 로그인 x -> 로그인페이지
  // return <>{isAuthority ? <Homepage /> : <LoginPage />}</>;

  return (
    <RequireNoAuth>
      <LoginPage />
    </RequireNoAuth>
  );
}
