import React from 'react';
import { View,Text, StyleSheet,ActivityIndicator} from 'react-native';

export default function Review({navigation}){

    return(
        <View style={style.view}>
            <Text style={style.title}>Détails</Text>
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