import React from "react";
import { StyleSheet, View, TextInput, Image } from "react-native";

export default function SearchBar() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/image/search-icon.png")}
        style={{ left: -3 }}
      >
      </Image>

      <TextInput style={{ width: '85%', marginLeft: 3 }} />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
    paddingVertical: 6,
    paddingHorizontal: 5,
    borderRadius: 50,
    width: '100%',
    shadowOffset: { width: 10, height: 10 },
    shadowColor: 'black',
    shadowOpacity: 1,
    elevation: 9,
  }
});