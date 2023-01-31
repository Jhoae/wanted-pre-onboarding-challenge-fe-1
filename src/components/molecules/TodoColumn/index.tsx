import ContentBox from '../../atoms/ContentBox';
import { IToDos } from '../../organisms/TodoList';
import * as Style from './TodoColumn.styles';

interface TodoColumnProps {
  toDos?: IToDos[];
  onFocusId?: string;
}

export default function TodoColumn({ toDos, onFocusId }: TodoColumnProps) {
  return (
    <>
      {toDos?.map((toDo) => (
        <Style.TodoBox>
          <Style.TitleHeader>{toDo.title}</Style.TitleHeader>
          {onFocusId === toDo.id && <ContentBox content={toDo.content} key={toDo.id} />}
        </Style.TodoBox>
      ))}
    </>
  );
}
