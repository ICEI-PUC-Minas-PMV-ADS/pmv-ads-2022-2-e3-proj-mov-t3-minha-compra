import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import {
  criaProdutoCadastro,
  criaCategoria,
  criaListaDeProduto,
  criaListaDeCompra,
  consultaProdutoCadastro,
  consultaCategoria,
  consultaListaDeProduto,
  consultaListaDeCompra,
} from "../services/DataService";

import Database from "../services/DbServices";

export default function SplashScreen() {
  function criaPD() {
    criaProdutoCadastro({
      nome: "maça",
      categoria: "fruta",
    })
      .then((dados) => {
        console.log(dados);
      })
      .catch((e) => console.log("error:", e));
  }

  function criaCA() {
    criaCategoria({
      nome: "laticínios",
    })
      .then((dados) => {
        console.log(dados);
      })
      .catch((e) => console.log("error:", e));
  }

  function criaLP() {
    criaListaDeProduto({
      id_produto: 1,
      preco: 2.99,
      quantidade: 3,
    })
      .then((dados) => {
        console.log(dados);
      })
      .catch((e) => console.log("error:", e));
  }

  function criaLC() {
    criaListaDeCompra({
      id_produto: 2,
      valor_total: 10.0,
      cpf: 40028922,
    })
      .then((dados) => {
        console.log(dados);
      })
      .catch((e) => console.log("error:", e));
  }

  function consultaPD() {
    consultaProdutoCadastro()
      .then((dados) => {
        console.log(dados);
      })
      .catch((e) => console.log("error:", e));
  }

  function consultaCA() {
    consultaCategoria()
      .then((dados) => {
        console.log(dados);
      })
      .catch((e) => console.log("error:", e));
  }

  function consultaLP() {
    consultaListaDeProduto()
      .then((dados) => {
        console.log(dados);
      })
      .catch((e) => console.log("error:", e));
  }

  function consultaLC() {
    consultaListaDeCompra()
      .then((dados) => {
        console.log(dados);
      })
      .catch((e) => console.log("error:", e));
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={async () => criaPD()}>
        <Text style={{ color: "#FFFFFF" }}>criar produto cadastro</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={async () => criaCA()}>
        <Text style={{ color: "#FFFFFF" }}>criar categoria</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={async () => criaLP()}>
        <Text style={{ color: "#FFFFFF" }}>criar lista de produto</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={async () => criaLC()}>
        <Text style={{ color: "#FFFFFF" }}>criar lista de compra</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={async () => consultaPD()}
      >
        <Text style={{ color: "#FFFFFF" }}>listar produto cadastro</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={async () => consultaCA()}
      >
        <Text style={{ color: "#FFFFFF" }}>listar categoria</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={async () => consultaLP()}
      >
        <Text style={{ color: "#FFFFFF" }}>listar lista de produto</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={async () => consultaLC()}
      >
        <Text style={{ color: "#FFFFFF" }}>lista lista de compra</Text>
      </TouchableOpacity>
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
  button: {
    backgroundColor: "#FA4A0C",
    width: 200,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    marginBottom: 30,
  },
});
