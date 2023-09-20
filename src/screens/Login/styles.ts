import styled from 'styled-components/native';
import {Platform, StatusBar} from 'react-native';

const isAndroid = Platform.OS === 'android';

export const Container = styled.SafeAreaView`
  background: #F9F9F9;
  padding-top: ${isAndroid ? `${StatusBar.currentHeight}px` : '0'};
  flex: 1;
`;

export const Header = styled.SafeAreaView`
  min-height: 104px;
`;

export const Form = styled.View`
  margin-top: 58px;
  flex: 1 0 500px;
`

export const Footer = styled.View`
  min-height: 119px;
  padding-bottom: 23px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
