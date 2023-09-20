import {ReactNode, useState} from 'react';
import {Text} from '../Text';
import {Container, IconContainer, Input} from './styles';
import {StyleSheet} from 'react-native';
import {FieldError} from 'react-hook-form';
import {ValidIcon} from '../Icons/ValidIcon';
import {InvalidIcon} from '../Icons/InvalidIcon';

interface LoginFieldProps {
  children: string;
  isInvalid: FieldError | undefined;
  showIcon: boolean;
  onChangeText: () => void;
  secureTextEntry?: boolean;
  value: string;
}

export function LoginField({
  children,
  isInvalid,
  showIcon,
  onChangeText,
  secureTextEntry,
  value,
  ...rest
}: LoginFieldProps) {
  return (
    <Container style={isInvalid && styles.isInvalid}>
      <Text
        size={11}
        color={isInvalid ? '#F01F0E' : '#9B9B9B'}
        style={styles.fieldName}>
        {children}
      </Text>
      <Input
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        value={value}
        {...rest}
      />

      {showIcon ? (
        <IconContainer style={styles.Icon}>
        {isInvalid ? <InvalidIcon /> :  <ValidIcon />}
      </IconContainer>
      ) : (
        <></>
      )}
    </Container>
  );
}

const styles = StyleSheet.create({
  fieldName: {
    position: 'absolute',
    width: 'auto',
    top: 13,
    left: 20,
  },
  isInvalid: {
    borderWidth: 1,
    borderColor: '#F01F0E',
  },
  Icon: {
    position: 'absolute',
    top: 20,
    right: 21,
  },
  Transparent: {
    display: 'none',
  },
});
