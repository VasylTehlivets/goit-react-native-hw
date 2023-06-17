import React from "react";
import "react-native-gesture-handler";

import { createStackNavigator } from "@react-navigation/stack";

import Registration from "./Screens/auth/RegistrationScreen";
import Login from "./Screens/auth/LoginScreen";
import Home from "./Screens/home/Home";

const AuthStack = createStackNavigator();
const HomeStack = createStackNavigator();

export const useRoute = (isAuth) => {
  if (!isAuth) {
    return (
      <AuthStack.Navigator
      // initialRouteName="Login"
      >
        <AuthStack.Screen
          options={{
            headerShown: false,
          }}
          name="Login"
          component={Login}
        />
        <AuthStack.Screen
          options={{
            headerShown: false,
          }}
          name="Registration"
          component={Registration}
        />
        {/* <AuthStack.Screen
          options={{
            headerShown: false,
          }}
          name="Home"
          component={Home}
        /> */}
      </AuthStack.Navigator>
    );
  }
  return (
    <HomeStack.Navigator
    // screenOptions={{ tabBarShowLabel: false }}
    >
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
    </HomeStack.Navigator>
  );
};
