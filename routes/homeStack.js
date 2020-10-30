import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from '../components/Home';
import Review from '../components/Review';

const screens = {
  Home:{
      screen:Home,
      navigationOptions:{
          title:'Accueil'
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
export default createAppContainer(HomeStack);