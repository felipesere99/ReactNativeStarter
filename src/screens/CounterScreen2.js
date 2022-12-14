import React, {useState} from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const CounterScreen2= () => {
    const [counter, setCounter] = useState(0);

    return(
    <View>
        <Button title="Increase" onPress={() => {
            //Dont do this
            //counter++
            setCounter(counter +1);
            }}/>
        <Button title="Decrease" onPress={() => {
            setCounter(counter -1);
        }}/>
        <Text>Current count: {counter}</Text>
    </View>
    );
};

const styles = StyleSheet.create({});

export default CounterScreen2;