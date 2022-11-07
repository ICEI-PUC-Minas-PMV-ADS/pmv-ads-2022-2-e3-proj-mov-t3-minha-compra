import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebase/config";
import { excluiTodosOsUsuarios, inserirUsuario } from "../services/DataService";
import { formataCPF } from "../utils/Formaters";

export default function SignUpInput() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [cpf, setCpf] = useState("");
  const [nome, setNome] = useState("");

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const validateSubumit = async () => {
    let form = [email, senha, cpf, nome];
    let inValid = form.includes("");

    if (inValid) {
      Alert.alert("Preencha todos os campos.");
    } else {
      try {
        createUserAccount();
        console.log("SQLite inserirUsuario result: ", result);
      } catch (error) {
        console.log("validate.submit.error: ", error);
      }
    }
  };

  const format = (value) => {
    let result = formataCPF(value);
    setCpf(result);
  };

  const createUserAccount = () => {
    createUserWithEmailAndPassword(auth, email, senha)
      .then(async () => {
        console.log("conta criada com sucesso no firebase...");
        await createLocalUserAccount();
        resetForm();
        Alert.alert("Usuário criado com sucesso.");
      })
      .catch((error) => {
        if (error.message.includes("email-already-in-use")) {
          Alert.alert("E-mail já cadastrado.");
        } else {
          Alert.alert("Erro inesperado, tente novamente mais tarde.");
        }

        throw new Error("firebase.create.account.error: ", error);
      });
  };

  const createLocalUserAccount = async () => {
    try {
      await inserirUsuario({
        email,
        senha,
        cpf,
        nome,
      });
      console.log("usuário salvo com sucesso no banco local...");
    } catch (error) {
      console.log("createLocalUserAccount.error: ", error);
    }
  };

  const resetForm = () => {
    setEmail("");
    setSenha("");
    setCpf("");
    setNome("");
  };

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
            onChangeText={(text) => setNome(text)}
            value={nome}
            placeholder="Nome Completo"
            maxLength={40}
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
            onChangeText={(text) => format(text)}
            value={cpf}
            placeholder="CPF"
            maxLength={14}
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
            onChangeText={(text) => setEmail(text)}
            value={email}
            placeholder="Email"
            maxLength={40}
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
            onChangeText={(text) => setSenha(text)}
            value={senha}
            placeholder="Senha"
            secureTextEntry={true}
            maxLength={20}
          />
        </View>
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity style={styles.button} onPress={validateSubumit}>
            <Text style={{ color: "#FFFFFF" }}>Cadastrar</Text>
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
  },
});
