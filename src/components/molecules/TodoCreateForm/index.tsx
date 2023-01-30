import useForm from '../../../hooks/common/useForm';
import InputFrame from '../../molecules/InputFrame/InputFrame';
import CreateTodoValidate from '../../../utils/CreateTodoValidate';
import validate from '../../../utils/validate';
import axios from 'axios';
import token from '../../../api/token';
import { ACCESS_TOKEN_KEY } from '../../../constants/token/token.constant';
import Router, { useRouter } from 'next/router';
import * as Style from './TodoCreateForm.styles';
import React, { useState } from 'react';

interface TodoCreateFormProps {
  open?: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function TodoCreateForm({ open, setOpen }: TodoCreateFormProps) {
  const router = useRouter();

  console.log(' token.getToken(ACCESS_TOKEN_KEY)', token);

  const onSubmit = () => {
    // 새로고침방지
    //    e.preventDefault();
    setOpen((prev: any) => !prev);
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
      })
      .catch((err) => {
        console.error('err', err);
        alert(err);
      });
    /*     dispatch({
      type: 'CREATE',
      todo: {
        id: nextId.current,
        text: value,
        done: false,
      },
    });
 */ // 제출하고 난뒤
  };

  const { values, errors, handleChange, handleSubmit, submitting } = useForm({
    initialValues: {
      title: '',
      content: '',
    },
    onSubmit: onSubmit,
    validate: CreateTodoValidate,
  });

  console.log('values', values);
  console.log('values.title', values.title);
  console.log('values.content', values.content);

  return (
    <Style.FormLayout>
      <Style.TodoCreateForm onSubmit={handleSubmit}>
        <InputFrame
          type='text'
          value={values.title}
          onChange={handleChange}
          placeholder='제목'
          errorMessage={errors.title}
          name='title'
        />
        <InputFrame
          type='text'
          value={values.content}
          onChange={handleChange}
          placeholder='할 일을 입력하고 ENTER를 눌러주세요.'
          errorMessage={errors.content}
          name='content'
        />
        <button type='submit'></button>
      </Style.TodoCreateForm>
    </Style.FormLayout>
  );
}
