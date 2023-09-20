import styled from "styled-components/native";
import {Platform} from 'react-native';

const isAndroid = Platform.OS === 'android';

export const Container = styled.View`
  height: 65px;
  margin: 4px 16px;
  padding-top: 26px;
  padding-left: 16px;
  background: blue;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0px 1px 8px rgba(0, 0, 0, ${isAndroid ? 0.5 : 0.05});
  elevation: 1;
`

export const Input = styled.TextInput`
  color: #2D2D2D;
  padding-right: 20px;
  font-size: 14px;
`
export const IconContainer = styled.View`
`
;

