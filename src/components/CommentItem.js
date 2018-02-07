import React, {Component} from 'react'
import {View, Text, Image, TouchableHighlight} from 'react-native';
import timeConverter from '../lib/timeConverter';

import detailStyle from '../styles/detailStyle';

const ActivityItem = ({date, username, description}) => {

  return (
    <View style={detailStyle.cardItem}>
      <Image style={{width: 50, height: 50, marginRight: 10,}} source={require('../assets/img/default-profile.jpg')}/>

      <View style={detailStyle.commentHeader}>
        <Text style={detailStyle.username}>{username}</Text>
        <Text style={detailStyle.descriptionComment}>{description}</Text>
      </View>

      <Text style={detailStyle.date}>{timeConverter(date)}</Text>

    </View>
  );
}

export default ActivityItem
