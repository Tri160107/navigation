import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
const Stack = createStackNavigator();

const AuthScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{ headerShown: false }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({});
