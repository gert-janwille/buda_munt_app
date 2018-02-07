import React, {Component} from 'react'
import {inject, observer} from 'mobx-react/native'

import {View, Text, TouchableHighlight, Image, StatusBar} from 'react-native';

import homeStyle from '../styles/homeStyle';
import formStyle from '../styles/formStyle';

const HomeScreen = ({navigation, user}) => {

  const handleOpenScan = e => navigation.navigate("Scan")

  return (
    <View style={homeStyle.container}>
      <StatusBar barStyle="light-content"/>

      <View style={homeStyle.qrContainer}>

        <View style={homeStyle.qrContainerInner}>
          <Text style={homeStyle.qrContainerText}>Hou deze QR-code voor een ander toestel</Text>
          <Image style={homeStyle.qr} source={{uri: user.qr}}/>
        </View>

        <View style={homeStyle.openScanContainer}>
          <TouchableHighlight onPress={handleOpenScan} style={homeStyle.openButton}>
            <Image style={homeStyle.camButton} source={require('../assets/img/scan.png')} />
          </TouchableHighlight>
        </View>

      </View>

      <Image style={homeStyle.image} source={require('../assets/img/main-buda-community.png')}/>

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
