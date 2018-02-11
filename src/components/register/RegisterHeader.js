import React, {Component} from 'react'
import {inject, observer} from 'mobx-react/native'
import {isEmpty} from 'lodash';

import {View, Text, Button, Image, TouchableWithoutFeedback} from 'react-native';

import formStyle from '../../styles/formStyle'
import mainStyle from '../../styles/mainStyle'

const RegisterHeader = ({navigation, type, setTypeDirect, step, setStep}) => {
  const hangleGoBack = () => {
    setStep(step - 1);
    if (step - 1 === 0) setTypeDirect('');
  }

  return (
    <View style={formStyle.registerHeader}>

      <TouchableWithoutFeedback onPress={hangleGoBack}>
        <View style={formStyle.backButton}>
          <Text style={{color: '#6BAFA4'}}>Terug</Text>
        </View>
      </TouchableWithoutFeedback>

      <View style={formStyle.progressbar}>
        <View style={formStyle.line}></View>

        <View style={[formStyle.bol, step === 1 ? formStyle.activeBol : null]}></View>
        <View style={[formStyle.bol, step === 2 ? formStyle.activeBol : null]}></View>
        <View style={[formStyle.bol, step === 3 ? formStyle.activeBol : null]}></View>
      </View>

      <Text style={formStyle.registrationHeaderText}>Ik ben een {type === 'dealer' ? 'handelaar of artiest' : 'bewoner of bezoeker'}. Stap {step}.</Text>

    </View>
  );
}

export default inject(
  ({store}) => ({
    type: store.type,
    setTypeDirect: store.setTypeDirect,
    setStep: store.setStep,
    step: store.step
  })
)(
  observer(RegisterHeader)
);
