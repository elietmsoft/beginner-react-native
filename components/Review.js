import React from 'react';
import { View,Text, StyleSheet,ActivityIndicator} from 'react-native';
import Card from '../shared/card';

export default function Review({navigation}){

    return(
        <View style={style.view}>   
            <Text style={style.title}>Détails</Text>
            <Card>
                <Text>{navigation.getParam('title')}</Text>
                <Text>{navigation.getParam('body')}</Text>
                <Text>{navigation.getParam('rating')}</Text>
            </Card>
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