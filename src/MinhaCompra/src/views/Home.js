import React, { useState, useEffect, useReducer } from 'react';
import { StyleSheet, Text, View, Entypo } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import SearchBar from '../components/SearchBar';
import Lists from '../components/Lists';
import { consultaListaDeCompra, criaListaDeCompra } from "../services/DataService";
import ButtonFab from '../components/ButtonFab';

const Tap = createBottomTabNavigator()

export default function Home() {
  const [lists, setLists] = useState()

  useEffect(() => {

    const mockedLists = [
    { id: 0, id_produto: 234, valor_total: 50.00, cpf: 43205987654, nome_lista: 'Março' },
    { id: 1, id_produto: 2343, valor_total: 55.00, cpf: 12305987654, nome_lista: 'Abril' },
    { id: 2, id_produto: 23232, valor_total: 60.00, cpf: 22305987654, nome_lista: 'Maio' },
    ];

    consultaListaDeCompra()
      .then(dados => {
        setLists(dados)
      })
      .catch((e) => e);
  }, []);

  return (
    <View style={styles.container}>

      <Text style={styles.titleText}>Minhas Listas</Text>

      <SearchBar />

      {lists && (lists[0] === false ?

        <View style={styles.noListsView}>
          <Text style={{ fontSize: 13 }}>Clique no ícone "<Text style={styles.plusIcon}>+</Text>" abaixo para criar uma lista <Text style={{ color: '#FA4A0C', fontWeight: '900' }}>;)</Text></Text>
        </View>

        :

        lists.map((list) => {
          return (
            <Lists key={list.id} name={list.nome_lista} />
          )
        })

      )
      }

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 20
  },
  titleText: {
    fontSize: 15,
    marginTop: 20,
    marginBottom: 27
  },
  noListsView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    marginTop: '80%'
  },
  plusIcon: {
    color: '#FA4A0C',
    fontSize: 20,
    fontWeight: 'bold'
  }
});
