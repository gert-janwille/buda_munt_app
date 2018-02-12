import React, {Component} from 'react'
import {inject, observer} from 'mobx-react/native'
import {View} from 'react-native';

import {createRootNavigator} from "./Path";
import Notification from '../components/Notification';

const Router = ({hasToken, token, isAuth, user}) => {
  if (token === undefined) hasToken();
  const Router = createRootNavigator(isAuth, user);

  return (
    <View style={{flex:1}}>
      <Notification />
      <Router />
    </View>
  )
}

export default inject(
  ({store}) => ({
    hasToken: store.hasToken,
    token: store.token,
    isAuth: store.isAuth,
    user: store.user
  })
)(
  observer(Router)
);
