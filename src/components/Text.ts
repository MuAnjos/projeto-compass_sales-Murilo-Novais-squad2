import {styled} from 'styled-components/native';

interface TextProps {
  weight?: 'Regular' | 'Medium' | 'Bold' | 'Black';
  color?: string;
  size?: number;
}

export const Text = styled.Text<TextProps>`
  font-family: ${({weight}) =>
    weight ? `Roboto-${weight}` : 'Roboto-Regular'};
  color: ${({color}) => color || '#222'};
  font-size: ${({size}) => (size ? `${size}px` : '14px')};
`;
