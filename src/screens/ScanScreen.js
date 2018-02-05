import React, {Component} from 'react'
import {inject, observer} from 'mobx-react/native'

import {View, Text, TouchableHighlight, Image, StatusBar} from 'react-native';
import homeStyle from '../styles/homeStyle'

const HomeScreen = ({user}) => {
  console.log(user);

  const handleOpenScan = e => {
    console.log('open scan');
  }
  return (
    <View style={homeStyle.container}>
      <StatusBar barStyle="light-content"/>


    </View>
  );
}

export default inject(
  ({store}) => ({
    user: store.user
  })
)(
  observer(HomeScreen)
);
