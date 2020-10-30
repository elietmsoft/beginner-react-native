import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from '../components/Home';
import About from '../components/About';

const screens = {
  Home:{
      screen:Home,
      navigationOptions:{
          title:'Accueil'
      }
  },
  About:{
      screen:About,
      navigationOptions:{
        title:'Détail'
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