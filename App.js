import { StyleSheet, Text, View } from 'react-native';

import TelaLogin from './TelaLogin';
import Botao from './Button';


export default function App() {
  return (
    <View style={styles.container}>
      
      <TelaLogin/>      
      <Botao/>   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
