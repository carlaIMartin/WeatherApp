import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, FlatList, StatusBar, Image, ImageBackground } from 'react-native';
import {Feather} from '@expo/vector-icons';
import ListItem from '../components/ListItem';



const UpcomingWeather = ({ weatherData }) => {
    const renderItem = ({ item })  => (
        <ListItem condition = {item.weather[0].main} temp_max = {item.main.temp_max} temp_min = {item.main.temp_min} dt_txt = {item.dt_txt} />
    )
    const {container, image} = styles;
    return (
        <SafeAreaView style={container}>
            
            <ImageBackground source={require('../../assets/clouds.jpg')} style={image} >
            <FlatList
                data= {weatherData}
                renderItem={renderItem}
            />
            </ImageBackground>
        </SafeAreaView>
    );
    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            marginTop: StatusBar.currentHeight || 0,
            backgroundColor: 'peachpuff'
        },
       
        image: {
           flex:1
        }
    }); 

export default UpcomingWeather;