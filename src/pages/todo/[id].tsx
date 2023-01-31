import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import TodoColumn from '../../components/molecules/TodoColumn';
import TodoCreate from '../../components/organisms/TodoCreate';
import TodoList, { IToDos } from '../../components/organisms/TodoList';
import useGetTodos from '../../hooks/todo/useGetTodos';
import * as Style from '../index.styles';

interface ItoDos {
  data: {
    title: string;
    content: string;
    id: string;
    createdAt: string;
    updatedAt: string;
  }[];
}

export default function TodoDetail() {
  const [toDos, setToDos] = useState<IToDos[]>([]);

  useEffect(() => {
    useGetTodos(setToDos);
  }, []);

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
