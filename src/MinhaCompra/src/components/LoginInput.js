import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Lock from "../assets/image/lock.svg";
import Mail from "../assets/image/mail.svg";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebase/config";

export default function LoginInput(props) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const onPress = () => console.log("ok");

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        console.log("Signed in!");
        const user = userCredential.user;
        console.log(user);
        //props.navigation.navigate("Navigation")
      })
      .catch((error) => {
        console.log("login.error: ", error);
      });
  };

  return (
    <View style={styles.inputArea}>
      <View style={styles.inputBox}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Mail />
          <TextInput
            style={styles.input}
            onChangeText={setEmail}
            value={email}
            placeholder="Email"
          />
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Lock />
          <TextInput
            style={styles.input}
            onChangeText={setSenha}
            value={senha}
            placeholder="Senha"
          />
        </View>
        <Text
          style={{
            color: "#FA4A0C",
            marginLeft: 32,
            marginTop: 10,
            marginBottom: 50,
          }}
        >
          Esqueci a senha
        </Text>
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={{ color: "#FFFFFF" }}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputArea: {
    height: "50%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  inputBox: {
    width: "80%",
  },
  input: {
    height: 40,
    width: "80%",
    margin: 12,
    borderBottomWidth: 1,
    padding: 10,
  },
  logo: {
    width: 250,
    height: 120,
  },
  options: {
    height: "10%",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 50,
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
