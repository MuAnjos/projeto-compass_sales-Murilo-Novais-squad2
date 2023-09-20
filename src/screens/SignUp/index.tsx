import React, {useState} from 'react';

import {StyleSheet, Alert} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import auth from '@react-native-firebase/auth';

import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

import {StackProps} from '../../routes/Stack/Models';

import {Container, Header, Form, Footer} from './styles';

import {Button} from '../../components/Button';
import {Text} from '../../components/Text';
import {Title} from '../../components/Title';
import {LoginField} from '../../components/LoginField';
import {SubText} from '../../components/SubText';
import {OtherOption} from '../../components/OtherOption';
import {GoogleIcon} from '../../components/Icons/GoogleIcon';
import {FacebookIcon} from '../../components/Icons/FacebookIcon';

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

export function SignUp() {
  const navigation = useNavigation<StackProps>();
  const [initializing, setInitializing] = useState(true);

  function handleSignUp(data: any) {
    const {name, email, password} = data;

    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        navigation.navigate('Login');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert('Error', 'Email already in use');
        }
        if (error.code === 'auth/invalid-email') {
          Alert.alert('Error', 'Email already in use');
        }
      });
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
        <Title>Sign Up</Title>
      </Header>

      <Form>
        <Controller
          control={control}
          name="name"
          render={({
            formState: {isSubmitted},
            field: {onChange, value, ...rest},
          }) => (
            <LoginField
              isInvalid={errors.name}
              showIcon={isSubmitted}
              onChangeText={onChange}
              value={value}
              secureTextEntry={false}>
              name
            </LoginField>
          )}
        />
        {errors.name && (
          <Text size={11} color="#F01F0E" style={styles.ErrorsText}>
            {errors.name?.message}
          </Text>
        )}

        <Controller
          control={control}
          name="email"
          render={({
            formState: {isSubmitted},
            field: {onChange, value, ...rest},
          }) => (
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
          render={({
            formState: {isSubmitted},
            field: {onChange, value, ...rest},
          }) => (
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

        <SubText onPress={() => navigation.navigate('Login')}>
          Already have an account?
        </SubText>
        <Button onPress={handleSubmit(handleSignUp)}>SIGN UP</Button>
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
