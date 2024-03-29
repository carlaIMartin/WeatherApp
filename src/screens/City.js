import React from "react";
import { View, Text, SafeAreaView, StyleSheet, FlatList, StatusBar, Image, ImageBackground } from "react-native";
import IconText from "../components/IconText";

const City = () => {
        const {
                container, 
                imageLayout, 
                cityName, 
                countryName, 
                cityText, 
                populationText, 
                populationWrapper, 
                riseSetWrapper, 
                riseSetText, 
                rowLayout
        } = styles;
    return (
        <SafeAreaView style={container}>
                <ImageBackground source={require('../../assets/city.jpg')} style={imageLayout} >
                <Text style={[cityName, cityText]}>London</Text>
                <Text style={[countryName, cityText]}>UK</Text>

                <View style={[populationWrapper, rowLayout]}> 
                    <IconText 
                        iconName={'user'} 
                        iconColor={'white'} 
                        bodyText={'8000'} 
                        bodyTextStyles={populationText} 
                    />
                </View>

                <View style={[riseSetWrapper, rowLayout]}>
                        <IconText
                                iconName={'sunrise'}
                                iconColor={'white'}
                                bodyText={'10:46:58 AM'}
                                bodyTextStyles={riseSetText}
                        />
                        <IconText 
                                iconName={'sunset'}
                                iconColor={'white'} bodyText={'17:46:58 PM'} 
                                bodyTextStyles={riseSetText} 
                        />
                   
                </View>

                </ImageBackground>
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
        container: {
                flex: 1,
                marginTop: StatusBar.currentHeight || 0
        },
        imageLayout: {
                flex: 1
        },
        cityName: {
                fontSize: 50
        },
        countryName: {
                fontSize: 30
        },
        cityText: {
                color: 'white',
                fontWeight: 'bold',
                justifyContent: 'center',
                alignSelf: 'center'
        },
        populationWrapper: {
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 30
        },
        populationText: {
                fontSize: 25,
                marginLeft: 7.5,
                color: 'lavender',
                fontWeight: 'bold'
        },
        riseSetWrapper: {
                justifyContent: 'space-around',
                marginTop: 30
        },
        riseSetText: {
                fontSize: 25,
                color: 'white',
                fontWeight: 'bold'
        },
        rowLayout: {
                flexDirection: 'row',
                alignItems: 'center'
        }

})

export default City;