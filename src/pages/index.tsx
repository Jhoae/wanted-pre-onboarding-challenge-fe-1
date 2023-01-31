import useTokenCheck from '../hooks/auth/useTokenCheck';
import AuthHoc from '../utils/HOC/AuthHoc';
import token from '../api/token';
import { useRouter } from 'next/router';
import * as Style from './index.styles';
import TodoCreate from '../components/organisms/TodoCreate';
import TodoList, { IToDos } from '../components/organisms/TodoList';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '../constants/token/token.constant';
import useGetTodos from '../hooks/todo/useGetTodos';

export default function Homepage() {
  const { isAuthority } = useTokenCheck();
  const [toDos, setToDos] = useState<IToDos[]>([]);

  useEffect(() => {
    useGetTodos(setToDos);
  }, []);

  const Home = () => {
    return (
      <>
        {isAuthority ? (
          <>
            {/*  <div>isAuthority: {isAuthority ? 'true' : 'false'}</div>
            <button onClick={onClick}>로그아웃</button> */}

            <Style.HomeColumn>
              <TodoList toDos={toDos} />
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
