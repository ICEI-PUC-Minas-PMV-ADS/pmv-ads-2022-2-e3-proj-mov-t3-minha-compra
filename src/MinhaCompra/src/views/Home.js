import React, { useState, useEffect, useReducer } from 'react';
import { StyleSheet, Text, View, Entypo } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import SearchBar from '../components/SearchBar';
import Lists from '../components/Lists';
import ButtonFab from '../components/ButtonFab';

const Tap = createBottomTabNavigator()

export default function Home() {
  const [user, setUser] = ([])

  return (
    <View style={styles.container}>

      <Text style={styles.titleText}>Minhas Listas</Text>

      <SearchBar />

      {!user ?

        <View style={styles.noListsView}>
          <Text style={{fontSize: 13}}>Clique no ícone "<Text style={styles.plusIcon}>+</Text>" abaixo para criar uma lista <Text style={{color: '#FA4A0C', fontWeight: '900'}}>;)</Text></Text>
        </View>

        :

        <Lists name='Lista 1' />

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
