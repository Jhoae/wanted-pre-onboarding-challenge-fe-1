import { useRouter } from 'next/router';
import ContentBox from '../../atoms/ContentBox';
import { IToDos } from '../../organisms/TodoList';
import * as Style from './TodoColumn.styles';

interface TodoColumnProps {
  toDos?: IToDos[];
  onFocusId?: string | string[] | undefined;
}

export default function TodoColumn({ toDos, onFocusId }: TodoColumnProps) {
  const router = useRouter();

  const showDetail = (focusId: string) => {
    //  console.log('showDetail', focusId);
    //  console.log('move to', `/todo/${focusId}`);
    router.push(`/todo/${focusId}`);
  };

  console.log('onFocusId', onFocusId);
  console.log('toDos', toDos);
  return (
    <>
      {toDos?.map((toDo) => (
        <Style.TodoBox onClick={() => showDetail(toDo.id)}>
          <Style.TitleHeader>{toDo.title}</Style.TitleHeader>
          {onFocusId === toDo.id && <ContentBox content={toDo.content} key={toDo.id} />}
        </Style.TodoBox>
      ))}
    </>
  );
}
