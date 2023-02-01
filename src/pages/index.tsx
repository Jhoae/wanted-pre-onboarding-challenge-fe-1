import useTokenCheck from '../hooks/auth/useTokenCheck';
import AuthHoc from '../utils/HOC/AuthHoc';
import token from '../api/token';
import { useRouter } from 'next/router';
import * as Style from './index.styles';
import TodoCreate from '../components/organisms/TodoCreate';
import TodoList, { IToDos } from '../components/organisms/TodoList';
import { useEffect, useState } from 'react';
import useGetTodos from '../hooks/todo/useGetTodos';
import { useRecoilState } from 'recoil';
import { toDoState } from '../recoil/atoms';
import LogoutButton from '../components/atoms/LogoutButton';

export default function Homepage() {
  const [toDos, setToDos] = useRecoilState<IToDos[]>(toDoState);

  const { isAuthority } = useTokenCheck();
  //  const [toDos, setToDos] = useState<IToDos[]>([]);

  const Home = () => {
    return (
      <>
        {isAuthority ? (
          <>
            <Style.HomeColumn>
              <LogoutButton />
              <TodoList toDos={toDos} />
              <TodoCreate />
            </Style.HomeColumn>
          </>
        ) : null}
      </>
    );
  };
  const AuthHomepage = AuthHoc(Home);

  return (
    <>
      <AuthHomepage />
    </>
  );
}
