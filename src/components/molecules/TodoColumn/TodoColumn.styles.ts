import styled from 'styled-components';

export const TitleHeader = styled.header`
  font-size: 17px;
  font-weight: bold;
  padding: 10px 0px;
`;

export const TodoBox = styled.div`
  padding-left: 20px;
  margin: 20px 10px;
  background-color: #e9ecef;
  border-radius: 10px;

  &:hover {
    background-color: #dee2e6;
    cursor: pointer;
  }
`;
