import React, {useState, useEffect}  from 'react'
import { View, StyleSheet } from 'react-native'
import CurrentWeather from './src/screens/CurrentWeather'
import UpcomingWeather from './src/screens/UpcomingWeather'
import City from './src/screens/City'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {Feather} from '@expo/vector-icons';
import Tabs from './src/components/Tabs'
import { ActivityIndicator } from 'react-native'
import * as Location from 'expo-location'


const Tab = createBottomTabNavigator()

const App = () => {
  const [loading, setLoading] = useState(false)
  const[location, setLocation] =useState(null)
  const[error, setError] = useState(null)
  
  if(loading){
    return (
      <View style={styles.container} >
        <ActivityIndicator size={"large"} color={"blue"} />
      </View>
    )
  }

  useEffect(() => {
    ;(async() => {
      let {status} =  await Location.requestForegroundPermissionsAsync()

      if (status !== 'granted'){
        setError('Permission to access location was denied')
        return
      }

      let location = await Location.getCurrentPositionAsync({})
      setLocation(location)

    })()
  }, [])

  if(location)
    console.log(location)

  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  )
}

const styles= StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
})


export default App;