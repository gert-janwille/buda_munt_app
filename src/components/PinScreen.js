import React, {Component} from 'react'
import {inject, observer} from 'mobx-react/native'
import {View, TextInput, Text, Button, Keyboard} from 'react-native';
import {isEmpty} from 'lodash'

import homeStyle from '../styles/homeStyle';
import mainStyle from '../styles/mainStyle';

const PinScreen = ({navigation, changeInput, data, user, getCoins, errors, setAskPin}) => {
  const handleClosePin = e => setAskPin(false, navigation);
  const handleChangePin = e => changeInput('pin', e);
  const handleGetcoins = () => {
    Keyboard.dismiss()
    getCoins(navigation)
  };

  return (
      <View style={[homeStyle.pinOverlay]}>
        <TextInput
          returnKeyType='send'
          secureTextEntry={true}
          autoFocus={true}
          maxLength={4}
          onChangeText={handleChangePin}
          value={data.pin}
          style={homeStyle.pin}
          keyboardType='numeric'
          keyboardAppearance='dark'></TextInput>

        <Text style={mainStyle.error}>{!isEmpty(errors) ? errors.hash : ''}</Text>
        <Text style={mainStyle.error}>{!isEmpty(errors) ? errors.pin : ''}</Text>

        <Button onPress={handleGetcoins} title={`Betalen aan ${user.username}`}></Button>
        <Button onPress={handleClosePin} title='Sluit'></Button>
      </View>
  );
}

export default inject(
  ({store}) => ({
    user: store.user,
    data: store.data,
    changeInput: store.changeInput,
    getCoins: store.getCoins,
    errors: store.errors,
    setAskPin: store.setAskPin
  })
)(
  observer(PinScreen)
);
