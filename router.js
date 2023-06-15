import React from "react";
import "react-native-gesture-handler";

import { createStackNavigator } from "@react-navigation/stack";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Registration from "./Screens/auth/RegistrationScreen";
import Login from "./Screens/auth/LoginScreen";
import Home from "./Screens/home/Home";

const AuthStack = createStackNavigator();
// const HomeTab = createStackNavigator();

export const useRoute = (isAuth) => {
  if (!isAuth) {
    return (
      <AuthStack.Navigator initialRouteName="Login">
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
        <AuthStack.Screen
          options={{
            headerShown: false,
          }}
          name="Home"
          component={Home}
        />
      </AuthStack.Navigator>
    );
  }
  // return (
  //   <HomeTab.Navigator screenOptions={{ tabBarShowLabel: false }}>
  //     <HomeTab.Screen
  //       name="Home"
  //       component={Home}
  //       options={{ headerShown: false }}
  //     />
  //   </HomeTab.Navigator>
  // );
};
