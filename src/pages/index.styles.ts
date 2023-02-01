import styled from 'styled-components';

export const HomeColumn = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
  // color: #d5d5d5;
  padding-left: 100px;
  padding-right: 100px;
  width: 300px;
  height: 576px;
  border: 1px solid #d5d5d5;
  border-radius: 8px;
  > header {
    line-height: 1.1;
    font-style: normal;
    font-weight: bold;
    font-size: 23px;
    font-family: 'Noto Sans KR';
    width: 300px;
    height: 50px;
    padding-top: 30px;
  }
`;

export const LogoutButton = styled.button`
  position: absolute;
  right: 0;
  top: -5%;
  background-color: white;
  border: 1px solid black;
  padding: 5px;
  border-radius: 3px;
  &:hover {
    background-color: whitesmoke;
    font-weight: bold;
  }
`;
