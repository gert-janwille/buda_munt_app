import React, {Component} from 'react'
import {inject, observer} from 'mobx-react/native'
import {isEmpty} from 'lodash';

import {View, Text, Button, Image, TouchableWithoutFeedback} from 'react-native';

import formStyle from '../styles/formStyle'
import mainStyle from '../styles/mainStyle'

import Main from '../components/register/main';
import DealerOne from '../components/register/DealerOne';
import PersonOne from '../components/register/PersonOne';

import StepTwo from '../components/register/StepTwo';
import StepTree from '../components/register/StepTree';
import Preloader from '../components/Preloader'

const Login = ({navigation, type, step, setOverlay}) => {

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>

      {type === '' && step === 0 ? <Main navigation={navigation}/> : null}

      {type === 'dealer' && step === 1 ? <DealerOne /> : null}
      {type === 'person' && step === 1 ? <PersonOne /> : null}

      {step === 2 ? <StepTwo /> : null}
      {step === 3 ? <StepTree navigation={navigation} /> : null}

      {setOverlay ? <Preloader /> : null}
    </View>
  );
}

export default inject(
  ({store}) => ({
    type: store.type,
    step: store.step,
    setOverlay: store.setOverlay
  })
)(
  observer(Login)
);
