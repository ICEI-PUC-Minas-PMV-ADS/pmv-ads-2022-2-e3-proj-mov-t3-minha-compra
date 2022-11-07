import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button } from 'react-native';
import NewProductAtList from '../components/NewProductAtList';
import ButtonFab from '../components/ButtonFab';
import HeaderAndReturnArrow from '../components/HeaderAndReturnArrow';

export default function Lista({ navigation }) {
  const [product, setProduct] = useState()

  useEffect(() => {
    //chamada no banco
    const products = [
      { id: 0, nome: "banana", quantidade: 2, preco: "2,90" },
      { id: 1, nome: "leite", quantidade: 1, preco: "4,90" },
      { id: 2, nome: "sabonete", quantidade: 5, preco: "1,90" },
    ];

    setProduct(products);
  }, []);

  return (
    <View style={styles.container}>
      <HeaderAndReturnArrow navigation={navigation} title='Criar nova lista' />

      {product && (product[0] === false ?

        <View style={styles.noProductsView}>
          <Text style={{ fontSize: 13 }}>Clique no ícone "<Text style={styles.plusIcon}>+</Text>" abaixo para criar uma lista <Text style={{ color: '#FA4A0C', fontWeight: '900' }}>;)</Text></Text>
        </View>

        :

        product.map((product) => {
          return (
            <NewProductAtList key={product.id} product={product.nome} quantity={product.quantidade} value={product.preco} />
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
    marginBottom: 12
  },
  noProductsView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    marginTop: '80%'
  }
});
