import React, {useContext} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {StyleSheet, StatusBar, ImageBackground} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import auth from '@react-native-firebase/auth';

import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

import {StackProps} from '../../routes/Stack/Models';

import {Container, Header, Products, Footer} from './styles';

import {Button} from '../../components/Button';
import {Text} from '../../components/Text';
import { AuthenticatedContext } from '../../store/AuthenticatedContext';

const schema = yup.object({
  name: yup.string().min(3).required('Please enter your name'),
  email: yup
    .string()
    .email('Invalid Email')
    .required('Please enter your email'),
  password: yup
    .string()
    .min(6, 'A valid password must have at least 6 characters')
    .required('Please enter your password'),
});

export function Home() {
  const navigation = useNavigation<StackProps>();

  const authenticatedContext = useContext(AuthenticatedContext);

  async function handleSignOut() {
    auth().signOut();
    authenticatedContext.logOut();
  }

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <ImageBackground source={require('../../assets/images/CompassHomeBackground.png')} style={styles.ImageBackground}>
    <Container>
      <StatusBar backgroundColor={'transparent'}  translucent={true} barStyle={'light-content'} />

      <Header>
        <Text weight='Black' color='#fff' size={48}>Compass</Text>
        <Text weight='Black' color='#fff' size={48}>sale</Text>
      </Header>

      <Button onPress={handleSignOut} style={styles.Button}>
          Log Out
      </Button>

      <Products>
        <Text weight='Bold' size={25} style={styles.TopicHome}>Nothing to see here...</Text>
      </Products>

      <Footer>
        <Text weight='Bold' size={16} style={styles.BarText}>Loading...</Text>
      </Footer>
    </Container>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  OtherOptionText: {
    alignSelf: 'center',
    paddingBottom: 12,
    marginTop: 'auto',
  },
  ErrorsText: {
    marginLeft: 36,
  },
  ImageBackground: {
    height: 650,
  },
  Button: {
    marginTop: 12,
    marginLeft: 10,
    marginBottom: 35,
    width: 180,
  },
  TopicHome: {
    marginTop: 35,
    marginLeft: 14,
  },
  BarText: {
    alignSelf: 'center',
    marginTop: 18,
    justifyContent: 'center',
    color: '#DB3022',
  }
});
