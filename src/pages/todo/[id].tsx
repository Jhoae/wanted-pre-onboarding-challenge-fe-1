import { useRouter } from 'next/router';
import React from 'react';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import LogoutButton from '../../components/atoms/LogoutButton';
import TodoColumn from '../../components/organisms/TodoColumn';
import TodoCreate from '../../components/organisms/TodoCreate';
import TodoList, { IToDos } from '../../components/organisms/TodoList';
import useTokenCheck from '../../hooks/auth/useTokenCheck';
import useGetTodos from '../../hooks/todo/useGetTodos';
import { toDoState } from '../../recoil/atoms';
import AuthHoc from '../../utils/HOC';
import * as Style from '../index.styles';

export function TodoDetailPage() {
  //  const [toDos, setToDos] = useRecoilState<IToDos[]>(toDoState);

  const { data } = useGetTodos();
  //  console.log('1 data', data);
  //  console.log('1 toDos', toDos);

  /* useEffect(() => {
    console.log('무한 리렌더링 작동됨');
    const data = useGetTodos();
    console.log('data');
    // -> toDos를 변경하므로 또 useEffect 작동
    // -> ERR: 무한 리렌더링 발생
  }, [toDos]); */

  const router = useRouter();
  const { id } = router.query;
  const { isAuthority } = useTokenCheck();

  return (
    <>
      {isAuthority ? (
        <Style.HomeColumn>
          <LogoutButton />
          <TodoList onFocusId={id} toDos={data} />
          <TodoCreate />
        </Style.HomeColumn>
      ) : null}
    </>
  ); //  const AuthTodoDetail = AuthHoc(TodoDetail);
}

export default React.memo(TodoDetailPage);
