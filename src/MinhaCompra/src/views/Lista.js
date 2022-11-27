import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { useNavigation, useIsFocused } from "@react-navigation/native";
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
import {
  consultaListaDeProduto,
  atualizaLista,
  consultaLista,
} from "../services/DataService";
import ButtonFab from "../components/ButtonFab";
import AppContext from "./AppContext";

export default function Lista({ navigation, route }) {
  const listData = route?.params?.data;

  const [productList, setProductList] = useState([]);
  const [total, setTotal] = useState("0");
  const [refresh, setRefresh] = useState(false);

  const isFocused = useIsFocused();

  const changeTotalPrice = () => {
    let totalValue = parseFloat(total);
    productList.forEach((product) => {
      totalValue += parseFloat(product.preco);
    });
    return totalValue.toString();
  };

  useEffect(() => {
    console.log(">>>>>> listdata", listData);

    consultaLista().then((listas) => {
      let currentList = listas.find((lista) => lista.id === listData.id);
      let produtos = JSON.parse(currentList.produtos);
      // currentList.produtos = produtos;
      // console.log("produtos", currentList);
      setProductList(produtos);
    });

    // consultaListaDeProduto().then((products) => {
    //   setProductList(products);
    // });

    changeTotalPrice();
  }, [isFocused, refresh]);

  const Item = ({ product }) => (
    <NewProductAtList
      key={product.id}
      id={product.id}
      product={product.nome}
      quantity={product.quantidade}
      value={product.preco}
    />
  );

  const renderItem = ({ item }) => (
    <View>
      <Item product={item} />
    </View>
  );

  return (
    <AppContext.Provider
      value={{
        changeRefresh: (status) => setRefresh(status),
        refresh: refresh,
      }}
    >
      <View style={styles.container}>
        <FlatList
          style={{ width: "100%", marginTop: 10 }}
          data={productList}
          renderItem={renderItem}
        />

        <View
          style={{
            borderTopColor: "#000000",
            borderTopWidth: 1,
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 20, marginTop: 33 }}>
            TOTAL: R$ {parseFloat(changeTotalPrice()).toFixed(2)}
          </Text>

          <TouchableOpacity
            onPress={() => navigation.navigate("Navigation")}
            style={{
              backgroundColor: "#FA4A0C",
              height: 50,
              width: "25%",
              borderRadius: 10,
              marginTop: 16,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontWeight: "bold", color: "#FFFFFF" }}>SALVAR</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              justifyContent: "flex-end",
              alignItems: "flex-end",
              marginTop: 10,
            }}
            onPress={() =>
              navigation.navigate("Produto", {
                data: listData,
              })
            }
          >
            <ButtonFab name="plus" size={30} isNewProduct={false} />
          </TouchableOpacity>
        </View>
      </View>
    </AppContext.Provider>
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
