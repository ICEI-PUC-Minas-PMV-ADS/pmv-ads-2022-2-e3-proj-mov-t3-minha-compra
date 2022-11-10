import { useNavigation, useIsFocused } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import ProfileInput from "../components/ProfileInput";
import { consultaUsuario, inserirUsuario } from "../services/DataService";

export default function Profile({ navigation }) {
  const [userData, setUserData] = useState({});
  const isFocused = useIsFocused();

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

  useEffect(() => {
  
    consultaUsuario()
      .then((data) => {
        setUserData(data[0]);
        console.log(userData)
        
      })
      .catch((e) => console.log("erro: ", e));
  }, [isFocused]);

  // async function ler() {
  //   console.log("Entrei na func ler");
  //   let result = await consultaUsuario();
  //   console.log(result);
  // }

  return (
    <View style={styles.container}>
      
      <ProfileInput isFocused={isFocused} navigation={navigation} />
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
