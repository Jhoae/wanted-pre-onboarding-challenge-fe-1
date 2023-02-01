import useForm, { StringType } from '../../../hooks/common/useForm';
import InputFrame from '../../molecules/InputFrame/InputFrame';
import CreateTodoValidate from '../../../utils/vaildate.ts/CreateTodoValidate';
import * as Style from './ModifyTodoForm';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import token from '../../../api/token';
import { ACCESS_TOKEN_KEY } from '../../../constants/token/token.constant';
import { useRouter } from 'next/router';

interface TodoCreateFormProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ModifyTodoForm({ setShowModal }: TodoCreateFormProps) {
  const router = useRouter();
  const { id } = router.query;
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    console.log(id);
    axios
      .get(`http://localhost:8080/todos/${id}`, {
        headers: {
          Authorization: token.getToken(ACCESS_TOKEN_KEY),
        },
      })
      .then((res) => {
        setTitle(res.data.data.title);
        setContent(res.data.data.content);
      })
      .catch((err) => console.error(err));
  }, []);

  const updateTodo = (values: StringType, toDoId: string | string[] | undefined) => {
    axios
      .put(
        `http://localhost:8080/todos/${toDoId}`,
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
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error('err', err);
        alert('오류 : 할 일 수정에 실패했습니다.');
      });
  };

  const onSubmit = () => {
    setShowModal(false);
    updateTodo(values, id);
  };

  const { values, errors, handleChange, handleSubmit, submitting } = useForm({
    initialValues: {
      title: '',
      content: '',
    },
    onSubmit: onSubmit,
    validate: CreateTodoValidate,
  });

  return (
    <>
      <Style.FormLayout>
        <Style.FormHeader>Todo 수정</Style.FormHeader>
        <Style.ModifyTodoForm onSubmit={handleSubmit}>
          <InputFrame
            type='text'
            value={values.title}
            onChange={handleChange}
            errorMessage={errors.title}
            placeholder={title}
            name='title'
          />
          <InputFrame
            type='text'
            value={values.content}
            onChange={handleChange}
            errorMessage={errors.content}
            placeholder={content}
            name='content'
          />
          <button type='submit' disabled={submitting}>
            확인
          </button>
          <button type='button' onClick={() => setShowModal(false)} disabled={submitting}>
            취소
          </button>
        </Style.ModifyTodoForm>
      </Style.FormLayout>
    </>
  );
}
