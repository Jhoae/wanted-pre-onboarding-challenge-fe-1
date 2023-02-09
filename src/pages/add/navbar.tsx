import * as S from './styles';

function Navbar() {
  return (
    <>
      <S.GrayBar />
      <S.Navbar>
        <S.BackButton> &lt;</S.BackButton>
        <S.LogoBox>Logo</S.LogoBox>
        <S.Profile>
          <img src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973461_960_720.png' />
        </S.Profile>
      </S.Navbar>
    </>
  );
}

export default Navbar;
