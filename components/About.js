import React from 'react';
import { View,Text, StyleSheet,ActivityIndicator} from 'react-native';

export default function About({navigation}){

    return(
        <View style={style.view}>
            <Text style={style.title}>A propos de moi</Text>
            <Text>{navigation.getParam('title')}</Text>
            <Text>{navigation.getParam('body')}</Text>
            <Text>{navigation.getParam('rating')}</Text>
        </View>
    )
    
}

const style = StyleSheet.create({
    view:{
        margin:20
    },
    title:{
        fontSize:22,
        marginBottom:20
    }
})