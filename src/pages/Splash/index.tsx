import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { ILLogo } from '../../assets';

export default function index() {
    return (
        <View style={styles.container}>
            <ILLogo />
            <Text style={styles.title}>Welcome to react native</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
        marginTop: 20
    }
});
