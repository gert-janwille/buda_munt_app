import React, {Component} from 'react'
import {inject, observer} from 'mobx-react/native'
import {isEmpty} from 'lodash';

import {View, Text, Button, TextInput, TouchableWithoutFeedback, ScrollView} from 'react-native';

import formStyle from '../../styles/formStyle'
import mainStyle from '../../styles/mainStyle'

import RegisterHeader from './RegisterHeader';
import Input from './Input';

const StepTree = ({navigation, submitUser, step}) => {
  const handleNextStep = e => submitUser(navigation, ['pin', 'pinRepeat']);

  return (
    <View style={{flex: 1}}>
      <RegisterHeader step={step}/>

        <ScrollView>
          <Input value='Pincode' name='pin' keyboardType='numeric' maxLength={4}/>
          <Input value='Pincode herhalen' name='pinRepeat' keyboardType='numeric' maxLength={4}/>

          <TouchableWithoutFeedback onPress={handleNextStep}>
            <View style={[formStyle.nextButton, {alignSelf: 'flex-end', marginRight: 10}]}>
              <Text style={{color: 'blue', textAlign: 'center'}}>Verder</Text>
            </View>
          </TouchableWithoutFeedback>
        </ScrollView>

    </View>
  );
}

export default inject(
  ({store}) => ({
    step: store.step,
    submitUser: store.submitUser
  })
)(
  observer(StepTree)
);
