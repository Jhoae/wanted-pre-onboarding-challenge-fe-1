import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import TodoColumn from '../../components/organisms/TodoColumn';
import TodoCreate from '../../components/organisms/TodoCreate';
import TodoList, { IToDos } from '../../components/organisms/TodoList';
import useGetTodos from '../../hooks/todo/useGetTodos';
import { toDoState } from '../../recoil/atoms';
import * as Style from '../index.styles';

export default function TodoDetail() {
  const [toDos, setToDos] = useRecoilState<IToDos[]>(toDoState);

  useEffect(() => {
    useGetTodos(setToDos);
  }, [toDos]);

  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Style.HomeColumn>
        <TodoList onFocusId={id} toDos={toDos} />
        <TodoCreate />
      </Style.HomeColumn>
    </>
  );
}
