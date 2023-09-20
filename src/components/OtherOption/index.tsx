import {ReactNode} from 'react';
import {Container} from './styles';

interface OtherOptionProps {
  children: ReactNode;
}

export function OtherOption({children}: OtherOptionProps) {
  return <Container>{children}</Container>;
}
