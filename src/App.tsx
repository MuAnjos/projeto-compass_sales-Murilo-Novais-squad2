import React, {useEffect, useContext} from 'react';

import {StatusBar} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {NavigationContainer} from '@react-navigation/native';

import {Route} from './routes/route';
import {AuthenticatedRoute} from './routes/authenticatedRoute';
import {
  AuthenticatedContext,
  AuthenticatedContextProvider,
} from './store/AuthenticatedContext';

function App(): JSX.Element {
  return (
    <AuthenticatedContextProvider>
      <MainRoute />
    </AuthenticatedContextProvider>
  );
}

function MainRoute() {
  const authenticatedContext = useContext(AuthenticatedContext);

  useEffect(() => {
    async function getUser() {
      const user = await AsyncStorage.getItem('user');
      const token = await AsyncStorage.getItem('token');

      if (user && token) {
        authenticatedContext.logIn(JSON.stringify(user), token);
      }
    }
    getUser();
  }, []);
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={'#F9F9F9'} barStyle={'dark-content'} />
      {authenticatedContext.authenticated ? <AuthenticatedRoute /> : <Route />}
    </NavigationContainer>
  );
}

export default App;
