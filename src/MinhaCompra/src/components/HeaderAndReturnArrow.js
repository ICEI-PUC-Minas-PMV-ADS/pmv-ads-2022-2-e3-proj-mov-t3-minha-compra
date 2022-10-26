import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";

export default function HeaderAndReturnArrow({props}) {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => props.navigate("Home")}
            >
                <Text style={styles.loginText}>{'<'}</Text>
            </TouchableOpacity>

            <Text style={styles.titleText}>Criar Nova Lista</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 10,
        marginTop: 17
    },
    loginText: {
        fontSize: 20,
        fontWeight: '400',
        right: 80,
        color: 'gray'
    }
});
