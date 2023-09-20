import styled from 'styled-components/native';
import {Platform, StatusBar} from 'react-native';

const isAndroid = Platform.OS === 'android';

export const Container = styled.SafeAreaView`
  padding-top: ${isAndroid ? `${StatusBar.currentHeight}px` : '0'};
  flex: 1;
`;

export const Header = styled.SafeAreaView`
  margin-top: 380px;
  margin-left: 16px;
`;

export const Products = styled.SafeAreaView`
  background: #F9F9F9;
  min-height: 160px;
`;

export const Footer = styled.SafeAreaView`
  background-color: #FFF;
  border-radius: 12px 12px 0 0;
  height: 83px;
`
