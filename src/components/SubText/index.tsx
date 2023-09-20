import { RedIcon } from '../Icons/RedIcon';
import {Text} from '../Text';
import {Container} from './style';

interface ButtonProps {
  children: string;
  onPress?: () => void;
}

export function SubText({children, onPress}: ButtonProps) {
  return (
    <Container onPress={onPress}>
      <Text weight="Medium">{children}</Text>
      <RedIcon></RedIcon>
    </Container>
  );
}
