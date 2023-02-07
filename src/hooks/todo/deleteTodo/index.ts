import axios from 'axios';
import { NextRouter, useRouter } from 'next/router';
import token from '../../../api/token';
import { ACCESS_TOKEN_KEY } from '../../../constants/token/token.constant';

const deleteTodo = (deleteId: string, router: NextRouter) => {
  axios
    .delete(`http://localhost:8080/todos/${deleteId}`, {
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

export default deleteTodo;
