import { useRouter } from 'next/router';
import TodoColumn from '../../components/molecules/TodoColumn';
import TodoList from '../../components/organisms/TodoList';
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
  const router = useRouter();
  const { id } = router.query;

  console.log('다이나믹id');
  console.log(id);
  return (
    <>
      <TodoList onFocusId={id} />
    </>
  );
}
