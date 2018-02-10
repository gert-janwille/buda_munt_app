import React, {Component} from 'react'
import {inject, observer} from 'mobx-react/native'

import {View, Text, TouchableHighlight, Image, StatusBar} from 'react-native';

import CamButton from '../components/CamButton';

import homeStyle from '../styles/homeStyle';
import formStyle from '../styles/formStyle';

const HomeScreen = ({navigation, user, isConnected}) => (
  <View style={homeStyle.container}>
    <StatusBar barStyle="light-content"/>

    <View style={homeStyle.qrContainer}>

      <View style={homeStyle.qrContainerInner}>
        <Text style={homeStyle.qrContainerText}>Hou deze QR-code voor een ander toestel</Text>
        <Image style={homeStyle.qr} source={{uri: user.qr}}/>
      </View>

      {isConnected ? <CamButton navigation={navigation}/> : null}

    </View>

    <Image style={homeStyle.image} source={require('../assets/img/main-buda-community.png')}/>

  </View>
);


export default inject(
  ({store}) => ({
    user: store.user,
    isConnected: store.isConnected
  })
)(
  observer(HomeScreen)
);
