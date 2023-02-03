import React from 'react';
import TodoColumn from '../TodoColumn';

export interface IToDos {
  title: string;
  content: string;
  id: string;
  createdAt: string;
  updatedAt: string;
}

export interface ITodoList {
  onFocusId?: string | string[] | undefined;
  toDos: IToDos[] | undefined;
}

export default function TodoList({ onFocusId, toDos }: ITodoList) {
  return <TodoColumn onFocusId={onFocusId} toDos={toDos}></TodoColumn>;
}
