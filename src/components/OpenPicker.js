import React, {Component} from 'react'
import {Picker} from 'react-native';


const ActivityItem = ({handleSetCategorie}) => {

  return (
    <Picker
      selectedValue="select"
      onValueChange={handleSetCategorie}>
      <Picker.Item label="Kies" value="kies" />
      <Picker.Item label="Zorg" value="zorg" />
      <Picker.Item label="Sociaal" value="sociaal" />
    </Picker>
  );
}

export default ActivityItem
