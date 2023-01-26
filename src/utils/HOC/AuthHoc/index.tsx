import { ComponentType, useEffect } from 'react';
import useTokenCheck from '../../../hooks/auth/useTokenCheck';
import Router from 'next/router';

const AuthHoc = (AuthComponent: ComponentType) => {
  const AuthCheck = () => {
    const { isAuthority } = useTokenCheck();

    useEffect(() => {
      if (!isAuthority) {
        //      window.alert('로그인이 필요합니다.');
        Router.replace('/auth/login');
      }
    }, []);

    return <AuthComponent />;
  };

  return AuthCheck;
};

export default AuthHoc;
