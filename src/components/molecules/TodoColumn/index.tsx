import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import token from '../../../api/token';
import { ACCESS_TOKEN_KEY } from '../../../constants/token/token.constant';
import { toDoState } from '../../../recoil/atoms';
import ContentBox from '../../atoms/ContentBox';
import { IToDos } from '../../organisms/TodoList';
import * as Style from './TodoColumn.styles';

interface TodoColumnProps {
  toDos?: IToDos[];
  onFocusId?: string | string[] | undefined;
}

export default function TodoColumn({ toDos, onFocusId }: TodoColumnProps) {
  const router = useRouter();

  // Hydrate 오류관련 추가
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  const showTodoContent = (focusId: string) => {
    router.push(`/todo/${focusId}`);
  };
  const DeleteTodo = (DeleteId: string) => {
    axios
      .delete(`http://localhost:8080/todos/${DeleteId}`, {
        headers: {
          Authorization: token.getToken(ACCESS_TOKEN_KEY),
        },
      })
      .then((res) => {
        console.log(res);
        router.push('/');
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      {domLoaded &&
        toDos?.map((toDo) => (
          <Style.TodoBox key={toDo.id} onClick={() => showTodoContent(toDo.id)}>
            <Style.TitleHeader>
              {toDo.title}
              {onFocusId === toDo.id && (
                <Style.DeleteButton type='button' onClick={() => DeleteTodo(toDo.id)}>
                  X
                </Style.DeleteButton>
              )}
            </Style.TitleHeader>
            {onFocusId === toDo.id && <ContentBox key={toDo.id} content={toDo.content} />}
          </Style.TodoBox>
        ))}
    </>
  );
}
