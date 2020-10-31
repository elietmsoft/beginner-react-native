import {createStackNavigator} from 'react-navigation-stack';
import Home from '../components/Home';
import Review from '../components/Review';
import React from 'react';
import Header from '../shared/header';

const screens = {
  Home:{
      screen:Home,
      navigationOptions:({navigation})=>{
          return{
              headerTitle: ()=> <Header navigation={navigation} title="GameZone" />,
          }
      }
  },
  Review:{
      screen:Review,
      navigationOptions:{
        title:'Review'
    }
  }
}

const HomeStack = createStackNavigator(screens,{
    defaultNavigationOptions:{
        headerTintColor:'#fff',
        headerStyle:{
            backgroundColor:'#007ACC',
            height:60
      }
    }
});
export default HomeStack;