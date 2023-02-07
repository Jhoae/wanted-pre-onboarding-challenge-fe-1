//import { redirect, useNavigate } from 'react-router-dom';
//import { useAtomValue } from 'jotai';
//import { Button } from '@mantine/core';
//import { paths } from 'routes/paths';
//import { isSignedIn } from 'utils';

import { useRouter } from 'next/router';
import { paths } from '../../constants/paths';
import useTokenCheck from '../../hooks/auth/useTokenCheck';

type ValueOf<T> = T[keyof T];

type Props = {
  path?: ValueOf<typeof paths>;
  children: JSX.Element;
};

export const RequireNoAuth = ({ path = '/', children: element }: Props): JSX.Element => {
  const router = useRouter();
  const { isAuthority } = useTokenCheck();

  if (typeof window !== 'undefined' && isAuthority === true) {
    router.replace(path);
  }

  return isAuthority ? <div></div> : element;
};
