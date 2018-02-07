import React, {Component} from 'react';
import {inject, observer} from 'mobx-react/native';
import {isEmpty} from 'lodash';

import {View, Button, Text, TouchableHighlight, TouchableWithoutFeedback, Image, StatusBar, ScrollView} from 'react-native';

import CommentItem from '../components/CommentItem'

import mainStyle from '../styles/mainStyle';
import detailStyle from '../styles/detailStyle';

const Detail = ({navigation, getDetail, detailObject}) => {
  const {id} = navigation.state.params;
  if (isEmpty(detailObject) || detailObject.id !== id) getDetail(id);
  const {title, username, price, description, type, comments} = detailObject;

  const handleNewComment = e => console.log("hello world");

  return (
    <View style={detailStyle.container}>

      <View style={detailStyle.activityHeader}>

        <View style={detailStyle.activityHeaderHeading}>
          <Text style={detailStyle.first}>{username}</Text>
          <Text style={[detailStyle.first, {color:'grey',}]}>{price} BDA</Text>
        </View>

        <Text style={detailStyle.description}>{description}</Text>
      </View>

      <ScrollView style={detailStyle.scrollContainer}>
        <TouchableWithoutFeedback onPress={handleNewComment}>
          <View style={detailStyle.newComment}>
            <Text style={{color: 'blue', textDecorationLine: 'underline'}}>Plaats nieuwe reactie</Text>
          </View>
        </TouchableWithoutFeedback>
        {!isEmpty(comments) ? comments.map(c => <CommentItem key={c.date} {...c}/>) : null}
      </ScrollView>


    </View>
  );
}

export default inject(
  ({store}) => ({
    getDetail: store.getDetail,
    detailObject: store.detailObject
  })
)(
  observer(Detail)
);
