import React, {Component} from 'react'
import {inject, observer} from 'mobx-react/native'
import {isEmpty} from 'lodash';

import {View, Text, Button, Image, TouchableWithoutFeedback} from 'react-native';

import formStyle from '../../styles/formStyle'
import mainStyle from '../../styles/mainStyle'


const Main = ({navigation, type, setTypeDirect, setStep}) => {

  const handleGoToLogin = e => navigation.goBack();

  const handleRegisterDealer = e => {
    setStep(1);
    setTypeDirect('dealer');
  }
  const handleRegisterPerson = e => {
    setStep(1);
    setTypeDirect('person');
  }

  return (
    <View style={formStyle.constainer}>


      <View style={[formStyle.rowOne]}>
        <Text style={[mainStyle.heading, mainStyle.center]}>Schrijf je in</Text>
        <Text style={formStyle.infoText}>Klaar om de Buda-munt te gebruiken? Schrijf je als de bliksem in in als handelaar / artiest of als gewone burger of bezoeker van het Buda-eiland.</Text>

        <View style={[formStyle.registerContainer]}>

          <TouchableWithoutFeedback onPress={handleRegisterDealer}>
            <View style={formStyle.registerButton}>
              <Text style={{textAlign: 'center', fontWeight: 'bold', color: 'blue'}}>Ik ben een handelaar of artiest</Text>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={handleRegisterPerson}>
            <View style={formStyle.registerButton}>
              <Text style={{textAlign: 'center', fontWeight: 'bold', color: 'blue'}}>Ik ben een bewoner of bezoeker</Text>
            </View>
          </TouchableWithoutFeedback>

        </View>

        <Image style={formStyle.backgroundImage} source={require('../../assets/img/main-buda-community.png')}/>

      </View>


      <View style={[formStyle.rowTwo]}>
        <Text>Heeft u al een account?</Text>
        <Button onPress={handleGoToLogin} title="Log u hier in!">Log u hier in!</Button>
      </View>

    </View>
  );
}

export default inject(
  ({store}) => ({
    type: store.type,
    setTypeDirect: store.setTypeDirect,
    setStep: store.setStep
  })
)(
  observer(Main)
);
