import React, {Component} from 'react';
import {inject, observer} from 'mobx-react/native';
import {isEmpty} from 'lodash';

import {View, Button, Text, TouchableHighlight, TouchableWithoutFeedback, Image, StatusBar, ScrollView} from 'react-native';

import CommentItem from '../components/CommentItem';
import NewComment from '../components/NewComment';
import AddComment from '../components/AddComment';

import mainStyle from '../styles/mainStyle';
import detailStyle from '../styles/detailStyle';

const Detail = ({navigation, getDetail, detailObject, newComment, setNewComment, isConnected}) => {
  const {id} = navigation.state.params;
  if (isEmpty(detailObject) || detailObject.id !== id) getDetail(id);
  const {title, username, price, description, type, comments} = detailObject;

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
        {isConnected ? <AddComment /> : null}
        {newComment ? <NewComment id={detailObject._id} /> : null}
        {!isEmpty(comments) ? comments.map(c => <CommentItem key={c.date} {...c} />) : null}
      </ScrollView>


    </View>
  );
}

export default inject(
  ({store}) => ({
    getDetail: store.getDetail,
    detailObject: store.detailObject,
    newComment: store.newComment,
    setNewComment: store.setNewComment,
    isConnected: store.isConnected
  })
)(
  observer(Detail)
);
