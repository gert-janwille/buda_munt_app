import React, {Component} from 'react'
import {TouchableHighlight, Text} from 'react-native';

import homeStyle from '../styles/homeStyle';

const InputButton = ({value, onPress}) => {
  const handleOnPress = e => onPress(e);
  
  return (
    <TouchableHighlight style={homeStyle.inputButton}
                        value={value}
                        underlayColor="#193441"
                        onPress={() => handleOnPress(value)}>
      <Text style={homeStyle.inputButtonText}>{value}</Text>
    </TouchableHighlight>
  );
}

export default InputButton
