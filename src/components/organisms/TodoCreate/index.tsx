import axios from 'axios';
import React, { useState } from 'react';
import TodoCreateForm from '../../molecules/TodoCreateForm';
import * as Style from './TodoCreate.styles';

function TodoCreate() {
  const [open, setOpen] = useState(false);

  //  const dispatch = useTodoDispatch();
  //  const nextId = useTodoNextId();

  const onToggle = () => setOpen((prev: any) => !prev);

  return (
    <>
      {open && <TodoCreateForm setOpen={setOpen} />}
      <Style.CircleButton onClick={onToggle} open={open}>
        {/* +버튼  */}+
      </Style.CircleButton>
    </>
  );
}
//  TodoContext 에서 관리하고 있는 state 가
// 바뀔 때 때 TodoCreate 의
// 불필요한 리렌더링을 방지 할 수 있습니다
export default React.memo(TodoCreate);
