import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, StyleSheet, FlatList, StatusBar, Image, ImageBackground } from "react-native";
import { Button } from "react-native";

const Counter = () => {
    const [count, setCount] = useState(0)
    const { container, title } = styles;
    const [newCount, setNewCount] = useState(0)

    useEffect(() => {
        console.log(`Count changed`)
        return () => {
            console.log(`useefeect cleanup`)
        }
    }, [count])
    return (
        <View style={container}>
            <Text style={title}>{`count: ${count}`}</Text>
            <Button
                color={'red'}
                title={'Increase'}
                onPress={() => {
                    setCount(count + 1)
                }} />
            <Button
                color={'blue'}
                title={'Decrease'}
                onPress={() => {
                    setCount(count - 1)
                }} />

            <Button
                color={'red'}
                title={'Increase'}
                onPress={() => {
                    setNewCount(count + 1)
                }} />
            <Button
                color={'blue'}
                title={'Decrease'}
                onPress={() => {
                    setNewCount(count - 1)
                }} />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'orange',
    },
    title: {
        alignSelf: 'center',
        fontSize: 25,
        marginTop: 25
    }
})

export default Counter;