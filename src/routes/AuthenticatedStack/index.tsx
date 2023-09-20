import React from "react";

import { createNativeStackNavigator} from "@react-navigation/native-stack"

import { NavigationStackProps } from "./Models";

import { Home } from "../../screens/Home";

const { Navigator, Screen } = createNativeStackNavigator<NavigationStackProps>();

export function AuthenticatedStack(){
  return (
    <Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
      <Screen name="Home" component={Home}/>
    </Navigator>
  )
}


