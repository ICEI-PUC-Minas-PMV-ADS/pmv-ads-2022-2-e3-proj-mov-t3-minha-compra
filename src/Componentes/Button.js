import { StyleSheet} from 'react-native';
import { Button } from 'react-native-paper';

const Botao = () => (
  <Button style={estilos.botao}
   mode="contained">
    Entrar
  </Button>
);

const estilos = StyleSheet.create({
  botao:{
    backgroundColor: '#FA4A0C',    
    marginBottom: 170,
    width: 210,
    height: 45,
    borderRadius: 30,
  }
})

export default Botao;