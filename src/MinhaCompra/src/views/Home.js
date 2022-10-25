import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import SearchBar from '../components/SearchBar';
import Lists from '../components/Lists';

import Profile from './Profile'
import Statistic from './Statistic';
import Lista from './Lista';

const Tap = createBottomTabNavigator()

export default function Home() {
  return (
    <View style={styles.container}>

      <Text style={styles.titleText}>Minhas Listas</Text>

      <SearchBar />

      <Lists name='Lista 1' />

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
  lists: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
