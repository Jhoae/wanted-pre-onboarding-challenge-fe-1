import axios from 'axios';
import React, { useEffect, useState } from 'react';
import token from '../../../api/token';
import { ACCESS_TOKEN_KEY } from '../../../constants/token/token.constant';
import TodoColumn from '../../molecules/TodoColumn';

export interface IToDos {
  title: string;
  content: string;
  id: string;
  createdAt: string;
  updatedAt: string;
}

export default function TodoList() {
  const [toDos, setToDos] = useState<IToDos[]>([]);

  useEffect(() => {
    axios
      .get('http://localhost:8080/todos', {
        headers: {
          Authorization: token.getToken(ACCESS_TOKEN_KEY),
        },
      })
      .then((response) => {
        console.log('response.data', response.data.data);
        setToDos(response.data.data);
      })
      .catch((err) => {
        console.error('err', err);
        alert(err);
      });
  }, []);

  return <TodoColumn toDos={toDos}></TodoColumn>;
}
