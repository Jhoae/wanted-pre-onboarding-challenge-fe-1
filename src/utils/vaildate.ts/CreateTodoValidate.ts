import { StringType } from '../../hooks/common/useForm';

export default function CreateTodoValidate(values: StringType): StringType {
  const errors: StringType = {};

  if (values.title === '') {
    errors.title = '제목이 입력되지 않았습니다.';
  } else if (values.title.length > 10) {
    errors.title = '제목은 10글자 이내로 작성해주세요.';
  }

  if (values.content === '') {
    errors.content = '내용이 입력되지 않았습니다.';
  } else if (values.content.length > 50) {
    errors.content = '50글자 이내로 입력해주세요.';
  }

  //  console.log('errors', errors);

  return errors;
}
