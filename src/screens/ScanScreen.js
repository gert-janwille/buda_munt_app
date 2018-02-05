import React, {Component} from 'react'
import {inject, observer} from 'mobx-react/native'

import {View, Text, TouchableHighlight, Image, StatusBar, TextInput} from 'react-native';
import homeStyle from '../styles/homeStyle'

const HomeScreen = ({user, data, changeInput}) => {
  console.log(user);

  const handleChangeAmount = e =>changeInput('amount', e);

  return (
    <View style={homeStyle.container}>
      <StatusBar barStyle="light-content"/>

      <View style={homeStyle.amountContainer}>
        <View style={homeStyle.openScanContainer}>
          <Text style={homeStyle.amountText}>Geef een bedrag in</Text>

          <View style={homeStyle.inputContainer}>
            <TextInput onChangeText={handleChangeAmount} value={data.amount} style={homeStyle.amount} keyboardType='numeric' keyboardAppearance='dark'></TextInput>
            <Text style={homeStyle.bda}> BDA</Text>
          </View>

        </View>

        <View style={homeStyle.qrContainerInner}>
          <Image style={homeStyle.qr} source={{uri: user.qr}}/>
        </View>

        </View>


    </View>
  );
}

export default inject(
  ({store}) => ({
    user: store.user,
    data: store.data,
    changeInput: store.changeInput
  })
)(
  observer(HomeScreen)
);
