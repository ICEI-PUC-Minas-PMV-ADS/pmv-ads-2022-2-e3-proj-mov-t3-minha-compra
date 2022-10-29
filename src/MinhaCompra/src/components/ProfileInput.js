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
      const result = await atualizarUsuario({
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
      <View style={styles.inputBox}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 10,
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
          <TextInput
            style={styles.input}
            onChangeText={setCpf}
            value={cpf}
            placeholder="CPF"
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
            // onChangeText={setSenha}
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
