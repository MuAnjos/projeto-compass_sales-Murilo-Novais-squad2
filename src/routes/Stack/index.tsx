import React from "react";

import { createNativeStackNavigator} from "@react-navigation/native-stack"

import { NavigationStackProps } from "./Models";

import { Login } from "../../screens/Login";
import { ForgotPassword } from "../../screens/ForgotPassword";
import { SignUp } from "../../screens/SignUp";

const { Navigator, Screen } = createNativeStackNavigator<NavigationStackProps>();

export function Stack(){
  return (
    <Navigator initialRouteName="SignUp" screenOptions={{headerShown: false}}>
      <Screen name="SignUp" component={SignUp}/>
      <Screen name="Login" component={Login}/>
      <Screen name="ForgotPassword" component={ForgotPassword}/>

    </Navigator>
  )
}


