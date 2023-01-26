import { ComponentType, useEffect } from 'react';
import useTokenCheck from '../../../hooks/auth/useTokenCheck';
import Router from 'next/router';

const unAuthHoc = (UnAuthComponent: ComponentType) => {
  const AuthCheck = () => {
    const { isAuthority } = useTokenCheck();

    useEffect(() => {
      if (isAuthority) {
        //      window.alert('로그인이 필요합니다.');
        window.alert('unath');
        Router.replace('/');
      }
    }, []);

    return <UnAuthComponent />;
  };

  return AuthCheck;
};

export default unAuthHoc;
