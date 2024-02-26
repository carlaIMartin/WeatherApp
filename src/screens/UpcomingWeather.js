import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, FlatList, StatusBar, Image, ImageBackground } from 'react-native';
import {Feather} from '@expo/vector-icons';
import ListItem from '../components/ListItem';

const DATA = [
    {
      dt_txt: "2023-02-18 12:00:00",
      main: {
        temp_max: 8.55,
        temp_min: 7.55
      },
      weather: [
        {
          main: 'Clear'
        }
      ]
    },
    {
      dt_txt: "2023-02-18 15:00:00",
      main: {
        temp_max: 8.55,
        temp_min: 7.55
      },
      weather: [
        {
          main: 'Clouds'
        }
      ]
    },
    {
      dt_txt: "2023-02-18 18:00:00",
      main: {
        temp_max: 8.55,
        temp_min: 7.55
      },
      weather: [
        {
          main: 'Rain'
        }
      ]
    }
  ]

const UpcomingWeather = () => {
    const renderItem = ({ item })  => (
        <ListItem condition = {item.weather[0].main} temp_max = {item.main.temp_max} temp_min = {item.main.temp_min} dt_txt = {item.dt_txt} />
    )
    const {container, image} = styles;
    return (
        <SafeAreaView style={container}>
            <Text>Upcoming Weather</Text>
            <ImageBackground source={require('../../assets/clouds.jpg')} style={image} >
            <FlatList
                data= {DATA}
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