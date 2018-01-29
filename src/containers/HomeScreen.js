import React, {Component} from 'react'
import {inject, observer} from 'mobx-react/native'
import Camera from 'react-native-camera'

import {View, Text, StatusBar} from 'react-native';
import homeStyle from '../styles/homeStyle'

const HomeScreen = ({name, setname}) => {
  const handleQRScan = data => {
    setname(data)
  }

  return (
    <View style={homeStyle.container}>
      <StatusBar barStyle="dark-content"/>

      <Camera
        style={[homeStyle.camera]}
        onBarCodeRead={handleQRScan}
        type={'back'} >
      </Camera>

      <Text>{name}</Text>
      <Text>Home Screen</Text>

    </View>
  );
}

export default inject(
  ({store}) => ({
    name: store.name,
    setname: store.setname
  })
)(
  observer(HomeScreen)
);
