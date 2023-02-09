import styled from 'styled-components';

export const Navbar = styled.div`
  //  background-color: black;
  margin-top: 10px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  //  position: fixed;

  //  top: 0;
  height: 50px;
`;
export const GrayBar = styled.div`
  width: 100%;
  background-color: #d9d9d9;
  height: 40px;
`;

export const BackButton = styled.button`
  //  font-size: 100%;
  font-size: 40px;
  //  line-height: 0px;
  width: 16px;
  height: 32px;
`;

export const LogoBox = styled.div`
  width: 68px;
  height: 29px;
  font-size: 30px;
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
`;

export const Title = styled.header`
  white-space: nowrap;
  width: 94px;
  height: 44px;
  font-size: 40px;
  justify-self: center;
  margin-bottom: 44px;
`;

export const InputLayout = styled.div`
  width: 333px;
`;

export const InputFiled = styled.input`
  //  display: flex;
  width: 100%;
  height: 44px;
  margin-bottom: 17px;
  border: none;
  font-size: 25px;
  background: #e3e1e1;
  &::placeholder {
    font-size: 20px;
    padding-left: 20px;
    font-weight: bold;
  }
`;

export const InputTitle = styled.span`
  margin-left: 15px;
  width: 153px;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
`;

export const Button1 = styled.button`
  font-size: 24px;
  font-weight: 400;
  width: 333px;
  height: 63px;
  background-color: #d9d9d9;
  margin-bottom: 34px;
`;

export const Button2 = styled.button`
  font-size: 24px;
  font-weight: 400;
  width: 95px;
  height: 29px;
  //  background-color: #d9d9d9;
`;

export const ConfirmButton = styled.button`
  position: relative;
  width: 74px;
  height: 35px;
  background-color: #c2c0c0;

  top: 40px;
  left: 260px;
`;