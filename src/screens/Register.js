import React, {Component} from 'react'
import {inject, observer} from 'mobx-react/native'
import {isEmpty} from 'lodash';

import {View, Text, TextInput, Button, Image} from 'react-native';

import formStyle from '../styles/formStyle'
import mainStyle from '../styles/mainStyle'

import Preloader from '../components/Preloader'

const Register = ({navigation}) => {

  return (
    <View style={formStyle.constainer}>

    </View>
  );
}

export default inject(
  ({store}) => ({

  })
)(
  observer(Register)
);
