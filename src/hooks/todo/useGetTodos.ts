import axios from 'axios';
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
      console.log('response.data', response.data.data);
      setToDos(response.data.data);
    })
    .catch((err) => {
      console.error('err', err);
      alert(err);
    });
}
