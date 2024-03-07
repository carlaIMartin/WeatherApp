import React, { useState, useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import CurrentWeather from './src/screens/CurrentWeather'
import UpcomingWeather from './src/screens/UpcomingWeather'
import City from './src/screens/City'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons';
import Tabs from './src/components/Tabs'
import { ActivityIndicator } from 'react-native'
import * as Location from 'expo-location'
import {REACT_APP_WEATHER_API_KEY} from '@env'
import { useGetWeather } from './src/hooks/useGetWeather'

// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}


const Tab = createBottomTabNavigator()

const App = () => {

  const [ loading, error, weather ] = useGetWeather()

  console.log(loading, error, weather)

  if(weather && weather.list) {
    return (
      <NavigationContainer>
        <Tabs weather={weather} />
      </NavigationContainer>
    )
  }


  if (loading) {
    return (
      <View style={styles.container} >
        <ActivityIndicator size={"large"} color={"blue"} />
      </View>
    )
  }

  


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
})


export default App;