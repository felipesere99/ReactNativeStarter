import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = function() {
    const name = <Text>Felipe</Text>;
    return(
        <View>
        <Text style={styles.textStyle}>Getting started with React Native!</Text>
        <Text style={styles.subHeaderStyle}>My name is {name}</Text>
        </View>
    )};

const styles = StyleSheet.create({
    textStyle: {
        fontSize:45
    },
    subHeaderStyle: {
        fontSize:25
    },
});

export default ComponentsScreen;