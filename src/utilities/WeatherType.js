import React from "react"
import { View, Text, SafeAreaView, StyleSheet, FlatList, StatusBar, Image, ImageBackground } from "react-native";
import IconText from "../components/IconText";
import RowText from "../components/RowText";
import { Feather } from '@expo/vector-icons';



export const weatherType = {
    Thunderstorm: {
        icon:'zap',
        message: 'It could get noisy',
        backgroundColor: '#000000'
    },
    Drizzle: {
        icon: 'cloud-rain',
        message: 'It might rain a little',
        backgroundColor: '#36454f'
    },
    Rain: {
        icon: 'cloud-rain',
        message: 'It might rain',
        backgroundColor: '#36454f'
    },
    Snow: {
        icon: 'cloud-snow',
        message: 'It might snow',
        backgroundColor: '#ffffff'
    },
    Clear: {
        icon: 'sun',
        message: 'It\'s sunny',
        backgroundColor: '#f9d71c'
    },
    Clouds: {
        icon: 'cloud',
        message: 'It\'s cloudy',
        backgroundColor: '#36454f'
    },
    Haze: {
        icon: 'smog',
        message: 'It\'s hazy',
        backgroundColor: '#36454f'
    },
    Mist: { 
        icon: 'smog',
        message: 'It\'s misty',
        backgroundColor: '#36454f'
    },
    }
