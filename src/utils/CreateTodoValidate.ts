import { StringType } from '../hooks/common/useForm';

export default function CreateTodoValidate(values: StringType): StringType {
  const errors: StringType = {};

  if (values.title === '') {
    errors.email = '제목이 입력되지 않았습니다.';
  }

  if (values.content === '') {
    errors.content = '내용이 입력되지 않았습니다.';
  }

  console.log('errors', errors);

  return errors;
}
