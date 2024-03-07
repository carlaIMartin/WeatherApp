import React, { useState, useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import { ActivityIndicator } from 'react-native'
import * as Location from 'expo-location'
import {REACT_APP_WEATHER_API_KEY} from '@env'



export const useGetWeather = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [weather, setWeather] = useState([])
    const [lat, setLat] = useState([])
    const [lon, setLon] = useState([])
    console.log(REACT_APP_WEATHER_API_KEY)
    
    const fetchWeatherData = async () => {
      try {
  
        const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${REACT_APP_WEATHER_API_KEY}`)
        const data = await res.json()
        setWeather(data)
        setLoading(false)
      } catch (error) {
        setError('Could not fetch weather. Please try again later')
      } finally{
        setLoading(false)
      }
  
  
    }
  
  
    if (loading) {
      return (
        <View style={styles.container} >
          <ActivityIndicator size={"large"} color={"blue"} />
        </View>
      )
    }
  
    useEffect(() => {
      ; (async () => {
        let { status } = await Location.requestForegroundPermissionsAsync()
  
        if (status !== 'granted') {
          setError('Permission to access location was denied')
          return
        }
  
        let location = await Location.getCurrentPositionAsync({})
        setLat(location.coords.latitude)
        setLon(location.coords.longitude)
  
        await fetchWeatherData()
  
      })()
    }, [lat, lon])

    return [loading, error, weather]
}