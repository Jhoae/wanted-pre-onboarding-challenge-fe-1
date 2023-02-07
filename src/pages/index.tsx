import React from 'react';
import useTokenCheck from '../hooks/auth/useTokenCheck';
import { RequireAuth } from '../utils/HOC';
import token from '../api/token';
import { useRouter } from 'next/router';
import * as Style from './index.styles';
import TodoCreate from '../components/organisms/TodoCreate';
import TodoList, { IToDos } from '../components/organisms/TodoList';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { toDoState } from '../recoil/atoms';
import LogoutButton from '../components/atoms/LogoutButton';
import useGetTodos from '../hooks/todo/useGetTodos';

export default function Homepage() {
  const [toDos, setToDos] = useRecoilState<IToDos[]>(toDoState);
  const { data } = useGetTodos();
  setToDos(data);
  return (
    <>
      <RequireAuth>
        <Style.HomeColumn>
          <LogoutButton />
          <TodoList toDos={data} />
          <TodoCreate />
        </Style.HomeColumn>
      </RequireAuth>
    </>
  );
}
