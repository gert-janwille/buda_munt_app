import React, {Component} from 'react'
import {inject, observer} from 'mobx-react/native'

import {View, Button, Text, TouchableHighlight, TouchableWithoutFeedback, Image, StatusBar, ScrollView} from 'react-native';

import ActivityItem from '../components/ActivityItem'

import mainStyle from '../styles/mainStyle';
import listStyle from '../styles/listStyle';

const NewItem = () => {

  return (
    <View style={listStyle.container}>

    </View>
  );
}

export default inject(
  ({store}) => ({
    promo: store.promo,
    activities: store.activities
  })
)(
  observer(NewItem)
);
