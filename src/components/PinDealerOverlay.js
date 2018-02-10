import React, {Component} from 'react'
import {inject, observer} from 'mobx-react/native'
import {isEmpty} from 'lodash';

import {View, Text, Button, TouchableHighlight, Image, StatusBar} from 'react-native';

import InputButton from '../components/InputButton';

import homeStyle from '../styles/homeStyle';
import mainStyle from '../styles/mainStyle';

const DealerHome = ({navigation, pinCode, setPinCode, errors, closeDeal}) => {

  const handleButtonPressed = e => setPinCode(e, navigation)
  const handleCloseDeal = e => closeDeal()

  const inputButtons = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ['C', 0, 'pay']
  ];

  const renderInputButtons = () => {
    let views = [];
    inputButtons.map((row, rId) => {
      let inputRow = [];
      row.map((key, kId) => inputRow.push(<InputButton onPress={handleButtonPressed} value={key} key={`${rId}-${kId}`} />));
      views.push(<View style={homeStyle.inputRow} key={"row-" + rId}>{inputRow}</View>)
    })
    return views;
  }

  const renderSecret = () => {
    let scode = '';
    for (var i = 0; i < pinCode.length; i++) scode += '•';
    return scode;
  }

  return (
    <View style={homeStyle.overlayPin}>

    <View style={homeStyle.pinContainer}>
      <View style={homeStyle.touchPad}>

        <View style={homeStyle.screenPad}>
          <Text style={homeStyle.screenText}>{pinCode === '' ? 'Geef pincode in' : renderSecret()}</Text>
          <Text style={mainStyle.error}>{!isEmpty(errors) ? errors.dealerPin : ''}</Text>
        </View>

        {renderInputButtons()}
      </View>
      <Button onPress={handleCloseDeal} title='close'></Button>
    </View>

    </View>
  );
}

export default inject(
  ({store}) => ({
    pinCode: store.pinCode,
    setPinCode: store.setPinCode,
    errors: store.errors,
    closeDeal: store.closeDeal
  })
)(
  observer(DealerHome)
);
