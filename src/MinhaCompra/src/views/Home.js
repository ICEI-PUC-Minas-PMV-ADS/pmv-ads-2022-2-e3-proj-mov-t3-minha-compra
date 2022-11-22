import React, { useState, useEffect } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SearchBar from "../components/SearchBar";
import Lists from "../components/Lists";
import {
  consultaListaDeCompra,
  criaListaDeCompra,
  limparListaDeCompra,
  excluiTodosOsUsuarios,
} from "../services/DataService";
import ButtonFab from "../components/ButtonFab";

const Tap = createBottomTabNavigator();

export default function Home({ navigation }) {
  const [defaultLists, setDefaultLists] = useState();
  const [filteredList, setFilteredList] = useState();

  useEffect(() => {
    consultaListaDeCompra()
      .then((dados) => {
        console.log(dados);
        setDefaultLists(dados);
      })
      .catch((e) => console.log(`error: ${e}`));
  }, []);

  const searchFilterFunction = async (text) => {
    if (text) {
      const newList = defaultLists.filter((item) => {
        const listItem = item.nome_lista.toLowerCase();
        const inputText = text.toLowerCase();

        return listItem.indexOf(inputText) > -1;
      });
      setFilteredList(newList);
    }
  };

  const handleOnChangeText = (event) => {
    if (event) {
      searchFilterFunction(event);
    } else {
      setFilteredList(defaultLists);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Minhas Listas</Text>

      <SearchBar
        onChangeText={(event) => {
          handleOnChangeText(event);
        }}
      />

      <ScrollView contentContainerStyle={{ width: 320 }}>
        {!defaultLists || !defaultLists[0] ? (
          <View style={styles.noListsView}>
            <Text style={{ fontSize: 13 }}>
              Clique no ícone "<Text style={styles.plusIcon}>+</Text>" abaixo
              para criar uma lista{" "}
              <Text style={{ color: "#FA4A0C", fontWeight: "900" }}>;)</Text>
            </Text>
          </View>
        ) : (
          (filteredList ? filteredList : defaultLists).map((list) => {
            return <Lists key={list.id} name={list.nome_lista} />;
          })
        )}
      </ScrollView>
      <TouchableOpacity
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          justifyContent: "flex-end",
          alignItems: "flex-end",
        }}
        onPress={() => navigation.navigate("Lista")}
      >
        <ButtonFab name="plus" size={30} isNewProduct={false} />
      </TouchableOpacity>
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
});
