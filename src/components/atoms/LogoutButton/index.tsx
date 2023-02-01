import { useRouter } from 'next/router';
import token from '../../../api/token';
import * as Style from './LogoutButton.styles';

export default function LogoutButton() {
  const router = useRouter();

  const logout = () => {
    token.clearToken();
    router.push('/auth/login');
  };

  return <Style.LogoutButton onClick={logout}>로그아웃</Style.LogoutButton>;
}
