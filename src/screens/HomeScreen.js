import React, {Component} from 'react'
import {inject, observer} from 'mobx-react/native'
// import Camera from 'react-native-camera'

import {View, Text, StatusBar, Button} from 'react-native';
import homeStyle from '../styles/homeStyle'

const HomeScreen = ({name, setname, logout}) => {
  const handleQRScan = data => {
    setname(data)
  }

  const handleGoToRegister = () => logout()

  return (
    <View style={homeStyle.container}>
      <StatusBar barStyle="dark-content"/>

      <Text>{name}</Text>
      <Text>Home Screen</Text>
      <Button onPress={handleGoToRegister} title='remove'>REMOVE</Button>
    </View>
  );
}

export default inject(
  ({store}) => ({
    name: store.name,
    setname: store.setname,
    logout: store.logout
  })
)(
  observer(HomeScreen)
);
