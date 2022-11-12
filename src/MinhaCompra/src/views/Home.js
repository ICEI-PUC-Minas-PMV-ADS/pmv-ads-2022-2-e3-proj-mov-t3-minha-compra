import React, { useState, useEffect } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SearchBar from "../components/SearchBar";
import Lists from "../components/Lists";
import {
  consultaListaDeCompra,
  criaListaDeCompra,
  limparListaDeCompra,
  excluiTodosOsUsuarios,
} from "../services/DataService";

const Tap = createBottomTabNavigator();

export default function Home() {
  const [defaultLists, setDefaultLists] = useState();
  const [filteredList, setFilteredList] = useState();

  useEffect(() => {
    // excluiTodosOsUsuarios().then(() => console.log("excluiu"));
    // const mockedLists = [
    //   { id: 0, id_produto: 234, valor_total: 50.00, cpf: 43205987654, nome_lista: 'Março' },
    //   { id: 1, id_produto: 2343, valor_total: 55.00, cpf: 12305987654, nome_lista: 'Abril' },
    //   { id: 2, id_produto: 23232, valor_total: 60.00, cpf: 22305987654, nome_lista: 'Maio' },
    // ];

    // criaListaDeCompra({
    //   id_produto: 2,
    //   valor_total: 10.0,
    //   cpf: 40028922,
    //   nome_lista: "Junho"
    // })
    //   .then((dados) => {
    //     console.log(dados);
    //   })
    //   .catch((e) => console.log("error:", e));

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
