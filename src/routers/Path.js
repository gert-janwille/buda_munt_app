import React from 'react';
import {View, Text, Image} from 'react-native';
import {TabNavigator, StackNavigator} from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import ScanScreen from '../screens/ScanScreen';

import Login from '../screens/Login';
import Profile from '../screens/Profile';
import Transactions from '../screens/Transactions';

import List from '../screens/List';
import NewItem from '../screens/NewItem';
import Detail from '../screens/Detail'

import mainStyle from '../styles/mainStyle'


export const ScanScreens = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        title: "Home",
        header: null
      },
    },
    Scan: {
      screen: ScanScreen,
      navigationOptions: {
        title: "Scan",
        headerStyle: { backgroundColor: '#68AFA4' },
        headerTitleStyle: { color: 'white', fontFamily: 'Poppins' },
      }
    }
  }
);

export const ProfileScreens = StackNavigator(
  {
    Profiel: {
      screen: Profile,
      navigationOptions: {
        title: "Profiel",
        header: null
      },
    },
    Transactions: {
      screen: Transactions,
      navigationOptions: {
        title: "Transacties",
        headerStyle: { backgroundColor: '#68AFA4' },
        headerTitleStyle: { color: 'white', fontFamily: 'Poppins' },
      }
    }
  }
);

export const ListNavigation = StackNavigator(
  {
    List: {
      screen: List,
      navigationOptions: {
        title: "Lijst",
        header: null
      },
    },

    NewItem: {
      screen: NewItem,
      navigationOptions: {
        title: "Nieuwe Activiteit",
        headerStyle: { backgroundColor: '#68AFA4' },
        headerTitleStyle: { color: 'white', fontFamily: 'Poppins' },
      }
    },

    Detail: {
      screen: Detail,
      navigationOptions: ({navigation}) => {
        const {title} = navigation.state.params;
        return ({
          title: title,
          headerStyle: { backgroundColor: '#68AFA4' },
          headerTitleStyle: { color: 'white', fontFamily: 'Poppins' },
        })
      }
    }
  }
);

export const AppScreens = TabNavigator(
  {
    Profiel: {
      screen: ProfileScreens,
      navigationOptions: ({navigation}) => ({
        title: "Profiel",
        tabBarIcon: ({tintColor}) => (
          <Image source={require('../assets/img/user.png')} style={[{width: 25,height: 25}, {tintColor: tintColor}]} />
        ),
      })
    },

    Home: {
      screen: ScanScreens,
      navigationOptions: ({navigation}) => ({
        title: "",
        showLabel: false,
        tabBarIcon: ({tintColor}) => (
          <Image source={require('../assets/img/pay.png')} style={[mainStyle.tabButton, {tintColor: tintColor}]} />
        ),
      })
    },

    Lijst: {
      screen: ListNavigation,
      navigationOptions: ({navigation}) => ({
        title: "Lijst",
        tabBarIcon: ({tintColor}) => (
          <Image source={require('../assets/img/list.png')} style={[{width: 25,height: 25}, {tintColor: tintColor}]} />
        ),
      })
    }
  },
  {
    initialRouteName: 'Home',
    animationEnabled: true,
    swipeEnabled: true,
    tabBarOptions: {
      activeTintColor: '#6FB7AD',
      inactiveTintColor: 'lightgray',
    },
  }
);

export const AuthScreens = StackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      title: "Sign Up",
      header: null
    }
  }
});

export const createRootNavigator = (signedIn = false) => {
  return StackNavigator(
    {
      AppScreens: {
        screen: AppScreens,
        navigationOptions: {
          gesturesEnabled: false
        }
      },
      AuthScreens: {
        screen: AuthScreens,
        navigationOptions: {
          gesturesEnabled: false
        }
      }
    },
    {
      headerMode: "none",
      mode: "modal",
      initialRouteName: signedIn ? "AppScreens" : "AuthScreens"
    }
  );
};
