import React, {Component} from 'react'
import {inject, observer} from 'mobx-react/native'
import {isEmpty} from 'lodash';

import {View, Text, TouchableHighlight, Image, StatusBar} from 'react-native';

import UserHome from '../components/UserHome';
import DealerHome from '../components/DealerHome';
import CamButton from '../components/CamButton';

import homeStyle from '../styles/homeStyle';
import formStyle from '../styles/formStyle';

const HomeScreen = ({navigation, user, isConnected}) => {
  const {dealer} = user;
  return (
    <View style={homeStyle.container}>
      {dealer ?  <DealerHome navigation={navigation} /> : <UserHome navigation={navigation} />}
    </View>
  );
}


export default inject(
  ({store}) => ({
    user: store.user,
    isConnected: store.isConnected
  })
)(
  observer(HomeScreen)
);
