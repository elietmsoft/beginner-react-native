import React,{useState} from 'react';
import { View,Text, StyleSheet,FlatList,TouchableOpacity,Modal, TouchableWithoutFeedback, Keyboard} from 'react-native';
import {globalStyles} from '../styles/global';
import { MaterialIcons } from '@expo/vector-icons';
import Card from '../shared/card';
import ReviewForm from './ReviewForm';

export default function Home({navigation}){
    const [modalOpen,setModalOpen]=useState(false);
    const [about,setAbout] = useState([
        {title:'Zelda,Breath of Fresh Air',rating:5,body:'lorem ipsum',key:'1'},
        {title:'Gotta,Breath of Fresh Air',rating:4,body:'lorem ipsum',key:'2'},
        {title:'Not So "Final" of Fantasy',rating:3,body:'lorem ipsum',key:'3'}
    ])
    const addReview = (review)=> {
        review.key = Math.random().toString();
        setAbout((currentReviews)=>{
            return [review,...currentReviews]
        });
        setModalOpen(false);
    }

    return(
       <View style={globalStyles.container}>
           <Modal visible={modalOpen} animationType='slide'>
              <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.modalContent}>
                    <MaterialIcons 
                    name='close'
                    size={24} 
                    style={{...styles.modalToggle, ...styles.modalClose}} 
                    onPress={() => setModalOpen(false)} 
                    />
                    <ReviewForm addReview={addReview} />
                </View>
               </TouchableWithoutFeedback>
           </Modal>
           <MaterialIcons
                name='add'
                size={24}
                style={styles.modalToggle}
                onPress={()=> setModalOpen(true)}/>
           <FlatList
             data={about}
             renderItem={({item})=>(
                 <TouchableOpacity onPress={()=>navigation.navigate('Review',item)}>
                     <Card>
                       <Text style={globalStyles.title}>{item.title}</Text>
                     </Card>
                 </TouchableOpacity>
             )}
           />
       </View>
    )
}

const styles = StyleSheet.create({
    modalToggle:{
        marginBottom:10,
        borderWidth:1,
        borderColor:'#f2f2f2',
        padding:10,
        borderRadius:10,
        alignSelf:'center',
    },
    modalClose:{
        marginTop:20,
        marginBottom:0,
    },
    modalContent:{
        flex:1,
    }
})