import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import {getData , createUser } from '../services/DataService'

import Database from '../services/DbServices';

export default function SplashScreen() {

	function gravar() {
		createUser({
			cpf: "40028922",
			nome: "alguem",
			email: "alguem@gmail.com",
			senha: "12345"
		}).then((dados) => {
			console.log(dados)
		}).catch(e => console.log("error:", e))
	}

	function ler() {
		getData().then((dados) => {
			console.log(dados)
		}).catch(e => console.log("error:", e))
	}

  return (
    <View style={styles.container}>
      <TouchableOpacity style={{backgroundColor: "red", marginBottom: 30}} onPress={() => gravar()}> 
				<Text>Gravar</Text>
			</TouchableOpacity>
			<TouchableOpacity style={{backgroundColor: "blue"}} onPress={() => ler()}> 
				<Text>Ler</Text>
			</TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF'
  }
});
