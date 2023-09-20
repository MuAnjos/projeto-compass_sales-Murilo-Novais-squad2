import React, {useContext} from 'react';

import {StyleSheet, Alert} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import auth from '@react-native-firebase/auth';

import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

import {StackProps} from '../../routes/Stack/Models';

import {Container, Header, Form, Footer} from './styles';

import { AuthenticatedContext } from '../../store/AuthenticatedContext';

import {Button} from '../../components/Button';
import {Text} from '../../components/Text';
import {Title} from '../../components/Title';
import {LoginField} from '../../components/LoginField';
import {SubText} from '../../components/SubText';
import {OtherOption} from '../../components/OtherOption';
import {GoogleIcon} from '../../components/Icons/GoogleIcon';
import {FacebookIcon} from '../../components/Icons/FacebookIcon';

export let isLoggedIn = false;

const schema = yup.object({
  email: yup
    .string()
    .email('Invalid Email')
    .required('Please enter your email'),
  password: yup
    .string()
    .min(6, 'A valid password must have at least 6 characters')
    .required('Please enter your password'),
});

export function Login() {
  const navigation = useNavigation<StackProps>();

  const authenticatedContext = useContext(AuthenticatedContext);

  async function handleSignIn(data: any) {
    const { name, email, password } = data;

    try {
      const response = await auth().signInWithEmailAndPassword(email, password);
      await auth().currentUser?.updateProfile({
        displayName: name,
      })
      const token = await response.user.getIdToken();
      authenticatedContext.logIn(response.user, token);
    } catch (error: any) {
      if (error.code === 'auth/wrong-password') {
        Alert.alert('Error', 'Wrong password');
      }
      if (error.code === 'auth/invalid-login') {
        Alert.alert('Error', 'Your email or password is incorrect');
      }
      if (error.code === 'auth/user-not-found') {
        Alert.alert('Error', 'User not found');
      }
    }
  }

  // function handleSignIn(data: any) {
  //   const {name, email, password} = data;

  //   auth()
  //     .signInWithEmailAndPassword(email, password)
  //     .then(() => {
  //       navigation.navigate('Home');
  //     })
  //     .catch(error => {
  //       if (error.code === 'auth/wrong-password') {
  //         Alert.alert('Error', 'Wrong password');
  //       }
  //       if (error.code === 'auth/invalid-login') {
  //         Alert.alert('Error', 'Your email or password is incorrect');
  //       }
  //       if (error.code === 'auth/user-not-found') {
  //         Alert.alert('Error', 'User not found');
  //       }
  //     });
  // }

  function handleSignOut() {
    try {
      auth()
        .signOut()
        .catch(error => {});
      navigation.navigate('SignUp');
    } catch (e) {
      console.log(e);

    }
  }

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <Container>
      <Header>
        <Title>Login</Title>
      </Header>

      <Form >
        <Controller
          control={control}
          name="email"
          render={({formState: {isSubmitted}, field: { onChange, value, ...rest}}) => (
            <LoginField
              isInvalid={errors.email}
              showIcon={isSubmitted}
              onChangeText={onChange}
              value={value}
              secureTextEntry={false}>
              Email
            </LoginField>
          )}
        />
        {errors.email && (
          <Text size={11} color="#F01F0E" style={styles.ErrorsText}>
            {errors.email?.message}
          </Text>
        )}

        <Controller
          control={control}
          name="password"
          render={({formState: {isSubmitted}, field: { onChange, value, ...rest}}) => (
            <LoginField
              isInvalid={errors.password}
              showIcon={isSubmitted}
              onChangeText={onChange}
              value={value}
              secureTextEntry={true}>
              Password
            </LoginField>
          )}
        />
        {errors.password && (
          <Text size={11} color="#F01F0E" style={styles.ErrorsText}>
            {errors.password?.message}
          </Text>
        )}

        <SubText onPress={handleSignOut}>
          Would you like to create an account?
        </SubText>
        <SubText onPress={() => navigation.navigate('ForgotPassword')}>
          Forgot your password
        </SubText>
        <Button onPress={handleSubmit(handleSignIn)}>LOGIN</Button>
        <Text weight="Medium" color="#222" style={styles.OtherOptionText}>
          Or sign up with social account
        </Text>
      </Form>

      <Footer>
        <OtherOption>
          <GoogleIcon></GoogleIcon>
        </OtherOption>
        <OtherOption>
          <FacebookIcon></FacebookIcon>
        </OtherOption>
      </Footer>
    </Container>
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
});
