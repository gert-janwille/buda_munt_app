import React from 'react';
import { View, Text, Image } from 'react-native';
import { TabNavigator } from 'react-navigation';

import HomeScreen from '../containers/HomeScreen'

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

const Router = TabNavigator({
  Home: {
    screen: HomeScreen,

    navigationOptions: ({ navigation }) => ({
      title: "Home",
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('../assets/img/home.png')}
          style={[{width: 25,height: 25}, {tintColor: tintColor}]}
        />
      ),
    })

  },

  Profile: {
    screen: ProfileScreen
  },

  Other: {
    screen: otherScreen
  }
},
{
  tabBarPosition: 'bottom',
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: '#e91e63',
  }
});

export default Router;
