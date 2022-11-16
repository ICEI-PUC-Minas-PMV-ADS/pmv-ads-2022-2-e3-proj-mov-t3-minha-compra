import React, { useState, useEffect } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";

import SearchBar from "../components/SearchBar";
import { defaultData } from "../assets/data/default_data";

export default function ModalProduto({ route, navigation }) {
  const catName = route?.params?.categoria;

  const [data, setData] = useState([]);
  const [filteredList, setFilteredList] = useState();

  useEffect(() => {
    const products = defaultData.filter((product) => product.tipo === catName);
    setData(products[0].itens);
    console.log("produtos: ", products[0].itens);
  }, []);

  const searchFilterFunction = async (text) => {
    if (text) {
      const newList = data.filter((item) => {
        const listItem = item.tipo;
        const inputText = text.toLowerCase();

        return listItem.indexOf(inputText) > -1;
      });
      setData(newList);
    }
  };

  const handleOnChangeText = (event) => {
    if (event) {
      searchFilterFunction(event);
    } else {
      setData(defaultData);
    }
  };

  const Item = ({ title }) => (
    <TouchableOpacity style={styles.item} onPress={() => select(title)}>
      <Text>{capitalize(title)}</Text>
    </TouchableOpacity>
  );

  const renderItem = ({ item }) => (
    <View style={{ borderBottomColor: "#00000", borderBottomWidth: 1 }}>
      {console.log("renderItem:", item)}
      <Item title={item} />
    </View>
  );

  const capitalize = (str) => {
    if (typeof str !== "string") {
      return "";
    }
    return str.charAt(0).toUpperCase() + str.substr(1);
  };

  const select = (value) => {
    navigation.navigate("Produto", {
      produto: capitalize(value),
      categoria: capitalize(catName),
    });
  };

  return (
    <View style={styles.container}>
      <Text
        style={{
          marginTop: 60,
          marginBottom: 30,
          textAlign: "center",
          fontSize: 25,
        }}
      >
        Tipo
      </Text>

      <SearchBar
        onChangeText={(event) => {
          handleOnChangeText(event);
        }}
      />

      <FlatList style={{ width: "100%" }} data={data} renderItem={renderItem} />
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
    marginBottom: 27,
  },
  noListsView: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 20,
    marginTop: "80%",
  },
  plusIcon: {
    color: "#FA4A0C",
    fontSize: 20,
    fontWeight: "bold",
  },
  item: {
    width: "100%",
    height: 35,
    alignItems: "center",
    justifyContent: "center",
  },
});
