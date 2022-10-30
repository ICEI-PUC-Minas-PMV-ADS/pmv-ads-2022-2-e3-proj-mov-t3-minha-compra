import React from "react";
import { StyleSheet, View, Text } from "react-native";
import ButtonFab from "./ButtonFab";

export default function NewProductAtList({ product, quantity, value, size }) {
    return (
        <View style={styles.container}>

            <Text style={styles.listTitle}>{product}</Text>

            <View style={styles.quantityAndValue}>
                <Text style={{fontSize: 12}}>Quantidade</Text>
                <Text style={styles.quantityAndValueNumber}>{quantity}</Text>
            </View>

            <View style={styles.quantityAndValue}>
                <Text style={{fontSize: 12}}>Valor</Text>
                <Text style={styles.quantityAndValueNumber}>R${value}</Text>
            </View>

            <ButtonFab name='trash' size={size} isNewProduct={true} />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginVertical: 8,
        marginTop: 15,
        paddingVertical: 7,
        borderRadius: 50,
        width: '100%',
        shadowOffset: { width: 10, height: 10 },
        shadowColor: 'black',
        shadowOpacity: 1,
        elevation: 9,
    },
    listTitle: {
        fontSize: 18
    },
    quantityAndValue: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    quantityAndValueNumber: {
        fontSize: 12,
        color: '#FA4A0C'
    }
});