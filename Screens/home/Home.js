import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

import PostsScreen from "./PostsScreen";
import CreatePostsScreen from "./CreatePostsScreen";
import ProfileScreen from "./ProfileScreen";

const MainTab = createBottomTabNavigator();

const Home = ({ navigation }) => {
  const [isFocused, setIsFocuced] = useState(true);
  return (
    <MainTab.Navigator
      // initialRouteName="PostsScreen"
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarStyle: { height: 58 },
        tabBarInactiveTintColor: "rgba(33, 33, 33, 0.8)",
        tabBarActiveTintColor: "#FFFFFF",
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Posts") {
            iconName = focused ? "grid" : "grid";
          } else if (route.name === "Create") {
            iconName = focused ? "plus" : "plus";
          } else if (route.name === "Profile") {
            iconName = focused ? "user" : "user";
          }

          return (
            <TouchableOpacity
              style={styles.iconNav}
              onPress={() => navigation.navigate(route.name)}
            >
              <View
                style={[
                  styles.iconContainer,
                  { backgroundColor: focused ? "#FF6C00" : "#FFFFFF" },
                ]}
              >
                <Feather
                  name={iconName}
                  size={size}
                  color={focused ? "#FFFFFF" : "rgba(33, 33, 33, 0.8)"}
                />
              </View>
            </TouchableOpacity>
          );
        },
      })}
    >
      <MainTab.Screen
        name="Posts"
        component={PostsScreen}
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
          headerRight: () => (
            <TouchableOpacity style={{ marginRight: 19 }}>
              <Feather name="log-out" size={24} color="#BDBDBD" />
            </TouchableOpacity>
          ),
        }}
      />
      <MainTab.Screen
        name="Create"
        component={CreatePostsScreen}
        options={{
          headerTitle: "Створити публікацію",
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
          headerLeft: (focused, size, color) => (
            <TouchableOpacity
              style={{ marginLeft: 16, width: 20, height: 20 }}
              onPress={() => {
                navigation.navigate("Posts"), setIsFocuced(true);
              }}
            >
              <Feather
                name="arrow-left"
                size={24}
                color="rgba(33, 33, 33, 0.8)"
              />
            </TouchableOpacity>
          ),
        }}
      />
      <MainTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
    </MainTab.Navigator>
  );
};

export default Home;

const styles = StyleSheet.create({
  iconNav: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});
