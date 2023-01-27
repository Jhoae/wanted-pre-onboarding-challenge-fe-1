import { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

export interface InputLayoutProps extends InputHTMLAttributes<HTMLInputElement> {
  LayoutWidth?: string | number;
  LayoutHeight?: string | number;
}

export const InputLayout = styled.div<InputLayoutProps>`
  display: flex;
  flex-direction: column;
  width: ${(props) => props.LayoutWidth};
  height: ${(props) => props.LayoutHeight};
`;

export const LoginForm = styled.form``;

export const ErrorMessage = styled.span`
  margin-top: 0.3rem;
  color: red;
  font-size: 0.5rem;
`;
