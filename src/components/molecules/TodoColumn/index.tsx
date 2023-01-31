import ContentBox from '../../atoms/ContentBox';
import * as Style from './TodoColumn.styles';

interface TodoColumnProps {
  toDos: { id: number; text: string; title: string }[];
  onFocusId: number;
}

export default function TodoColumn({ toDos, onFocusId }: TodoColumnProps) {
  console.log('onFocusId', onFocusId);
  console.log('toDos', toDos);
  return (
    <>
      {toDos?.map((toDo) => (
        <Style.TodoBox>
          <Style.TitleHeader>{toDo.title}</Style.TitleHeader>
          {onFocusId === toDo.id && <ContentBox content={toDo.text} key={toDo.id} />}
        </Style.TodoBox>
      ))}
    </>
  );
}
