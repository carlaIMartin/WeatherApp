import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import {Feather} from '@expo/vector-icons';


const ListItem = (props) => {
    const {dt_txt, temp_max, temp_min, weather} = props;
    const {item, date, temp} = styles;
    return (
        <View style={styles.item}> 
            <Feather name="sun" size={50} color="white" />
            <Text style={date}>{dt_txt}</Text>
            <Text style={temp}>{temp_max}</Text>
            <Text style={temp}>{temp_min}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: 'fuchsia',
        padding: 30,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderWidth: 5,
    },
    temp: {
        color: 'white',
        fontSize: 15
    },
    date:{
        color: 'white',
        fontSize: 15
    },
})    

export default ListItem;