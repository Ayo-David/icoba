import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "./Login";
import PasswordScreen from "./ForgotPassword";
import SignupScreen from './Signup';

const RootStack = createStackNavigator();

const RootStackScreen = ({ Navigator }) => {
  return (
    <RootStack.Navigator headerMode="none">
      <RootStack.Screen name="LoginScreen" component={LoginScreen} />
      <RootStack.Screen name='SignupScreen' component={SignupScreen} />
      <RootStack.Screen name='PasswordScreen' component={PasswordScreen} />
    </RootStack.Navigator>
  );
};

export default RootStackScreen;
