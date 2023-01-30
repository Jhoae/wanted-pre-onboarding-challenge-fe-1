import styled from 'styled-components';

export const FormLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 500px;
  > form {
    position: absolute;
    left: 50%;
    bottom: -10%;
    transform: translate(-50%, -50%);
    > button {
      margin-top: 50px;
    }
  }
`;

export const TodoCreateForm = styled.form`
  div {
    margin-top: 10px;
  }
`;
