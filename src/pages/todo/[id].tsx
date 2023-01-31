import TodoColumn from '../../components/molecules/TodoColumn';
// import * as Style from './styles';

interface ItoDos {
  data: {
    title: string;
    content: string;
    id: string;
    createdAt: string;
    updatedAt: string;
  }[];
}

export default function TodoDetail({ data }: ItoDos) {
  return (
    <>
      <TodoColumn />
    </>
  );
}
