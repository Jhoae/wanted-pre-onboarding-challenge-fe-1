import useTokenCheck from '../hooks/auth/useTokenCheck';
import AuthHoc from '../utils/HOC/AuthHoc';
import token from '../api/token';
import { useRouter } from 'next/router';
import * as Style from './index.styles';
import TodoCreate from '../components/organisms/TodoCreate';
import TodoList from '../components/organisms/TodoList';
import { useEffect } from 'react';
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '../constants/token/token.constant';

export default function Homepage() {
  const { isAuthority } = useTokenCheck();

  const Home = () => {
    return (
      <>
        {isAuthority ? (
          <>
            {/*  <div>isAuthority: {isAuthority ? 'true' : 'false'}</div>
            <button onClick={onClick}>로그아웃</button> */}

            <Style.HomeColumn>
              <TodoList />
              <TodoCreate />
            </Style.HomeColumn>
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
