import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";

export default function HeaderAndReturnArrow({ props, title }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => props.navigation.navigate("Home")}
            >
                <Text style={styles.loginText}>{'<'}</Text>
            </TouchableOpacity>

            <Text style={styles.titleText}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginBottom: 10,
        marginTop: 17
    },
    loginText: {
        fontSize: 20,
        fontWeight: '400',
        right: 80,
        color: 'gray'
    },
    titleText: {
        fontSize: 15,
        right: 1
    }
});
