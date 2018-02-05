import React, {Component} from 'react'
import {inject, observer} from 'mobx-react/native'
import {createRootNavigator} from "./Path";

import homeStyle from '../styles/homeStyle'

const Router = ({hasToken, token, isAuth}) => {
  if (token === undefined) hasToken();
  const Router = createRootNavigator(isAuth);
  return <Router />
}

export default inject(
  ({store}) => ({
    hasToken: store.hasToken,
    token: store.token,
    isAuth: store.isAuth
  })
)(
  observer(Router)
);
