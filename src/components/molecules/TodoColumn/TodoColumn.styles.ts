import styled from 'styled-components';

export const TitleHeader = styled.header`
  font-size: 17px;
  font-weight: bold;
  padding: 10px 0px;

  display: flex;
`;

export const TodoBox = styled.div`
  padding-left: 20px;
  margin: 20px 10px;
  background-color: #e9ecef;
  border-radius: 10px;

  &:hover {
    background-color: #dee2e6;
    cursor: pointer;

    button {
      display: block;
    }
  }
`;

export const DeleteButton = styled.button`
  display: none;
  padding: 0px 10px;
  color: #ffa8a8;
  position: absolute;
  right: 23%;

  &:hover {
    color: red;
  }
`;
