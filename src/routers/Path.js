import React from 'react';
import {View, Text, Image} from 'react-native';
import {TabNavigator, StackNavigator} from 'react-navigation';

import HomeScreen from '../screens/HomeScreen'
import Login from '../screens/login/Login'

import mainStyle from '../styles/mainStyle'

const ProfileScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Profile Screen</Text>
  </View>
);

const otherScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Other Screen</Text>
  </View>
);

export const AppScreens = TabNavigator(
  {
    Profiel: {
      screen: ProfileScreen,
      navigationOptions: ({navigation}) => ({
        title: "Profiel",
        tabBarIcon: ({tintColor}) => (
          <Image source={require('../assets/img/user.png')} style={[{width: 25,height: 25}, {tintColor: tintColor}]} />
        ),
      })
    },

    Home: {
      screen: HomeScreen,
      navigationOptions: ({navigation}) => ({
        title: "",
        showLabel: false,
        tabBarIcon: ({tintColor}) => (
          <Image source={require('../assets/img/pay.png')} style={[mainStyle.tabButton, {tintColor: tintColor}]} />
        ),
      })
    },

    Lijst: {
      screen: otherScreen,
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
