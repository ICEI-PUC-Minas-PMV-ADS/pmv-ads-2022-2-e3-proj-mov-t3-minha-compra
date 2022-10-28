import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import ProfileInput from "../components/ProfileInput";
import { consultaUsuario ,inserirUsuario } from '../services/DataService';


//var db = openDatabase({ name: 'minha_compra.db' }); 


export default function Profile() {
  const [nome, setNome] = useState("Maria");

  // const RegisterUser = ({ navigation }) => {
  //   let [nome, setNome] = useState('Maria');
  //   let [cpf, setCpf] = useState('12345678910');
  //   let [email, setEmail] = useState('maria@email.com');
  //   let [senha, setSenha] = useState('123456');
   
  //   let register_user = () => {
  //     console.log(nome, cpf, email, senha);  

  // const DADOS = [
  //   {
  //     nome:'Maria',
  //     cpf: 12345678910,
  //     email:'maria@gmail.com',
  //     senha:'123456',
  //   }
  // ]

  return (
    <View style={styles.container}>
      <View style={{alignItems: "center"}}>
      <View
          style={{
            backgroundColor:'#FA4A0C',            
            width:100,
            height:100,
            justifyContent:'center',
            alignItems:'center',
            borderRadius:60,
          }}
        >
          <Text style={{color: "#FFFFFF", fontSize: 50}}>{nome[0]}</Text>
      </View>
         <Text style={{paddingTop: 20, fontSize: 50}}>Maria Silva</Text>
         <Text style={{paddingTop: 20, fontSize: 15}}>mariasilva@gmail.com</Text>
      </View>
      <ProfileInput/>
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
