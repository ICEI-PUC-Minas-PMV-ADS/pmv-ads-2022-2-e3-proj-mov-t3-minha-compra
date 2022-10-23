import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import LoginInput from "../components/LoginInput";
import SignUpInput from "../components/SignUpInput";

const screens = {
  login: "login",
  signup: "signup",
};

export default function Login({ navigation }) {
  const [selected, setSelected] = useState(screens.login);
  const [keyboardStatus, setKeyboardStatus] = useState(false);

  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardStatus(true);
    });
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardStatus(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      {!keyboardStatus && (
        <View style={styles.logoArea}>
          <View style={{ height: "80%", justifyContent: "center" }}>
            <Image
              source={require("../assets/image/simpleLogo.png")}
              style={styles.logo}
            ></Image>
          </View>
          <View style={styles.options}>
            <TouchableOpacity
              style={{
                ...styles.optionsbox,
                borderBottomColor:
                  selected === screens.login ? "#FA4A0C" : "#00000",
              }}
              onPress={() => setSelected(screens.login)}
            >
              <Text style={{ color: "#FFFFFF", fontSize: 16 }}>Entrar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                ...styles.optionsbox,
                borderBottomColor:
                  selected === screens.signup ? "#FA4A0C" : "#00000",
              }}
              onPress={() => setSelected(screens.signup)}
            >
              <Text style={{ color: "#FFFFFF", fontSize: 16 }}>Cadastrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      {selected === screens.login ? (
        <LoginInput navigation={navigation} />
      ) : (
        <SignUpInput />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },
  logoArea: {
    height: "50%",
    width: "100%",
    alignItems: "center",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    backgroundColor: "#000000",
  },
  logo: {
    width: 250,
    height: 120,
    marginTop: 80,
  },
  optionsbox: {
    width: "40%",
    alignItems: "center",
    height: 30,
    borderBottomWidth: 2,
  },
  options: {
    height: "20%",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 40,
    marginTop: 20,
  },
  button: {
    backgroundColor: "#FA4A0C",
    width: 200,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
});
