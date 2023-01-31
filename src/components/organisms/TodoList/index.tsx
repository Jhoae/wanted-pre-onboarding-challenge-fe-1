import React from 'react';
import TodoColumn from '../../molecules/TodoColumn';

const toDos = [
  {
    id: 1,
    text: '할 일할 일할 일할 일할 일할 일할 일할 일할 일할 일할 일할 일할 일할 일할 일할 일할 일할 일할 일할 일할 일할 일할 일할 일할 일할 일할 일할 일할 일할 일할 일할 일할 일할 일할 일할 일할 일할 일할 일할 일할 일할 일할 일할 일할 일할 일할 일할 일할 일할 일할 일할 일할 일',
    title: '제목1',
  },
  { id: 2, text: 'bbb', title: '제목2' },
  { id: 3, text: 'ccc', title: '제목3' },
  { id: 4, text: 'ddd', title: '제목4' },
];

export default function TodoList() {
  return <TodoColumn toDos={toDos}></TodoColumn>;
}
