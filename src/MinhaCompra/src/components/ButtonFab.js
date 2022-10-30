import React from "react";
import { StyleSheet, View } from "react-native";
import { Entypo } from '@expo/vector-icons'

export default function ButtonFab({ name, size, isNewProduct }) {
	return (
		<View style={isNewProduct ? styles.newProductContainer : styles.defaultContainer}>
			<Entypo name={name} size={size} color={'#FFFFFF'} />
		</View>
	)
}

const styles = StyleSheet.create({
	defaultContainer: {
		width: 60,
		height: 60,
		borderRadius: 30,
		backgroundColor: '#FA4A0C',
		alignItems: "center",
		justifyContent: "center",
		marginBottom: 20
	},
	newProductContainer: {
		width: 50,
		height: 50,
		borderRadius: 30,
		backgroundColor: '#FA4A0C',
		alignItems: "center",
		justifyContent: "center",
		left: 10
	}
});
