import React, {Component} from 'react'
import {inject, observer} from 'mobx-react/native'
import {isEmpty} from 'lodash';

import {ActivityIndicator, View, Text, TextInput, Button, Image} from 'react-native';

import formStyle from '../styles/formStyle'
import mainStyle from '../styles/mainStyle'

import Preloader from '../components/Preloader'

const Login = ({navigation, changeInput, login, errors, setOverlay}) => {

  const handleGoToRegister = e => navigation.navigate("Registreer");
  const handleLogin = e => login()
  const handleChangeEmail = e => changeInput('email', e);
  const handleChangePassword = e =>changeInput('password', e);

  return (
    <View style={formStyle.constainer}>


      <View style={[formStyle.rowOne]}>
        <Text style={[mainStyle.heading, mainStyle.center]}>Inloggen</Text>


        <View style={[formStyle.innerContainer]}>
          <View style={formStyle.inputContainer}>
            <Text style={[formStyle.label]}>E-mail:</Text>
            <TextInput onSubmitEditing={handleLogin} autoCorrect={false} autoCapitalize='none' keyboardType='email-address' onChangeText={handleChangeEmail} style={[formStyle.input]} placeholder='E-mail'></TextInput>
          </View>
          <Text style={mainStyle.error}>{!isEmpty(errors) ? errors.email : ''}</Text>

          <View style={formStyle.inputContainer}>
            <Text style={[formStyle.label]}>Wachtwoord:</Text>
            <TextInput onChangeText={handleChangePassword} style={[formStyle.input]} placeholder='Wachtwoord' returnKeyType='go' secureTextEntry={true}></TextInput>
          </View>
          <Text style={mainStyle.error}>{!isEmpty(errors) ? errors.password : ''}</Text>



          <Button style={formStyle.loginBtn} onPress={handleLogin} title="Login">Login</Button>

        </View>

        <Image style={formStyle.backgroundImage} source={require('../assets/img/main-buda-community.png')}/>

      </View>


      <View style={[formStyle.rowTwo]}>
        <Text>Heeft u nog geen account?</Text>
        <Button onPress={handleGoToRegister} title="Registreer">Registreer Hier</Button>
      </View>

      {setOverlay ? <Preloader /> : null}
    </View>
  );
}

export default inject(
  ({store}) => ({
    login: store.login,
    data: store.data,
    changeInput: store.changeInput,
    errors: store.errors,
    setOverlay: store.setOverlay
  })
)(
  observer(Login)
);
