import React from 'react';
import * as Style from './ContentBox.styles';

export interface ContentBoxProps {
  content: string;
}

const ContentBox = ({ content }: ContentBoxProps) => {
  return <Style.Content>{content}</Style.Content>;
};

export default ContentBox;
