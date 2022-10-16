import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Entypo } from '@expo/vector-icons'

export default function ButtonFab({size, color}) {
  return (
		<View style={styles.container}>
			<Entypo name="plus" size={size} color={'#FFFFFF'} />
		</View>
	)
}

const styles = StyleSheet.create({
  container: {
		width: 60,
		height: 60,
		borderRadius: 30,
		backgroundColor: '#FA4A0C',
		alignItems: "center",
		justifyContent: "center",
		marginBottom: 20
  }
});
