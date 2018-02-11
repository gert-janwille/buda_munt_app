import React, {Component} from 'react'
import {inject, observer} from 'mobx-react/native'
import {isEmpty} from 'lodash';

import {View, Text, Button, TextInput, TouchableWithoutFeedback, ScrollView} from 'react-native';

import formStyle from '../../styles/formStyle'
import mainStyle from '../../styles/mainStyle'

import RegisterHeader from './RegisterHeader';
import Input from './Input';

const StepTwo = ({setType, validateAndGoNext, step}) => {

  const handleNextStep = e => validateAndGoNext(3, ['street', 'number', 'bus', 'zip']);

  return (
    <View style={{flex: 1}}>
      <RegisterHeader step={step}/>

        <ScrollView>
          <Input value='Straatnaam' name='street'/>
          <Input value='Huisnummer' name='houseNumber'/>
          <Input value='Bus' name='bus'/>
          <Input value='Postcode' name='zip'/>

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
    setType: store.setType,
    validateAndGoNext: store.validateAndGoNext
  })
)(
  observer(StepTwo)
);
