import { Text } from "../Text";
import { Container } from "./styles";

interface ButtonProps {
  children: string;
  onPress: () => void;
  style?: any;
}

export function Button ({children, onPress, ...rest}: ButtonProps){

  return (
    <Container onPress={onPress} {...rest}>
      <Text weight="Medium" color="#FFF">
        {children}
      </Text>
    </Container>
  );
}
