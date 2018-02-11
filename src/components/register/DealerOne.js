import React, {Component} from 'react'
import {inject, observer} from 'mobx-react/native'
import {isEmpty} from 'lodash';

import {View, Text, Button, ScrollView, TouchableWithoutFeedback} from 'react-native';

import formStyle from '../../styles/formStyle'
import mainStyle from '../../styles/mainStyle'

import RegisterHeader from './RegisterHeader';
import Input from './Input';

const DealerOne = ({step, validateAndGoNext}) => {

  const handleNextStep = e => validateAndGoNext(2, ['name', 'firstName', 'email', 'phone', 'password', 'dealer', 'description']);

  return (
    <View style={{flex: 1}}>
      <RegisterHeader step={step}/>

      <ScrollView>
        <Input value='Naam' name='name'/>
        <Input value='Voornaam' name='firstName'/>
        <Input value='E-mailadres' name='email' keyboardType='email-address'/>
        <Input value='Gsm-nummer' name='phone' keyboardType='phone-pad'/>
        <Input value='Wachtwoord' name='password' secret={true}/>
        <Input value='Bedrijfsnaam' name='dealer'/>

        <Input
          value='Wat kan ik aanbieden in ruil voor BDA?'
          name='description'
          multiline={true}
        />

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
    validateAndGoNext: store.validateAndGoNext
  })
)(
  observer(DealerOne)
);
