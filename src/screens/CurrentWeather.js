import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import {Feather} from '@expo/vector-icons';
import RowText from '../components/RowText';
import { weatherType } from "../utilities/WeatherType";



const CurrentWeather = () => {
  const {container, temp, feels, highlow, highLowWrapper, bodyWrapper, description, message, wrapper} = styles;
  return (
    <SafeAreaView style={wrapper}>
    <View style={container}>
      <Feather name="sun" size={100} color="black" />
      <Text style={temp}>6</Text>
      <Text style={feels}>Feels like 5</Text>
      <RowText 
          messageOne={"High: 8"} 
          messageTwo={"Low: 8"} 
          containerStyles={highLowWrapper}
          messageOneStyles={highlow}
          messageTwoStyles = {highlow} 
      />
    </View>

    <RowText 
      messageOne={"Its sunny"} 
      messageTwo={weatherType['Thunderstorm'].message} 
      containerStyles={bodyWrapper} 
      messageOneStyles={description} 
      messageTwoStyles = {message} 
    />
 
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'pink'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  temp: {
    color: 'black',
    fontSize: 48
  },
  feels: {
    color: 'black',
    fontSize: 30
  },
  highlow: {
    color: 'black',
    fontSize: 20
  },
  highLowWrapper: {
    flexDirection: 'row'
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40
  }, 
  description: {
    fontSize: 80
  },
  message: {
    fontSize: 50
  }
})

export default CurrentWeather