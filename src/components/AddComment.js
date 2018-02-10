import React, {Component} from 'react'
import {inject, observer} from 'mobx-react/native';
import {View, Text, TouchableWithoutFeedback} from 'react-native';

import detailStyle from '../styles/detailStyle';

const AddComment = ({setNewComment}) => {
  const handleNewComment = e => setNewComment(true);

  return(
    <TouchableWithoutFeedback onPress={handleNewComment}>
      <View style={detailStyle.newComment}>
        <Text style={{color: 'blue', textDecorationLine: 'underline'}}>Plaats nieuwe reactie</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default inject(
  ({store}) => ({
    setNewComment: store.setNewComment
  })
)(
  observer(AddComment)
);
