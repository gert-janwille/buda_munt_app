import React, {Component} from 'react'
import {inject, observer} from 'mobx-react/native'

import {View, Text, TouchableHighlight, Image, StatusBar} from 'react-native';
import homeStyle from '../styles/homeStyle'

const HomeScreen = ({navigation, user}) => {
  console.log(user);

  const handleOpenScan = e => {
    console.log('open scan');
    navigation.navigate("Scan")
  }
  return (
    <View style={homeStyle.container}>
      <StatusBar barStyle="light-content"/>

      <View style={homeStyle.qrContainer}>
        <View style={homeStyle.openScanContainer}>
          <TouchableHighlight onPress={handleOpenScan} style={homeStyle.openButton}>
            <Text style={homeStyle.openButtonText} underlayColor='white' activeOpacity='1'>Scan zelf een QR-Code</Text>
          </TouchableHighlight>
        </View>

        <View style={homeStyle.qrContainerInner}>
          <Image style={homeStyle.qr} source={{uri: user.qr}}/>
          <Text style={homeStyle.qrContainerText}>Hou deze QR-code voor een ander toestel</Text>
        </View>

        </View>


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
