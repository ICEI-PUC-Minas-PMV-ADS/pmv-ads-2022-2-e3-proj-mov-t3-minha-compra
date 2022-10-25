import React from "react";
import { StyleSheet, View, TextInput, Image, Text } from "react-native";

export default function Lists({name}) {
    return (
          <View style={styles.container}>

            <Text style={styles.listTitle}>{name}</Text>
            
          </View>
      )
  }

  const styles = StyleSheet.create({
    container: {
          backgroundColor: '#FA4A0C',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginVertical: 8,
          marginTop: 15,
          paddingVertical: 18,
          borderRadius: 50,
          width: '100%'
    },
    listTitle: {
        color: '#FFF',
        fontSize: 18
    }
  });