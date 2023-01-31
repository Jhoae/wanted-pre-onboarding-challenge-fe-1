import useForm from '../../../hooks/common/useForm';
import InputFrame from '../../molecules/InputFrame/InputFrame';
import CreateTodoValidate from '../../../utils/vaildate.ts/CreateTodoValidate';
import axios from 'axios';
import token from '../../../api/token';
import { ACCESS_TOKEN_KEY } from '../../../constants/token/token.constant';
import Router, { useRouter } from 'next/router';
import * as Style from './TodoCreateForm.styles';
import React, { useState } from 'react';

interface TodoCreateFormProps {
  //  open?: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function TodoCreateForm({ setOpen }: TodoCreateFormProps) {
  const router = useRouter();

  console.log(' token.getToken(ACCESS_TOKEN_KEY)', token);

  const onSubmit = () => {
    setOpen(false);
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
        router.reload();
      })
      .catch((err) => {
        console.error('err', err);
        alert(err);
      });
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
        <button type='submit' disabled={submitting}></button>
      </Style.TodoCreateForm>
    </Style.FormLayout>
  );
}
