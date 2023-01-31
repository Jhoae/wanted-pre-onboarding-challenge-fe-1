import axios from 'axios';
import token from '../../api/token';
import { ACCESS_TOKEN_KEY } from '../../constants/token/token.constant';
import Router, { useRouter } from 'next/router';
import { StringType } from '../common/useForm';

export default function useCreateTodo(values: StringType) {
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
      console.log('response.data', response.data.data);
      alert('등록되었습니다');
      window.location.reload();
      // 이후에 새로고침대신, 상태관리 라이브러리를 이용해서 실시간 데이터를 변경.
    })
    .catch((err) => {
      console.error('err', err);
      alert(err);
    });
}
