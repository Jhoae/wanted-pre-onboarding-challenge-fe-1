import React, { useEffect, useState } from 'react';
import axios from 'axios';
import token from '../../api/token';
import { IToDos } from '../../components/organisms/TodoList';
import { ACCESS_TOKEN_KEY } from '../../constants/token/token.constant';

function useGetTodos() {
  //   setToDos: React.Dispatch<React.SetStateAction<IToDos[]>>)
  //  const [toDos, setToDos] = useRecoilState<IToDos[]>(toDoState);
  const [data, setData] = useState<IToDos[]>([]);

  useEffect(() => {
    axios
      .get('http://localhost:8080/todos', {
        headers: {
          Authorization: token.getToken(ACCESS_TOKEN_KEY),
        },
      })
      .then((response) => {
        //      const { data } = response.data;
        console.log(response.data.data);
        setData(response.data.data);
      })
      .catch((err) => {
        console.error('err', err);
        //      alert('오류 : 할 일 목록을 불러오는데 실패했습니다.');
      });
  }, []);

  return { data };
}

export default useGetTodos;
