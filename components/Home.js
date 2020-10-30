import React,{useState} from 'react';
import { View,Text, StyleSheet,FlatList,TouchableOpacity,Button} from 'react-native';

export default function Home({navigation}){
    const [about,setAbout] = useState([
        {title:'Zelda,Breath of Fresh Air',rating:5,body:'lorem ipsum',key:'1'},
        {title:'Gotta,Breath of Fresh Air',rating:4,body:'lorem ipsum',key:'2'},
        {title:'Not So "Final" of Fantasy',rating:3,body:'lorem ipsum',key:'3'}
    ])
   /*
    const pressHandler = ()=>{
        navigation.navigate('About');

    }
    */
    return(
       <View style={style.view}>
           <FlatList
             data={about}
             renderItem={({item})=>(
                 <TouchableOpacity onPress={()=>navigation.navigate('About',item)}>
                     <Text style={style.title}>{item.title}</Text>
                 </TouchableOpacity>
             )}
           />
       </View>
    )
}

const style = StyleSheet.create({
    view:{
        margin:20
    },
    title:{
        fontSize:22
    }
})