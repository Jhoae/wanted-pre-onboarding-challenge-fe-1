import axios from 'axios';
import React, { useEffect, useState } from 'react';
import token from '../../../api/token';
import { ACCESS_TOKEN_KEY } from '../../../constants/token/token.constant';
import useGetTodos from '../../../hooks/todo/useGetTodos';
import TodoColumn from '../../molecules/TodoColumn';

export interface IToDos {
  title: string;
  content: string;
  id: string;
  createdAt: string;
  updatedAt: string;
}

export interface ITodoList {
  onFocusId: string | string[] | undefined;
}

export default function TodoList({ onFocusId }: ITodoList) {
  const [toDos, setToDos] = useState<IToDos[]>([]);

  useEffect(() => {
    useGetTodos(setToDos);
  }, []);

  return <TodoColumn onFocusId={onFocusId} toDos={toDos}></TodoColumn>;
}
