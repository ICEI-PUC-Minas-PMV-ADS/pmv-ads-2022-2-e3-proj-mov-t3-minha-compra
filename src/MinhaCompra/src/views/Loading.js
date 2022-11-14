import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { StyleSheet, View, Image } from "react-native";
import { consultaUsuario } from "../services/DataService";
import { firebaseConfig } from "../firebase/config";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function Loading({ navigation }) {
  async function loading() {
    try {
      console.log("Carregando app...");

      const result = await consultaUsuario();
      console.log("usuário no banco local: ", result);

      if (result.length === 0) {
        setTimeout(() => navigation.navigate("Login"), 1000);
      } else {
        const app = initializeApp(firebaseConfig);
        const auth = getAuth(app);

        signInWithEmailAndPassword(auth, result[0]?.email, result[0]?.senha)
          .then((userCredential) => {
            console.log("Automatic signed in!");
            const user = userCredential.user;
            console.log(user);
            setTimeout(() => navigation.navigate("Navigation"), 1000);
          })
          .catch((error) => {
            setTimeout(() => navigation.navigate("Login"), 1000);
            throw new Error("firebase.login.error: ", error);
          });

      }
    } catch (error) { }
  }

  useEffect(() => {
    loading();
  });

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/image/logo.png")}
        style={styles.logo}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000000",
  },
  logo: {},
});
