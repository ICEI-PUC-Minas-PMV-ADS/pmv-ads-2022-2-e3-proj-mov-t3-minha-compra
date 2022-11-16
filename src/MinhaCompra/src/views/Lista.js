import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
  FlatList,
} from "react-native";
import NewProductAtList from "../components/NewProductAtList";
import { consultaListaDeProduto } from "../services/DataService";
import ButtonFab from "../components/ButtonFab";

export default function Lista({ navigation }) {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    //chamada no banco
    // const products = [
    //   { id: 0, nome: "banana", quantidade: 2, preco: "2,90" },
    //   { id: 1, nome: "leite", quantidade: 1, preco: "4,90" },
    //   { id: 2, nome: "sabonete", quantidade: 5, preco: "1,90" },
    // ];
    consultaListaDeProduto().then((products) => setProductList(products));
  }, []);

  const Item = ({ product }) => (
    <NewProductAtList
      // key={1}
      product={product?.nome}
      quantity={product?.quantidade}
      value={product?.preco}
    />
  );

  const renderItem = ({ item }) => (
    <View>
      <Item product={item} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={{ marginTop: 40, fontSize: 20, marginBottom: 20 }}>
        Lista de Produto
      </Text>
      <FlatList
        style={{ width: "100%" }}
        data={productList}
        renderItem={renderItem}
      />

      <TouchableOpacity
        style={{
          // position: "absolute",
          width: "100%",
          // height: "100%",
          justifyContent: "flex-end",
          alignItems: "flex-end",
          marginTop: 10,
        }}
        onPress={() => navigation.navigate("Produto")}
      >
        <ButtonFab name="plus" size={30} isNewProduct={false} />
      </TouchableOpacity>

      <View
        style={{
          borderTopColor: "#000000",
          borderTopWidth: 1,
          width: "100%",
          marginBottom: 30,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: 20, marginTop: 20 }}>TOTAL: R$ {"0,00"}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginHorizontal: 20,
  },
  titleText: {
    fontSize: 15,
    marginTop: 20,
    marginBottom: 12,
  },
  noProductsView: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 20,
    marginTop: "80%",
  },
});
