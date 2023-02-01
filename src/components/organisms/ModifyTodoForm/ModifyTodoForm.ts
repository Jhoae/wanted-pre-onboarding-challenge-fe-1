import styled from 'styled-components';

export const FormLayout = styled.div`
  position: relative;
  transform: translate(-50%, -50%);
  top: 20%;
  left: 50%;
  border-radius: 15px;
  padding: 10px;

  display: flex;
  align-items: center;
  flex-direction: column;
  height: 300px;
  width: 300px;
  background-color: #f8f0fc;
  input {
    width: 100%;
    height: 40px;
  }
  > form {
    > button {
      margin-top: 50px;
    }
  }
`;

export const ModifyTodoForm = styled.form`
  div {
    margin-top: 10px;
  }

  button {
    position: relative;
    left: 60%;
    background-color: #fff0f6;
    margin-right: 10px;
    &:hover {
      color: red;
      font-weight: bold;
    }
  }
`;

export const FormHeader = styled.header`
  font-size: 17px;
  font-weight: bold;
  padding-top: 20px;
  padding-bottom: 20px;
`;
