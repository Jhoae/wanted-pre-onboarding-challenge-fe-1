import Homepage from '../..';
import LoginPage from '../../../components/templates/LoginPage/LoginPage';
import useTokenCheck from '../../../hooks/auth/useTokenCheck';

export default function Login() {
  const { isAuthority } = useTokenCheck();

  // 로그인 페이지
  // 로그인 o-> 홈페이지 , 로그인 x -> 로그인페이지
  return <>{isAuthority ? <Homepage /> : <LoginPage />}</>;
}
