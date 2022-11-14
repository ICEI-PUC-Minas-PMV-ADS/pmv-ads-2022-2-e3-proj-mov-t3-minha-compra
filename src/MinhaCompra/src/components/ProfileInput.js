import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { consultaUsuario, atualizarUsuario } from "../services/DataService";
import { getAuth, updatePassword, updateEmail } from "firebase/auth";
import { db } from "../firebase/config";
import { doc, setDoc } from "firebase/firestore";

// TODO: Fazer verificação de senha maior que 6 caracteres e mostrar um modal
// TODO: Fazer verificação que o email tenha ".com"
// TODO: Separar função de onPress em mais funções

export default function ProfileInput(props) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [cpf, setCpf] = useState("");
  const [nome, setNome] = useState("");

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

  const updateFirestoreDoc = () => {
    const docRef = doc(db, "users", cpf)
    const data = {
      cpf: props.userData?.cpf,
      nome: nome,
      email: email,
      senha: senha
    };
    setDoc(docRef, data)
      .then(() => {
        console.log("O documento foi atualizado com sucesso no Firestore.");
      })
      .catch(error => {
        console.log(error);
      })
  }

  const handleUpdateFlow = async () => {
    if (getAuth()?.currentUser?.email !== email) {
      const result = await consultaUsuario();

      try {
        await updateEmail(getAuth().currentUser, email)

        setSenha(result[0].senha)

        updateFirestoreDoc()

        await atualizarUsuario({
          nome: nome,
          email: email,
          senha: props.userData?.senha,
          cpf: props.userData?.cpf,
        })

        props.navigation.navigate("Refresh")
        return setTimeout(() => props.navigation.navigate("Login"), 1800)

      } catch (e) {
        if (e.message.includes("auth/invalid-email")) {
          Alert.alert("Por favor, digite um email válido.")
        }
      }


    } else if (props.userData?.senha !== senha) {
      try {
        await updatePassword(getAuth().currentUser, senha)

        updateFirestoreDoc()

        await atualizarUsuario({
          nome: nome,
          email: getAuth()?.currentUser?.email,
          senha: senha,
          cpf: cpf,
        })

        props.navigation.navigate("Refresh")
        return setTimeout(() => props.navigation.navigate("Login"), 1800)
       
      } catch (e) {
        if (e.message.includes("auth/weak-password")) {
          Alert.alert("A senha deve ter, pelo menos, 6 caracteres.")
        }
      }

    }

    await atualizarUsuario({
      nome: nome,
      email: props.userData?.email,
      senha: props.userData?.senha,
      cpf: props.userData?.cpf,
    })

    updateFirestoreDoc()

    props.navigation.navigate("Refresh")

    return setTimeout(() => props.navigation.navigate("Profile"), 1500);

  }

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
        <Text style={{ paddingTop: 20, fontSize: 40, marginHorizontal: 30 }}>{props.userData?.nome}</Text>
        <Text style={{ paddingTop: 15, fontSize: 20, color: "#808080" }}>{props.userData?.email}</Text>
        <Text style={{ paddingTop: 10, fontSize: 15, color: "#808080" }}>{props.userData?.cpf}</Text>
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
          <TouchableOpacity style={styles.button} onPress={async () => await handleUpdateFlow()}>
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
