import { useRouter } from 'next/router';
import * as S from './styles';

function Navbar() {
  const router = useRouter();
  const goLogin = () => {
    router.push('/add/login');
  };

  return (
    <>
      <S.GrayBar />
      <S.Navbar>
        <S.BackButton onClick={goLogin}>
          <S.BackIcon src='https://cdn.icon-icons.com/icons2/1369/PNG/512/-navigate-before_90417.png' />
        </S.BackButton>
        <S.LogoBox>Logo</S.LogoBox>
        <S.Profile>
          <img src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973461_960_720.png' />
        </S.Profile>
      </S.Navbar>
    </>
  );
}

export default Navbar;
