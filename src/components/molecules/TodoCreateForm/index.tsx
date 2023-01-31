import useForm from '../../../hooks/common/useForm';
import InputFrame from '../../molecules/InputFrame/InputFrame';
import CreateTodoValidate from '../../../utils/vaildate.ts/CreateTodoValidate';
import * as Style from './TodoCreateForm.styles';
import React from 'react';
import useCreateTodo from '../../../hooks/todo/useCreateTodo';

interface TodoCreateFormProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function TodoCreateForm({ setOpen }: TodoCreateFormProps) {
  const onSubmit = () => {
    setOpen(false);
    useCreateTodo(values);
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
