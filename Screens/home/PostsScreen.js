import React from "react";
import { TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import { Feather } from "@expo/vector-icons";

import MapScreen from "../nestedScreens/MapScreen";
import CommentsScreen from "../nestedScreens/CommentsScreen";
import DefaultPostsScreen from "../nestedScreens/DefaultPostsScreen";

const NestedScreen = createStackNavigator();

export default function PostScreen({ navigation }) {
  return (
    <NestedScreen.Navigator>
      <NestedScreen.Screen
        name="DefaultPosts"
        component={DefaultPostsScreen}
        options={{
          headerTitle: "Публікації",
          headerTitleAlign: "center",
          headerStyle: {
            height: 88,
            backgroundColor: "#FFFFFF",
            shadowColor: "rgba(0, 0, 0, 0.3)",
            shadowOffset: { width: 0, height: 0.5 },
            shadowRadius: 1.35914,
          },
          headerTitleStyle: {
            fontFamily: "Roboto-Medium",
            fontStyle: "normal",
            fontSize: 17,
            lineHeight: 22,
            letterSpacing: -0.408,
          },
          headerTintColor: "#212121",
          headerLeft: null,
          headerRight: () => (
            <TouchableOpacity
              style={{ marginRight: 19 }}
              onPress={() => navigation.navigate("Login")}
            >
              <Feather name="log-out" size={24} color="#BDBDBD" />
            </TouchableOpacity>
          ),
        }}
      />
      <NestedScreen.Screen
        name="Map"
        component={MapScreen}
        options={{
          headerTitle: "Карта",
          headerTitleAlign: "center",
          headerStyle: {
            height: 88,
            backgroundColor: "#FFFFFF",
            shadowColor: "rgba(0, 0, 0, 0.3)",
            shadowOffset: { width: 0, height: 0.5 },
            shadowRadius: 1.35914,
          },
          headerTitleStyle: {
            fontFamily: "Roboto-Medium",
            fontStyle: "normal",
            fontSize: 17,
            lineHeight: 22,
            letterSpacing: -0.408,
          },
          headerTintColor: "#212121",
        }}
      />
      <NestedScreen.Screen
        name="Comments"
        component={CommentsScreen}
        options={{
          headerTitle: "Коментарі",
          headerTitleAlign: "center",
          headerStyle: {
            height: 88,
            backgroundColor: "#FFFFFF",
            shadowColor: "rgba(0, 0, 0, 0.3)",
            shadowOffset: { width: 0, height: 0.5 },
            shadowRadius: 1.35914,
          },
          headerTitleStyle: {
            fontFamily: "Roboto-Medium",
            fontStyle: "normal",
            fontSize: 17,
            lineHeight: 22,
            letterSpacing: -0.408,
          },
          headerTintColor: "#212121",
        }}
      />
    </NestedScreen.Navigator>
  );
}
