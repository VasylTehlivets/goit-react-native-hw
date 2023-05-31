import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import Registration from "./Screens/RegistrationScreen";
import Login from "./Screens/LoginScreen";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Registration /> */}
      <Login />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
