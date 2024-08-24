import React, { Component, useContext, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Film from "../film/Film";
import Actor from "../actor/Actor";
import { createStackNavigator } from "@react-navigation/stack";
import AuthScreen from "../auth/AuthScreen";
import { getDataObject } from "../../helper/mystorage";
import { ActivityIndicator } from "react-native";
import { AppContext, useAppContext } from "../../Appcontext";
import Todo from "./Todo";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const AppRootScreen: React.FC = () => {
  const { userData } = useAppContext();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="AuthScreen"
          component={AuthScreen}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="Todo"
          options={{ headerShown: false }}
          component={() => {
            return (
              <Tab.Navigator screenOptions={{ headerShown: false }}>
                <Tab.Screen name="Todo" component={Todo} />
              </Tab.Navigator>
            );
          }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppRootScreen;
