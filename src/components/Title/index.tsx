import { Text } from "../Text";
import { Container } from "./styles";

interface TitleProps {
  children: string;
}

export function Title({children}: TitleProps) {
  return(
      <Container>
        <Text weight="Bold" size={34}>
          {children}
        </Text>
      </Container>
  );
}
