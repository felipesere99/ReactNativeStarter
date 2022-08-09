import React from 'react';
import { ViewBase, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = function() {
    const friends = [
        { name: 'Friend #1', age: 80},
        { name: 'Friend #2', age: 70},
        { name: 'Friend #3', age: 60},
        { name: 'Friend #4', age: 50},
        { name: 'Friend #5', age: 40},
        { name: 'Friend #6', age: 30},
        { name: 'Friend #7', age: 20},
        { name: 'Friend #8', age: 10},
    ];
    return (
    <FlatList 
    keyExtractor={(friend) => friend.name }
    data={friends} 
    renderItem={function({ item }) {
        return <Text style={styles.textStyle}>{item.name} - Age {item.age} </Text>
    }}
    />
    )};

const styles=StyleSheet.create({
    textStyle:{
       marginVertical: 20,
    }
});

export default ListScreen;