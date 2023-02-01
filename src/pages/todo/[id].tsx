import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import LogoutButton from '../../components/atoms/LogoutButton';
import TodoColumn from '../../components/organisms/TodoColumn';
import TodoCreate from '../../components/organisms/TodoCreate';
import TodoList, { IToDos } from '../../components/organisms/TodoList';
import useTokenCheck from '../../hooks/auth/useTokenCheck';
import useGetTodos from '../../hooks/todo/useGetTodos';
import { toDoState } from '../../recoil/atoms';
import AuthHoc from '../../utils/HOC/AuthHoc';
import * as Style from '../index.styles';

export default function TodoDetailPage() {
  const [toDos, setToDos] = useRecoilState<IToDos[]>(toDoState);

  useEffect(() => {
    useGetTodos(setToDos);
  }, [toDos]);

  const router = useRouter();
  const { id } = router.query;
  const { isAuthority } = useTokenCheck();

  return (
    <>
      {isAuthority ? (
        <Style.HomeColumn>
          <LogoutButton />
          <TodoList onFocusId={id} toDos={toDos} />
          <TodoCreate />
        </Style.HomeColumn>
      ) : null}
    </>
  );

  //  const AuthTodoDetail = AuthHoc(TodoDetail);
}
