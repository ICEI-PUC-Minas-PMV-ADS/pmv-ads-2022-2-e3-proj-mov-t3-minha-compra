import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Mail from "../assets/image/arrow.svg";

export default function Produto({ navigation }) {
  const [name, setName] = useState("");
  const [cat, setCat] = useState("");
  const [qtd, setQTD] = useState("0");
  const [preco, setPreco] = useState("");
  const [totalValue, setTotal] = useState(currencyFormat(0));

  const qtdChange = (ope) => {
    let currentValue = parseInt(qtd);

    if (
      (ope === "sum" && currentValue >= 0) ||
      (ope === "sub" && currentValue > 0)
    ) {
      ope === "sum" && currentValue >= 0 ? currentValue++ : currentValue--;

      setQTD(currentValue.toString());
    }
  };

  function currencyFormat(num) {
    console.log("currency: ", num);
    return "R$" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }

  function setCurrentPrice(num) {
    console.log("num: ", num);
    console.log("preco: ", preco);

    let currency = currencyFormat(parseInt(num));
    setPreco(currency);

    // setPreco(test.toString());
    // let current = parseInt(num) + parseInt(preco);
    // setPreco(current.toString());
    // console.log("valor_formatado", valor_formatado);
    // console.log("valor_normalizado", valor_formatado.replace(/[^0-9]/g, ""));
  }

  return (
    <View style={styles.container}>
      <Text style={{ marginTop: 50, marginBottom: 50 }}>Produto</Text>

      <TouchableOpacity
        style={styles.comboBox}
        onPress={() => navigation.navigate("MCategoria")}
      >
        <View
          style={{
            height: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Text>Selecione a categoria</Text>
          <Mail />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.comboBox}
        onPress={() => navigation.navigate("MProduto")}
      >
        <View
          style={{
            height: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Text>Selecione o produto</Text>
          <Mail />
        </View>
      </TouchableOpacity>

      <View style={{ width: "100%", marginBottom: 20 }}>
        <Text style={{ fontSize: 15, paddingHorizontal: 20, marginBottom: 10 }}>
          Preço
        </Text>
        <TextInput
          style={{ ...styles.input, width: "100%" }}
          onChangeText={(text) => setCurrentPrice(text)}
          value={preco}
          placeholder={currencyFormat(0)}
          keyboardType="numeric"
          maxLength={40}
        />
      </View>

      <View style={{ width: "100%" }}>
        <Text style={{ fontSize: 15, paddingHorizontal: 20, marginBottom: 10 }}>
          Quantidade
        </Text>
        <View style={{ flexDirection: "row", marginBottom: 20 }}>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setQTD(text.replace(/[^0-9]/g, ""))}
            value={qtd}
            keyboardType="numeric"
            maxLength={40}
          />
          <View
            style={{
              flexDirection: "row",
              width: "35%",
              justifyContent: "space-between",
              paddingHorizontal: 18,
            }}
          >
            <TouchableOpacity
              style={styles.button}
              onPress={() => qtdChange("sum")}
            >
              <Text style={{ fontSize: 30, color: "#FFFFFF" }}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => qtdChange("sub")}
              style={{ ...styles.button, backgroundColor: "#000000" }}
            >
              <Text
                style={{ fontSize: 30, color: "#FFFFFF", fontWeight: "bold" }}
              >
                -
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
    backgroundColor: "#F5F5F8",
    paddingHorizontal: 20,
  },
  comboBox: {
    backgroundColor: "#FFFFFF",
    width: "100%",
    height: 40,
    borderRadius: 30,
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  input: {
    height: 40,
    width: "65%",
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    paddingHorizontal: 20,
    fontSize: 18,
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#FA4A0C",
    width: 40,
    height: 40,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
