// import styled from 'styled-components';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Navbar = styled.div`
  //  background-color: black;
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  //  position: fixed;

  //  top: 0;
  height: 50px;
`;
/* export const GrayBar = styled.div`
  width: 100%;
  background-color: #d9d9d9;
  height: 40px;
`;
 */
export const BackButton = styled.button`
  //  font-size: 100%;
  font-size: 40px;
  //  line-height: 0px;
`;
export const BackIcon = styled.img`
  //  width: 100%;
  //  height: 100%;
  width: 55px;
  height: 75px;
`;

export const LogoBox = styled.div`
  /* width: 68px;
  height: 29px;
  font-size: 30px; */

  width: 56px;
  height: 29px;
  left: 167px;
  top: 60px;

  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 29px;
  /* identical to box height */

  color: #000000;
`;
export const Profile = styled.div`
  img {
    width: 50px;
    height: 50px;
    border-radius: 10px;
    overflow: hidden;
  }
`;

///////////////////////////////

export const ContentBox = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;

  left: 50%;
  //  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 333px;

  > button {
    // Button1
    margin-left: 10px;
  }
`;

export const Title = styled.header`
  white-space: nowrap;
  width: 67px;
  height: 35px;

  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 35px;
  text-align: center;
  margin-bottom: 65px;

  justify-self: center;
  padding-right: 25px;
`;

export const InputLayout = styled.div`
  width: 333px;
`;

export const Form = styled.form``;

export const InputFiled = styled.input`
  //  display: flex;
  /*  width: 210px;
  height: 48px;
  margin-bottom: 20px;
  border: 1px solid rgba(0, 137, 123, 0.1);
  border-radius: 2px;
  
  padding-left: 16px;
  font-weight: 400;
  font-size: 20px;
  line-height: 29px; */
  // color: #505050;
  padding-right: 100px;
  width: 320px;
  height: 48px;
  border: 1px solid rgba(0, 137, 123, 0.1);
  margin-bottom: 20px;
  border-radius: 2px;

  font-weight: 400;
  font-size: 20px;
  line-height: 29px;
  padding-left: 16px;
  box-sizing: border-box;

  &::placeholder {
    /*  padding-left: 16px;
    font-weight: 400;
    font-size: 20px;
    line-height: 29px;
    color: #505050; */
    font-weight: 400;
    font-size: 20px;
    line-height: 29px;
    //    padding-left: 16px;
    box-sizing: border-box;
  }
  &:focus::placeholder {
    color: transparent;
    box-sizing: border-box;
    /*
    padding-left: 16px;
    font-weight: 400;
    font-size: 20px;
    line-height: 29px;
    //    color: #505050; */
  }
  &:focus {
    /* padding-left: 16px;
    font-weight: 400;
    font-size: 20px;
    line-height: 29px;
    //    color: #505050; */
  }
`;

export const InputTitle = styled.label`
  box-sizing: border-box;
  margin-left: 15px;
  margin-bottom: 10px;

  width: 120px;
  height: 17px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;

  color: #505050;
  &:hover {
    cursor: pointer;
  }
`;

export const Button1 = styled.button`
  font-family: 'Noto Sans KR';
  font-style: normal;
  color: #ffffff;
  border: 1px solid #00897b1a;
  border-radius: 8px;
  font-size: 24px;
  font-weight: 400;
  width: 320px;
  height: 48px;
  background-color: #004d40;
  margin-top: 20px;
  margin-bottom: 34px;
  &:hover {
    filter: brightness(0.9);
  }
`;

export const Button2 = styled.button`
  font-size: 24px;
  font-weight: 400;
  width: 59px;
  height: 19px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  text-decoration-line: underline;

  color: #191919;
  white-space: nowrap;
  &:hover {
    //    font-weight: 600;
    font-weight: 600;
  }
  //  background-color: #d9d9d9;
`;

export const ConfirmButton = styled.button`
  position: relative;
  top: 42px;
  left: 250px;

  width: 64px;
  height: 36px;
  background: #004d40;
  border-radius: 8px;

  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 29px;

  color: #ffffff;

  &:hover {
    filter: brightness(0.9);
  }
`;
