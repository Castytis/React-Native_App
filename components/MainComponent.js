import React, { Component } from 'react';
import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';
import { View, Platform } from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import { DISHES } from '../shared/dishes';
import Home from './HomeComponent';
import { Icon } from 'react-native-elements';
import ContactUs from './ContactComponent';
import AboutUs from './AboutComponent';

const AboutUsNavigator = createStackNavigator({
  Home: { screen: AboutUs},
}, {
  navigationOptions: {
      headerStyle: {
          backgroundColor: '#512DA8'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
          color: '#fff'
      }
  }
});

const ContactUsNavigator = createStackNavigator({
  Home: { screen: ContactUs},
}, {
  navigationOptions: {
      headerStyle: {
          backgroundColor: '#512DA8'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
          color: '#fff'
      }
  }
});



const MenuNavigator = createStackNavigator({
  Menu: { screen: Menu },
  Dishdetail: { screen: Dishdetail }
},
{
  initialRouteName: 'Menu',
  navigationOptions: {
      headerStyle: {
          backgroundColor: "#512DA8"
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
          color: "#fff"            
      }
  }
}
);

const HomeNavigator = createStackNavigator({
  Home: { screen: Home }
}, {
  navigationOptions: ({ navigation }) => ({
    headerStyle: {
        backgroundColor: "#512DA8"
    },
    headerTitleStyle: {
        color: "#fff"            
    },
    headerTintColor: "#fff"  
  })
});

const MainNavigator = createDrawerNavigator({
  Home: 
    { screen: HomeNavigator,
      navigationOptions: {
        title: 'Home',
        drawerLabel: 'Home'
      }
    },
  AboutUs: {
      screen: AboutUsNavigator,
      navigationOptions: {
          title: 'About Us',
          drawerLabel: 'About Us'
      }
  },
  Menu: 
    { screen: MenuNavigator,
      navigationOptions: {
        title: 'Menu',
        drawerLabel: 'Menu'
      }, 
    },
    ContactUs: {
      screen: ContactUsNavigator,
      navigationOptions: {
          title: 'Contact Us',
          drawerLabel: 'Contact Us'
      }
  }
}, {
drawerBackgroundColor: '#D1C4E9'
});



class Main extends Component {
 
  render() {
    return (
      <View style={{flex:1, paddintTop: Platform.OS === 'ios' ? 0 : 1}}>
            <MainNavigator />
      </View>
    );
  }
}
  
export default Main;