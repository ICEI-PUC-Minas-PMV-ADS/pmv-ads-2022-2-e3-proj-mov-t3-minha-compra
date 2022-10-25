import React from "react";
import { StyleSheet, View, TextInput, Image } from "react-native";

export default function SearchBar() {
    return (
          <View style={styles.container}>
            <Image
              source={require("../assets/image/search-icon.png")}
              style={styles.searchIcon}
            >
            </Image>

            <TextInput style={{width: '85%', marginLeft: 3}} />
            
          </View>
      )
  }

  const styles = StyleSheet.create({
    container: {
          backgroundColor: '#FFF',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginVertical: 8,
          paddingVertical: 3,
          paddingHorizontal: 5,
          borderRadius: 50,
          width: '88%'
    },
    searchIcon: {
      left: -3
    }
  });