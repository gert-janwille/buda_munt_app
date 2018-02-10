import React, {Component} from 'react'
import {View, Image, TouchableHighlight} from 'react-native';

import homeStyle from '../styles/homeStyle';

const CamButton = ({navigation}) => {
  const handleOpenScan = e => navigation.navigate("Scan");
  
  return(
    <View style={homeStyle.openScanContainer}>
      <TouchableHighlight onPress={handleOpenScan} style={homeStyle.openButton}>
        <Image style={homeStyle.camButton} source={require('../assets/img/scan.png')} />
      </TouchableHighlight>
    </View>
  );
}

export default CamButton
