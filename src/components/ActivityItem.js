import React, {Component} from 'react'

import {View, Text, Image, TouchableHighlight} from 'react-native';

import listStyle from '../styles/listStyle';

const ActivityItem = ({navigation, title, type, price, _id}) => {

  const handleGoDetail = e => navigation.navigate(`Detail`, {id: _id, title: title});

  return (
    <TouchableHighlight onPress={handleGoDetail} style={listStyle.card}>
      <View style={listStyle.cardInner}>
        <Image style={{width: 30, height: 30, resizeMode: 'contain', flex:1}} source={type === 'R' ? require('../assets/img/R.png') : require('../assets/img/O.png')}/>
        <Text style={{flex: 3, fontWeight: '200'}}>{title}</Text>
        <Text style={{flex: 1, fontWeight: '200', color: '#68AFA4'}}>{price} BDA</Text>
      </View>
    </TouchableHighlight>
  );
}

export default ActivityItem
