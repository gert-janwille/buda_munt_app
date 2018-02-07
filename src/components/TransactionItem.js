import React, {Component} from 'react'
import {View, Text} from 'react-native';

import profileStyle from '../styles/profileStyle';

const TransactionItem = ({text}) => (
    <View style={profileStyle.cardTransaction}>
      <Text style={{width: 20, fontSize: 20, color: text.includes('Sented') ? 'red' : 'green' }}>{text.includes('Sented') ? '-' : '+'}</Text>
      <Text style={{color: text.includes('Sented') ? 'red' : 'green'}}>{text}</Text>
    </View>
);


export default TransactionItem
