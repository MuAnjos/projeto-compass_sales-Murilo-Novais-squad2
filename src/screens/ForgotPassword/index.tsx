import React from 'react';

import {StyleSheet, TouchableOpacity, Alert} from 'react-native';

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
import {OtherOption} from '../../components/OtherOption';
import {GoogleIcon} from '../../components/Icons/GoogleIcon';
import {FacebookIcon} from '../../components/Icons/FacebookIcon';
import {LeftIcon} from '../../components/Icons/LeftIcon';

export function ForgotPassword() {
  const navigation = useNavigation<StackProps>();

  const schema = yup.object({
    email: yup
      .string()
      .email('Invalid Email')
      .required('Please enter your email'),
  });

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
  });

  function handleForgotPassword(data: any) {
    const {email} = data;
    auth().sendPasswordResetEmail(email)
    .catch(error => {
      Alert.alert('Error', 'You have entered a valid but non-existent email address')
    });
  }
  return (
    <Container>
      <Header>
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
          style={styles.LeftIcon}>
          <LeftIcon></LeftIcon>
        </TouchableOpacity>
        <Title>Forgot password</Title>
      </Header>

      <Form>
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
        <Button onPress={handleSubmit(handleForgotPassword)}>SEND</Button>
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
  LeftIcon: {
    marginLeft: 8,
  },
  ErrorsText: {
    marginLeft: 36,
  },
});
