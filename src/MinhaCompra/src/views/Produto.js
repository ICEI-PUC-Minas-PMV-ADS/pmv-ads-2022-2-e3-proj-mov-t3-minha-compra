import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import Mail from "../assets/image/arrow.svg";
import { criaListaDeProduto } from "../services/DataService";

export default function Produto({ route, navigation }) {
  const catName = route?.params?.categoria;
  const prodName = route?.params?.produto;

  const [qtd, setQTD] = useState("");
  const [preco, setPreco] = useState("");
  const [totalValue, setTotal] = useState(currencyFormat(0));

  useEffect(() => {
    calcTotal();
  }, [preco, qtd]);

  const qtdChange = (ope, btnQtd) => {
    switch (ope) {
      case "sum":
        let sumValue = qtd === "" ? 0 : parseInt(qtd);
        console.log("qtd.before: ", qtd);
        if (sumValue >= 0) {
          sumValue++;
          console.log("qtd.after: ", sumValue.toString());
          setQTD(sumValue.toString());
          bntAction(sumValue);
        }
        break;
      case "sub":
        let subValue = parseInt(qtd);
        if (subValue > 0) {
          subValue--;
          console.log(subValue);
          setQTD(subValue.toString());
          bntAction(subValue);
        }
        break;
    }
  };

  const cadastraProduto = async () => {
    const valid = prodName && catName && preco != "" && parseInt(qtd) > 0;

    if (valid) {
      try {
        await criaListaDeProduto({
          nome: prodName,
          categoria: catName,
          preco: totalValue.toString(),
          quantidade: qtd.toString(),
        });
        Alert.alert("Produto cadastrado com sucesso!!!");
        console.log("produto salvo com sucesso no banco local...");
      } catch (error) {
        Alert.alert("Falha ao cadastrar produto :(");
        console.log("cadastraProduto.error: ", error);
      }
    }
  };

  const bntAction = (curretQTD) => {
    console.log("teste.qtd: ", curretQTD);
    let parsedTotal = preco.replace(/[^0-9+,]/g, "").replace(",", ".");

    console.log("parse.valor", parsedTotal);

    if (curretQTD > 0) {
      let calc = parseFloat(parsedTotal).toFixed(2) * curretQTD;
      setTotal(calc);
    } else {
      console.log("é menor");
    }
  };

  const calcTotal = () => {
    console.log("preco:", preco);
    let parsedTotal = preco.replace(/[^0-9+,]/g, "").replace(",", ".");

    if (qtd > 0) {
      let calc = parseFloat(parsedTotal).toFixed(2) * qtd;
      setTotal(calc);
    } else {
      console.log("é meno4r", qtd);
    }
  };

  function currencyFormat(num) {
    return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }

  return (
    <View style={styles.container}>
      <View style={{ width: "100%" }}>
        <Text
          style={{
            marginTop: 60,
            marginBottom: 30,
            textAlign: "center",
            fontSize: 25,
          }}
        >
          Produto
        </Text>

        <TouchableOpacity
          style={styles.comboBox}
          onPress={() => navigation.navigate("MCategoria")}
        >
          <View
            style={{
              height: "100%",
              justifyContent: catName ? "center" : "space-between",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <Text>{catName ? catName : "Selecione a categoria"}</Text>
            {!catName && <Mail />}
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.comboBox}
          onPress={() =>
            navigation.navigate("MProduto", {
              categoria: catName.toLowerCase(),
            })
          }
          disabled={!catName}
        >
          <View
            style={{
              height: "100%",
              justifyContent: prodName ? "center" : "space-between",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <Text>{prodName ? prodName : "Selecione o produto"}</Text>
            {!prodName && <Mail />}
          </View>
        </TouchableOpacity>

        <View style={{ width: "100%", marginBottom: 20 }}>
          <Text
            style={{ fontSize: 15, paddingHorizontal: 20, marginBottom: 10 }}
          >
            Preço
          </Text>
          <View
            style={{
              ...styles.input,
              width: "100%",
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ marginRight: 5 }}>R$</Text>
            <TextInput
              style={{ width: "100%" }}
              onChangeText={(text) => setPreco(text.replace(/[^0-9+,]/g, ""))}
              value={preco}
              placeholder={currencyFormat(0)}
              keyboardType="numeric"
              maxLength={40}
            />
          </View>
        </View>

        <View style={{ width: "100%" }}>
          <Text
            style={{ fontSize: 15, paddingHorizontal: 20, marginBottom: 10 }}
          >
            Quantidade
          </Text>
          <View style={{ flexDirection: "row", marginBottom: 20 }}>
            <TextInput
              style={styles.input}
              onChangeText={(text) =>
                setQTD(parseInt(text.replace(/[^0-9]/g, "")))
              }
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

      <View
        style={{
          borderTopColor: "#000000",
          borderTopWidth: 1,
          width: "100%",
          marginBottom: 30,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={{ marginTop: 10, fontSize: 20 }}>
          TOTAL: R${" "}
          {parseInt(preco) > 0 && qtd > 0 ? totalValue.toFixed(2) : "0,00"}
        </Text>

        <TouchableOpacity
          style={{
            backgroundColor: "#FA4A0C",
            width: 100,
            height: 40,
            marginTop: 10,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 20,
          }}
          onPress={() => cadastraProduto()}
        >
          <Text style={{ color: "#FFFFFF", fontSize: 15 }}>ADICIONAR</Text>
        </TouchableOpacity>
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
    justifyContent: "space-between",
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
