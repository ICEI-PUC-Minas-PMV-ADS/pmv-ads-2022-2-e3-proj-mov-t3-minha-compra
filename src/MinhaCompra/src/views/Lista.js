import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button } from 'react-native';
import NewProductAtList from '../components/NewProductAtList';
import ButtonFab from '../components/ButtonFab';
import HeaderAndReturnArrow from '../components/HeaderAndReturnArrow';

export default function Lista({navigation}) {

  return (
    <View style={styles.container}>

      <HeaderAndReturnArrow navigation={navigation} title='Criar nova lista' />

      <NewProductAtList product='Banana' quantity='2' value='4,00' />

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
    marginBottom: 12
  }
});
