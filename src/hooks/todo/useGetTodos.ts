import React from 'react';
import axios from 'axios';
import { SetterOrUpdater } from 'recoil';
import token from '../../api/token';
import { IToDos } from '../../components/organisms/TodoList';
import { ACCESS_TOKEN_KEY } from '../../constants/token/token.constant';

export default function useGetTodos(setToDos: React.Dispatch<React.SetStateAction<IToDos[]>>) {
  axios
    .get('http://localhost:8080/todos', {
      headers: {
        Authorization: token.getToken(ACCESS_TOKEN_KEY),
      },
    })
    .then((response) => {
      setToDos(response.data.data);
    })
    .catch((err) => {
      console.error('err', err);
      //      alert('오류 : 할 일 목록을 불러오는데 실패했습니다.');
    });
}
