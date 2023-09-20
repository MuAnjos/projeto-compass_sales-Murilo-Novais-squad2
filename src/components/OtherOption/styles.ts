import styled from "styled-components/native";
import {Platform} from 'react-native';

const isAndroid = Platform.OS === 'android';

export const Container = styled.TouchableOpacity`
  width: 92px;
  height: 64px;
  background: #FFF;
  margin: 0 8px;
  border-radius: 24px;
  box-shadow: 0px 1px 8px rgba(0, 0, 0, ${isAndroid ? 0.5 : 0.05});
  elevation: 1;
  justify-content: center;
  align-items: center;
`
