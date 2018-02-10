import React, {Component} from 'react'
import {inject, observer} from 'mobx-react/native'
import {createRootNavigator} from "./Path";

import homeStyle from '../styles/homeStyle'

const Router = ({hasToken, token, isAuth, user}) => {
  if (token === undefined) hasToken();
  const Router = createRootNavigator(isAuth, user);
  return <Router />
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
