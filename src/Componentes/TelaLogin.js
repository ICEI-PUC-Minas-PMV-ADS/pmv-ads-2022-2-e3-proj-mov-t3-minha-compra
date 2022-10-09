import * as React from 'react';
import { Button } from 'react-native-paper';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  View,
  Text,
  TextInput,
  Image
} from 'react-native';

const width = Dimensions.get('window').width;

const LoginScreen = ({ navigation }) => {
  return (
    <ScrollView 
      style={estilos.background}
      showVerticalScrollIndicator={false}>
  
      <Image
        source={require('./assets/logo.png')} 
        style={estilos.imagem}>
      </Image>
      
      <Text style={estilos.entrar}>Entrar</Text>
      <Text style={estilos.cadastrar}>Cadastrar</Text>

      <View style={estilos.menuInput}>
        <TextInput   
        style={estilos.input}
        placeholder="Email"
        keyboardType= 'email-address'/>
        <TextInput   
        style={estilos.input}
        placeholder="Senha"
        keyboardType= 'email-address'/>  
      </View>

      <View style={estilos.viewSenha}>
        <Text style={{color: '#FA4A0C', fontSize: 12}}>Esqueci a senha</Text>       
      </View>

    </ScrollView>
  );
};

const estilos = StyleSheet.create({
  background: {
    width: '100%',
  },

  entrar:{
    color:'white',
    position: 'absolute',
    marginTop: 305,
    marginLeft: 70
  },

  cadastrar:{
    color:'white',
    position: 'absolute',
    marginTop: 305,    
    marginLeft: 230
  },

  imagem: {
    width: '100%',
    height: (700 / 740) * width,
    borderWidth: 45,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },

  menuInput:{
    marginTop: 50,
    marginLeft: 50
  },

  viewSenha:{
    marginTop: 10,
    marginLeft: 80
  },

  input:{
    width: '85%',
    marginBottom: 30,
    borderBottomWidth: 1,
    borderBottomStyle: 'solid',
    borderBottomColor: '#d3d3d3'
  }
});

export default LoginScreen;

