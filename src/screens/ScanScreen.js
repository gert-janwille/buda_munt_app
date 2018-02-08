import React, {Component} from 'react'
import {inject, observer} from 'mobx-react/native'
import Camera from 'react-native-camera'
import {isEmpty} from 'lodash'
import {View, Text, TouchableHighlight, Image, StatusBar, TextInput} from 'react-native';

import PinScreen from '../components/PinScreen'

import homeStyle from '../styles/homeStyle'
import mainStyle from '../styles/mainStyle'

const ScanScreen = ({navigation, data, changeInput, setHash, askPin, errors}) => {

  const handleQRScan = ({data}) => setHash(data);
  const handleChangeAmount = e =>changeInput('amount', e);

  return (
    <View style={homeStyle.scanContainer}>
      <StatusBar barStyle="light-content"/>

      <View style={homeStyle.amountContainer}>
        <View style={homeStyle.openScanContainer}>
          <Text style={homeStyle.amountText}>Geef een bedrag in</Text>

          <View style={homeStyle.inputContainer}>
            <TextInput onChangeText={handleChangeAmount} value={data.amount} style={homeStyle.amount} keyboardType='numeric' keyboardAppearance='dark'></TextInput>
            <Text style={homeStyle.bda}> BDA</Text>
          </View>
          <Text style={mainStyle.error}>{!isEmpty(errors) ? errors.amount : ''}</Text>

        </View>
      </View>

      <View style={homeStyle.qrContainerInner}>
        <Camera
          style={[homeStyle.camera]}
          onBarCodeRead={handleQRScan}
          type={'back'} >
        </Camera>
      </View>

        {askPin ? <PinScreen navigation={navigation}/> : null}

    </View>
  );
}

export default inject(
  ({store}) => ({
    data: store.data,
    changeInput: store.changeInput,
    setHash: store.setHash,
    askPin: store.askPin,
    errors: store.errors
  })
)(
  observer(ScanScreen)
);
