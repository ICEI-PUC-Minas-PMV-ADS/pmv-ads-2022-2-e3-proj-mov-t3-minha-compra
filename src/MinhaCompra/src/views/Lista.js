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
import { consultaListaDeProduto } from "../services/DataService";
import ButtonFab from "../components/ButtonFab";
import AppContext from "./AppContext";

export default function Lista({ navigation }) {
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
    consultaListaDeProduto().then((products) => {
      setProductList(products);
    });
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
          <Text style={{ fontSize: 20, marginTop: 20 }}>
            TOTAL: R$ {parseFloat(changeTotalPrice()).toFixed(2)}
          </Text>

          <TouchableOpacity
            style={{
              justifyContent: "flex-end",
              alignItems: "flex-end",
              marginTop: 10,
            }}
            onPress={() => navigation.navigate("Produto")}
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
