import { ComponentType, useEffect } from 'react';
import useTokenCheck from '../../../hooks/auth/useTokenCheck';
import { useRouter } from 'next/router';

const AuthHoc = (AuthComponent: ComponentType) => {
  const AuthCheck = () => {
    const { isAuthority } = useTokenCheck();
    const router = useRouter();

    useEffect(() => {
      if (!isAuthority) {
        router.push('/auth/login');
      }
    }, [isAuthority]);
    if (!isAuthority) {
      return <></>;
    }

    return <AuthComponent />;
  };

  return AuthCheck;
};

export default AuthHoc;
