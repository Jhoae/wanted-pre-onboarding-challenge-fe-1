import useTokenCheck from '../hooks/auth/useTokenCheck';
import AuthHoc from '../utils/HOC/AuthHoc';
import token from '../api/token';
import { useRouter } from 'next/router';

export default function Homepage() {
  const router = useRouter();

  const onClick = () => {
    token.clearToken();
    router.push('/auth/login');
  };
  const Home = () => {
    return (
      <>
        <div>isAuthority: {isAuthority ? 'true' : 'false'}</div>
        <button onClick={onClick}>로그아웃</button>
      </>
    );
  };

  const AuthHomepage = AuthHoc(Home);
  const { isAuthority } = useTokenCheck();

  return (
    <>
      <AuthHomepage />
    </>
  );
}
