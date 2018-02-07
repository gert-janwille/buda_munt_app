import React, {Component} from 'react'
import {inject, observer} from 'mobx-react/native';
import {View, TextInput, Text, Image, Button} from 'react-native';

import {isEmpty} from 'lodash';
import timeConverter from '../lib/timeConverter';

import detailStyle from '../styles/detailStyle';
import mainStyle from '../styles/mainStyle';

const ActivityItem = ({id, user, data, changeInput, insertNewComment, errors, setNewComment}) => {

  const handleSetComment = e => changeInput('comment', e);
  const handlePost = e => insertNewComment(user, id);
  const handleClose = e => setNewComment(false);

  return (
    <View style={[detailStyle.cardItem, {height: 150}]}>
      <Image style={{width: 50, height: 50, marginRight: 10,}} source={require('../assets/img/default-profile.jpg')}/>

      <View style={detailStyle.commentHeader}>
        <Text style={detailStyle.username}>{user.username}</Text>
        <TextInput
          style={[detailStyle.textArea, {height: 100}]}
          multiline={true}
          numberOfLines={4}
          onChangeText={handleSetComment}
          placeholder='Geef je comment'
          value={data.comment}/>
        <Text style={mainStyle.error}>{!isEmpty(errors) ? errors.comment : ''}</Text>
      </View>

      <View style={{flexDirection: 'column', justifyContent: 'flex-end'}}>
        <Button onPress={handleClose} title='close' color='grey'></Button>
        <Button onPress={handlePost} title='Plaats'></Button>
        <Text style={detailStyle.date}>{timeConverter(Date.now())}</Text>
      </View>

    </View>
  );
}

export default inject(
  ({store}) => ({
    user: store.user,
    data: store.data,
    changeInput: store.changeInput,
    insertNewComment: store.insertNewComment,
    errors: store.errors,
    setNewComment: store.setNewComment
  })
)(
  observer(ActivityItem)
);
