import useTokenCheck from '../hooks/auth/useTokenCheck';
import AuthHoc from '../utils/HOC/AuthHoc';
import token from '../api/token';
import { useRouter } from 'next/router';

export default function Homepage() {
  const { isAuthority } = useTokenCheck();

  const Home = () => {
    return (
      <>
        {isAuthority ? (
          <>
            <div>isAuthority: {isAuthority ? 'true' : 'false'}</div>
            <button onClick={onClick}>로그아웃</button>
          </>
        ) : null}
      </>
    );
  };
  const AuthHomepage = AuthHoc(Home);

  const router = useRouter();

  const onClick = () => {
    token.clearToken();
    router.push('/auth/login');
  };

  return (
    <>
      <AuthHomepage />
    </>
  );
}
