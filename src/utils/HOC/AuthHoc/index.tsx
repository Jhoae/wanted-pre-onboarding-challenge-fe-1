import { ComponentType, useEffect } from 'react';
import useTokenCheck from '../../../hooks/auth/useTokenCheck';
import { useRouter } from 'next/router';

const AuthHoc = (AuthComponent: ComponentType) => {
  const AuthCheck = () => {
    const { isAuthority } = useTokenCheck();
    const router = useRouter();

    useEffect(() => {
      if (isAuthority === false) {
        alert('로그인이 필요합니다.');
        router.push('/auth/login');
      }
    }, [isAuthority]);
    if (isAuthority === false) {
      return <></>;
    }

    return <AuthComponent />;
  };

  return AuthCheck;
};

export default AuthHoc;
