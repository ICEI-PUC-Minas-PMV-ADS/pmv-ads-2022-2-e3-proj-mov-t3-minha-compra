import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import SearchBar from '../components/SearchBar';

import Profile from './Profile'
import Statistic from './Statistic';
import Lista from './Lista';

const Tap = createBottomTabNavigator()

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Minhas Listas</Text>

      <SearchBar />

      <View style={styles.lists}>
        <Text>Listas de Compras</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  titleText: {
    fontSize: 15,
    marginVertical: 20
  },
  lists: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
