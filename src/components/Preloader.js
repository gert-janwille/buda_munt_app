import React, {Component} from 'react'
import {View, ActivityIndicator} from 'react-native';

import mainStyle from '../styles/mainStyle'
const Preloader = () => (
    <View style={[mainStyle.overlay]}>
      <ActivityIndicator size="large" color="#6BAFA4" />
    </View>
);

export default Preloader
