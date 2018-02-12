import React, {Component} from 'react'
import {inject, observer} from 'mobx-react/native'
import {Text} from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';

import mainStyle from '../styles/mainStyle'

const Notification = ({handleNotification, notificationStyle}) => {

  const handleOnSwipe = (direction, state) => handleNotification(direction, state);

  const config = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 80
    };

  return (
      <GestureRecognizer
        onSwipe={handleOnSwipe}
        config={config}
        style={[mainStyle.notification, notificationStyle]}
        >
          <Text style={mainStyle.notificationText}>You have a new balance!</Text>
      </GestureRecognizer>
  )
}

export default inject(
  ({store}) => ({
    handleNotification: store.handleNotification,
    notificationStyle: store.notificationStyle
  })
)(
  observer(Notification)
);
