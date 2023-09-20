import {styled} from 'styled-components/native';
import {Platform} from 'react-native';

const isAndroid = Platform.OS === 'android';

export const Container = styled.TouchableOpacity`
  background: #DB3022;
  border-radius: 25px;
  height: 48px;
  margin: 32px 16px 0 16px;
  align-items: center;
  padding: 14px 24px;
  box-shadow: 0px 4px 8px rgba(211, 38, 38, ${isAndroid ? 1 : 0.05});
  elevation: 3;
`;
