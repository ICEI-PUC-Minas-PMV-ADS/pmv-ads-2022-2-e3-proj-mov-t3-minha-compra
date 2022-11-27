import React, { useState, useContext } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import ButtonFab from "./ButtonFab";
import Trash from "../assets/image/trash.svg";
import { deletaProduto } from "../services/DataService";
import AppContext from "../views/AppContext";

export default function NewProductAtList({
  product,
  quantity,
  value,
  id,
  navigation,
}) {
  const [newProductList, setNewProductList] = useState(product);
  const context = useContext(AppContext);
  const deleteProduct = async () => {
    try {
      await deletaProduto(id);
      context.changeRefresh(!context.refresh);
    } catch (error) {
      console.log("deleteProduct.error: ", error);
    }
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
          width: "85%",
        }}
        onPress={() => console.log(context)}
      >
        <Text style={styles.listTitle}>{product}</Text>

        <View style={styles.quantityAndValue}>
          <Text style={{ fontSize: 12 }}>Quantidade</Text>
          <Text style={styles.quantityAndValueNumber}>{quantity}</Text>
        </View>

        <View style={styles.quantityAndValue}>
          <Text style={{ fontSize: 12 }}>Valor</Text>
          <Text style={styles.quantityAndValueNumber}>
            R${parseInt(value).toFixed(2)}
          </Text>
        </View>
      </View>
      <View style={{ width: "15%" }}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity onPress={deleteProduct}>
            <Image
              source={require("../assets/image/delete.png")}
              style={styles.icon}
            ></Image>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 8,
    marginTop: 15,
    paddingVertical: 7,
    borderRadius: 50,
    width: "100%",
    shadowOffset: { width: 10, height: 10 },
    shadowColor: "black",
    shadowOpacity: 1,
    elevation: 9,
  },
  listTitle: {
    fontSize: 16,
  },
  quantityAndValue: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    marginRight: 40,
  },
  quantityAndValueNumber: {
    fontSize: 12,
    color: "#FA4A0C",
  },
  icon: {
    width: 30,
    height: 30,
  },
});
