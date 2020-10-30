import React from 'react';
import { TextInput } from 'react-native';

export default class Home extends React.Component{

    constructor(props){
        super(props);
        this.state={
            city:'MontPellier'
        }
    }
    setCity(city){
        this.setState({city});
    }
    render(){
        return( 
            <TextInput 
              style={{height:40,borderColor:'gray',borderWidth:1}}
              onChangeText={(text)=>this.setCity({text})}
              value={this.state.city}
            />
        )
    }
}