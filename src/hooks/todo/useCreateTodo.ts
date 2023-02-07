import React, { useEffect, useState } from 'react';
import axios from 'axios';
import token from '../../api/token';
import { ACCESS_TOKEN_KEY } from '../../constants/token/token.constant';
import { StringType } from '../common/useForm';
import { IToDos } from '../../recoil/atoms';
import useGetTodos from './useGetTodos';
import { SetterOrUpdater } from 'recoil';

function useCreateTodo(values: StringType, setToDos: SetterOrUpdater<IToDos[]>) {
  //  const [data, setData] = useState<IToDos>();
  let returnValue = {};

  axios
    .post(
      'http://localhost:8080/todos',
      {
        title: values.title,
        content: values.content,
      },
      {
        headers: {
          Authorization: token.getToken(ACCESS_TOKEN_KEY),
        },
      },
    )
    .then((response) => {
      console.log('response.data.data;', response.data.data);
      returnValue = response.data.data;
      alert('등록되었습니다.');
      window.location.reload();
    })
    .catch((err) => {
      console.error('err', err);
      //      alert('오류 : 할 일 등록에 실패했습니다.');
    });

  return returnValue;
}

export default useCreateTodo;
