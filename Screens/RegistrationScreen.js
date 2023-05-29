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
  Image,
} from "react-native";
import { useFonts } from "expo-font";

export default function Registration({ style }) {
  const [showPassword, setShowPassword] = useState(false);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setIsShowKeyboard(true);
      }
    );

    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setIsShowKeyboard(false);
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("../assets/fonts/Roboto-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={[styles.container, style]}>
      <ImageBackground
        style={styles.image}
        source={require("../assets/images/Photo_BG.jpg")}
      >
        <View style={styles.photoContainer}>
          <Image
            style={styles.avatarBG}
            source={require("../assets/images/avatarBG.jpg")}
          ></Image>
          {/* <View style={styles.avatarBG}></View> */}
        </View>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ ...styles.form, paddingBottom: isShowKeyboard ? 80 : 7 }}
          // style={[styles.form, { paddingBottom: isShowKeyboard ? 80 : 7 }]}
        >
          {/* <View style={styles.form}> */}
          <View style={styles.photoAdd}>
            <Image source={require("../assets/images/add.jpg")}></Image>
          </View>
          <View>
            <Text style={styles.formTitle}>Реєстрація</Text>
          </View>
          <View>
            <TextInput
              style={styles.input}
              placeholder="Логін"
              placeholderTextColor={"#BDBDBD"}
              onFocus={() => setIsShowKeyboard(true)}
            />
          </View>
          <View>
            <TextInput
              style={styles.input}
              placeholder="Адреса електронної пошти"
              placeholderTextColor={"#BDBDBD"}
              onFocus={() => setIsShowKeyboard(true)}
            />
          </View>
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.input}
              // secureTextEntry={true}
              secureTextEntry={!showPassword}
              placeholder="Пароль"
              placeholderTextColor={"#BDBDBD"}
              onFocus={() => setIsShowKeyboard(true)}
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
              <TouchableOpacity style={styles.btn} activeOpacity={0.8}>
                <Text style={styles.btnTitle}>Зареєструватися</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.8}>
                <Text style={styles.textTitle}>Вже є акаунт? Увійти</Text>
              </TouchableOpacity>
              <View style={styles.borderLine}></View>
            </>
          )}
          {/* </View> */}
        </KeyboardAvoidingView>
      </ImageBackground>
    </View>
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
  // avatarBG: {
  //   position: "absolute",
  //   left: 15,
  //   top: 60,
  //   zIndex: 10,
  //   marginHorizontal: 128,
  //   backgroundColor: "#F6F6F6",
  //   borderRadius: 16,
  //   width: 120,
  //   height: 120,
  // },
  photoContainer: {
    position: "absolute",
    top: "18%",
    left: 0,
    right: 0,
    zIndex: 10,
    alignItems: "center",
  },
  avatarBG: {
    position: "absolute",
    top: -60,
    left: "50%",
    transform: [{ translateX: -60 }],
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
    paddingTop: 92,
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
    // fontWeight: 400,
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
    marginBottom: 52,
    fontFamily: "Roboto-Regular",
  },
  borderLine: {
    backgroundColor: "#212121",
    borderRadius: 100,
    borderWidth: 3,
    // borderColor: "#212121",
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
  photoAdd: {
    position: "absolute",
    top: "3%",
    left: "66%",
    zIndex: 100,
  },
});
