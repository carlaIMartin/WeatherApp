import React from "react";
import { View, Text, SafeAreaView, StyleSheet, FlatList, StatusBar, Image, ImageBackground } from "react-native";
import IconText from "../components/IconText";

const RowText = (props) => {
    const {messageOneStyles, messageTwoStyles, containerStyles, messageOne, messageTwo} = props;
    
    return (
        <View style={containerStyles}>
            <Text style={messageOneStyles}>{messageOne}</Text>
            <Text style={messageTwoStyles}>{messageTwo}</Text>
        </View>
    )
}

export default RowText;