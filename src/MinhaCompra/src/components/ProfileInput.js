import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

import {
  consultaUsuario,
  inserirUsuario,
  atualizarUsuario,
  inserirTest,
  consultaTest,
  updateTest,
} from "../services/DataService";

export default function ProfileInput(props) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [cpf, setCpf] = useState("");
  const [nome, setNome] = useState("");

  const onPress = async () => {
    try {
      await atualizarUsuario({
        nome: nome,
        email: email,
        senha: senha,
        cpf: cpf,
      });

      // props.isFocused();
      props.navigation.navigate("Refresh");
    } catch (error) {
      console.log("erro: ", error);
    }
  };

  useEffect(() => {
    consultaUsuario()
      .then((data) => {
        const userData = data[0];
        setEmail(userData.email);
        setSenha(userData.senha);
        setCpf(userData.cpf);
        setNome(userData.nome);
      })
      .catch((e) => console.log("erro: ", e));
  }, []);
  return (
    <View style={styles.inputArea}>
      <View style={{ alignItems: "center", marginBottom: 30 }}>
        <View
          style={{
            backgroundColor: "#FA4A0C",
            width: 150,
            height: 150,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 80,
          }}
        >
          <Text style={{ color: "#FFFFFF", fontSize: 65 }}>{props.userData?.nome?.substring(0, 1)}</Text>
        </View>
        <Text style={{ paddingTop: 20, fontSize: 50 }}>{props.userData?.nome}</Text>
        <Text style={{ paddingTop: 20, fontSize: 15 }}>{props.userData?.email}</Text>
        <Text style={{ paddingTop: 10, fontSize: 15 }}>{props.userData?.cpf}</Text>
      </View>

      <View style={styles.inputBox}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 8,
            width: "100%",
          }}
        >
          <TextInput
            style={styles.input}
            onChangeText={setNome}
            value={nome}
            placeholder="Nome Completo"
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 10,
            width: "100%",
          }}
        >
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 20,
            width: "100%",
          }}
        >
          <TextInput
            style={styles.input}
            onChangeText={setEmail}
            value={email}
            placeholder="Email"
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 50,
            width: "100%",
          }}
        >
          <TextInput
            style={styles.input}
            onChangeText={setSenha}
            value={senha}
            placeholder="Senha"
          />
        </View>
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={{ color: "#FFFFFF" }}>Atualizar</Text>
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
  input: {
    height: 40,
    width: "80%",
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
    marginBottom: 10,
  },
});
