import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import ProfileInput from "../components/ProfileInput";
import { consultaUsuario, inserirUsuario } from "../services/DataService";

export default function Profile({ navigation }) {
  const [userData, setUserData] = useState({});

  // async function cadastra() {
  //   console.log("Entrei na func cadastra");
  //   let result = await inserirUsuario({
  //     cpf: "40028922",
  //     nome: "Maria Silva",
  //     email: "maria@gmail.com",
  //     senha: "12345",
  //   });

  //   console.log(result);
  // }

  function navega() {
    navigation.navigate("Profile");
  }

  useEffect(() => {
    consultaUsuario()
      .then((data) => {
        setUserData(data[0]);
      })
      .catch((e) => console.log("erro: ", e));
  }, []);

  // async function ler() {
  //   console.log("Entrei na func ler");
  //   let result = await consultaUsuario();
  //   console.log(result);
  // }

  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <View
          style={{
            backgroundColor: "#FA4A0C",
            width: 100,
            height: 100,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 60,
          }}
        >
          <Text style={{ color: "#FFFFFF", fontSize: 50 }}>M</Text>
        </View>
        <Text style={{ paddingTop: 20, fontSize: 50 }}>{userData.nome}</Text>
        <Text style={{ paddingTop: 20, fontSize: 15 }}>{userData.email}</Text>
      </View>
      <ProfileInput go={navega} teste={"testee"} />
      <Text onPress={() => navigation.navigate("Profile")}>click</Text>
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
});
