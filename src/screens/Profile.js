import React, {Component} from 'react'
import {inject, observer} from 'mobx-react/native'

import {View, Text, TextInput, Button, Image} from 'react-native';

import profileStyle from '../styles/profileStyle'
import mainStyle from '../styles/mainStyle'

const Profile = ({logout, user, account}) => {

  const handleLogout = e => logout();

  const handleNavigateTransactions = e => {
    console.log("hello world");
  }

  const handleNavigateOpenList = e => {
    console.log("hello world");
  }

  return (
    <View style={profileStyle.constainer}>
      <View style={mainStyle.header}>
        <Text style={mainStyle.headerHeading}>Profiel</Text>
      </View>

      <View style={profileStyle.contentContainer}>
        <View style={profileStyle.header}>
          <Image style={{width: 125, height: 125,}} source={require('../assets/img/default-profile.jpg')}/>
          <Button style={profileStyle.logout} color="#72B7AD" onPress={handleLogout} title='logout'></Button>
        </View>

        <View style={profileStyle.type}>
          <View style={profileStyle.typeContainer}>
            <Text style={user.dealer ? '' : profileStyle.typeItemSelect}>Burger</Text>
            <Text style={user.dealer ? profileStyle.typeItemSelect : ''}>Handelaar</Text>
          </View>
        </View>

        <View style={profileStyle.itemContainer}>

          <View style={profileStyle.item}>
            <Text style={profileStyle.itemTitle}>Naam:</Text>
            <Text style={profileStyle.itemContent}>{user.name}</Text>
          </View>

          <View style={profileStyle.item}>
            <Text style={profileStyle.itemTitle}>Voornaam:</Text>
            <Text style={profileStyle.itemContent}>{user.firstName}</Text>
          </View>

          <View style={profileStyle.item}>
            <Text style={profileStyle.itemTitle}>E-mail:</Text>
            <Text style={profileStyle.itemContent}>{user.email}</Text>
          </View>

          <View style={profileStyle.item}>
            <Text style={profileStyle.itemTitle}>Gsm-nummer:</Text>
            <Text style={profileStyle.itemContent}>{user.phone}</Text>
          </View>



          <View style={[profileStyle.item, profileStyle.largeMargin]}>
            <Text style={profileStyle.itemTitle}>Balance:</Text>
            <Text style={profileStyle.itemContent}>{account.balance} BDA</Text>
          </View>



          <View style={[profileStyle.item, profileStyle.largeMargin]}>
            <Text style={profileStyle.itemTitle}>Opdrachten die openstaan:</Text>
            <Button style={profileStyle.itemContent} onPress={handleNavigateOpenList} title='Bekijk de lijst'></Button>
          </View>

          <View style={[profileStyle.item, profileStyle.largeMargin]}>
            <Text style={profileStyle.itemTitle}>Opdrachten waarbij u hielp:</Text>
            <Button style={profileStyle.itemContent} onPress={handleNavigateTransactions} title='Transacties'></Button>
          </View>

        </View>
      </View>
    </View>
  );
}

export default inject(
  ({store}) => ({
    user: store.user,
    logout: store.logout,
    account: store.account
  })
)(
  observer(Profile)
);
