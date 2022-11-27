import React, { useState, useEffect } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  Pressable,
  TextInput,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SearchBar from "../components/SearchBar";
import Lists from "../components/Lists";
import {
  consultaListaDeCompra,
  criaLista,
  consultaLista,
  excluiTodasAsListas,
} from "../services/DataService";
import ButtonFab from "../components/ButtonFab";
import { async } from "@firebase/util";

const Tap = createBottomTabNavigator();

const defaultProducts = [];

export default function Home({ navigation }) {
  const [defaultLists, setDefaultLists] = useState();
  const [filteredList, setFilteredList] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const [listName, setListName] = useState("");

  useEffect(() => {
    // excluiTodasAsListas()
    //   .then((data) => console.log(data))
    //   .catch((e) => console.log(e));

    const unsubscribe = navigation.addListener("focus", () => {
      consultaLista()
        .then((dados) => {
          console.log("Listas: ", dados);
          setDefaultLists(dados);
        })
        .catch((e) => console.log(`error: ${e}`));
    });

    return unsubscribe;
  }, [navigation]);

  const submit = async () => {
    await createList();
    await submitList();
  };

  const createList = async () => {
    try {
      let nome = listName;
      let produtos = JSON.stringify(defaultProducts);
      let total = "0,00";

      await criaLista({
        nome: nome,
        produtos: produtos,
        total: total,
      });
    } catch (error) {
      console.log("createList.error: ", error);
    }
  };

  const submitList = async () => {
    try {
      let result = await consultaLista();
      console.log("result :", result);
      let currentList = result[result.length - 1];

      navigation.navigate("Lista", {
        data: currentList,
      });
    } catch (error) {
      console.log("submitList.error: ", error);
    }
  };

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
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Nome da lista</Text>
            <TextInput
              style={styles.input}
              onChangeText={setListName}
              value={listName}
              maxLength={20}
            />

            <View
              style={{
                width: "100%",
                height: 58,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                onPress={async () => await submit()}
                style={{
                  backgroundColor: "#FA4A0C",
                  width: 100,
                  height: 40,
                  borderRadius: 10,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ color: "#FFFFFF" }}>Criar</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => setModalVisible(!modalVisible)}
                style={{
                  backgroundColor: "#FA4A0C",
                  width: 100,
                  height: 40,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 10,
                }}
              >
                <Text style={{ color: "#FFFFFF" }}>Cancelar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

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
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Lista", {
                    data: list,
                  });
                }}
              >
                <Lists key={list.id} name={list.nome} />
              </TouchableOpacity>
            );
          })
        )}
      </ScrollView>
      <TouchableOpacity
        style={{
          position: "absolute",
          width: 50,
          height: 50,
          alignItems: "center",
          justifyContent: "center",
          right: 30,
          bottom: 30,
        }}
        onPress={() => setModalVisible(!modalVisible)}
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    width: "70%",
    height: 200,
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 25,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 10,
    fontSize: 22,
    textAlign: "center",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  input: {
    height: 40,
    width: "100%",
    margin: 12,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#bfbfbf",
    padding: 10,
  },
});
