import SignUpGuide from '../../atoms/SignUpGuideText/SignUpGuide';
import * as Style from './Title.style';
import { TitleHeaderProps } from './Title.style';

interface TitleProps extends TitleHeaderProps {
  signUpGuide: boolean;
}

export default function Title({ HeaderText, signUpGuide }: TitleProps) {
  return (
    <>
      <Style.TitleHeader>{HeaderText}</Style.TitleHeader>
      {signUpGuide && <SignUpGuide />}
    </>
  );
}
