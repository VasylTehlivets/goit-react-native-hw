import React, { useState, useEffect } from "react";
import {
  View,
  ImageBackground,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const initialState = {
  email: "",
  password: "",
};

export default function Login({ style }) {
  const navigation = useNavigation();

  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [state, setState] = useState(initialState);
  const [isFocused, setIsFocused] = useState(null);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleInputFocus = (inputId) => {
    setIsShowKeyboard(true);
    setIsFocused(inputId);
  };

  const handleInputBlur = () => {
    setIsShowKeyboard(false);
    setIsFocused(null);
  };

  const onLogin = () => {
    setIsShowKeyboard(false);
    console.log(state);
    setState(initialState);
    navigation.navigate("Home");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={[styles.container, style]}>
        <ImageBackground
          style={styles.image}
          source={require("../assets/images/Photo_BG.jpg")}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : null}
            style={[
              styles.form,
              { paddingBottom: isShowKeyboard ? 32 : 7, paddingTop: 32 },
            ]}
          >
            <View>
              <Text style={styles.formTitle}>Увійти</Text>
            </View>
            <View>
              <TextInput
                style={[
                  styles.input,
                  {
                    borderColor: isFocused === "email" ? "#FF6C00" : "#E8E8E8",
                  },
                ]}
                placeholder="Адреса електронної пошти"
                placeholderTextColor={"#BDBDBD"}
                // onFocus={handleInputFocus}
                onFocus={() => handleInputFocus("email")}
                onBlur={handleInputBlur}
                value={state.email}
                onChangeText={(value) =>
                  setState((prevstate) => ({ ...prevstate, email: value }))
                }
              />
            </View>
            <View style={styles.passwordContainer}>
              <TextInput
                style={[
                  styles.input,
                  {
                    borderColor:
                      isFocused === "password" ? "#FF6C00" : "#E8E8E8",
                  },
                ]}
                secureTextEntry={!showPassword}
                placeholder="Пароль"
                placeholderTextColor={"#BDBDBD"}
                onFocus={() => handleInputFocus("password")}
                onBlur={handleInputBlur}
                value={state.password}
                onChangeText={(value) =>
                  setState((prevstate) => ({ ...prevstate, password: value }))
                }
              />
              <TouchableOpacity
                style={styles.showPasswordButton}
                onPress={togglePasswordVisibility}
              >
                <Text style={styles.showPasswordButtonText}>
                  {showPassword ? "Приховати" : "Показати"}
                </Text>
              </TouchableOpacity>
            </View>
            {!isShowKeyboard && (
              <>
                <TouchableOpacity
                  style={styles.btn}
                  activeOpacity={0.8}
                  onPress={onLogin}
                >
                  <Text style={styles.btnTitle}>Увійти</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Registration")}
                  // title="Зареєструватися"
                  activeOpacity={0.8}
                >
                  <Text style={styles.textTitle}>
                    Немає акаунту? Зареєструватися
                  </Text>
                </TouchableOpacity>
                <View style={styles.borderLine}></View>
              </>
            )}
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    // alignItems: "center",
  },
  photoBG: {
    position: "absolute",
    // left: 128,
    top: 50,
    zIndex: 10,
    marginHorizontal: 128,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    width: 120,
    height: 120,
  },
  form: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#FFFFFF",
    borderTopStartRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: 16,
    // paddingTop: 32,
    // paddingBottom: 7,
    gap: 16,
    // height: 549,
    // height: 500,
    justifyContent: "center",
  },
  formTitle: {
    color: "#212121",
    fontSize: 30,
    fontWeight: 500,
    lineHeight: 35,
    marginBottom: 17,
    textAlign: "center",
    fontFamily: "Roboto-Medium",
    // letterSpacing: 0.01,
  },
  input: {
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    height: 50,
    padding: 16,
    backgroundColor: "#F6F6F6",
    color: "#212121",
    fontSize: 16,
  },
  btn: {
    marginTop: 29,
    height: 51,
    backgroundColor: "#FF6C00",
    padding: 16,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  btnTitle: {
    fontSize: 16,
    lineHeight: 19,
    color: "#FFFFFF",
    fontFamily: "Roboto-Regular",
  },
  textTitle: {
    color: "#1B4371",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
    marginBottom: 116,
    fontFamily: "Roboto-Regular",
  },
  borderLine: {
    backgroundColor: "#212121",
    borderRadius: 100,
    borderWidth: 3,
    marginHorizontal: 120,
  },
  passwordContainer: {
    position: "relative",
  },
  showPasswordButton: {
    position: "absolute",
    top: 16,
    right: 16,
  },
  showPasswordButtonText: {
    color: "#1B4371",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    fontFamily: "Roboto-Regular",
  },
});
