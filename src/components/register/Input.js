import React, {Component} from 'react'
import {inject, observer} from 'mobx-react/native'
import {isEmpty} from 'lodash';

import {View, Text, Button, TextInput, TouchableWithoutFeedback, scrollView} from 'react-native';

import formStyle from '../../styles/formStyle'
import mainStyle from '../../styles/mainStyle'


const Input = ({name, value, changeInputRegister, secret=false, multiline=false, keyboardType='default', maxLength=288, errors, registrationData}) => {

  const handleChangeText = e => changeInputRegister(name, e)

  return (
    <View>
      <View style={formStyle.regiInput}>
        <Text style={formStyle.regiText}>{value}:</Text>
        <TextInput
          style={[formStyle.inputType, multiline ? {height: 100,} : {height: 35,}]}
          onChangeText={handleChangeText}
          secureTextEntry={secret}
          multiline={multiline}
          value={registrationData[name]}
          keyboardType={keyboardType}
          maxLength={maxLength}
          ></TextInput>
      </View>
      <Text style={[mainStyle.error, {textAlign:'right', marginRight: 10}]}>{!isEmpty(errors) ? errors[name] : null}</Text>

    </View>
  );
}

export default inject(
  ({store}) => ({
    registrationData: store.registrationData,
    changeInputRegister: store.changeInputRegister,
    errors: store.errors
  })
)(
  observer(Input)
);
