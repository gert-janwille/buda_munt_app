import React, {Component} from 'react'
import {inject, observer} from 'mobx-react/native'

import {View, Button, Text, TouchableHighlight, TouchableWithoutFeedback, Image, StatusBar, ScrollView} from 'react-native';

import ActivityItem from '../components/ActivityItem'

import mainStyle from '../styles/mainStyle';
import listStyle from '../styles/listStyle';

const List = ({navigation, activities, promo}) => {

  const handleFilter = e => console.log(e);
  const handleGoToPromo = e => navigation.navigate(`Detail`, {id: promo._id, title: promo.title});
  const handleAddItem = e => navigation.navigate('NewItem');
  const handleDoNothing = () => {}

  return (
    <View style={listStyle.container}>

      <View style={[mainStyle.header, listStyle.splitHeader]}>
        <Button style={{flex: 1}} onPress={handleDoNothing} title=''></Button>
        <Text style={[mainStyle.headerHeading, {flex: 5, textAlign: 'center'}]}>Activiteiten</Text>
        <TouchableWithoutFeedback onPress={handleAddItem}>
          <Image style={{width: 20, height: 20, resizeMode: 'contain', marginTop: 20, marginRight: 20}} source={require('../assets/img/add.png')} />
        </TouchableWithoutFeedback>
      </View>


      <ScrollView style={listStyle.scrollContainer}>
        <TouchableHighlight onPress={handleGoToPromo} style={listStyle.promo}>
          <View style={listStyle.promoInnerContainer}>
            <Image style={{width: 80, height: 130, flex: 1}} source={require('../assets/img/thumb-up.png')} />
            <View style={listStyle.contentContainer}>
              <Text style={listStyle.promoHeading}>In de kijker</Text>
              <Text style={listStyle.promoContent}>{promo.title}</Text>
            </View>
          </View>
        </TouchableHighlight>


        <View style={listStyle.activityContainer}>
          <View style={listStyle.filterContainer}>
            <Text style={{fontWeight: '200'}}>alle activiteiten</Text>
            <TouchableHighlight style={listStyle.filterButton} onPress={handleFilter}>
              <Image style={{width: 20, height: 20}} source={require('../assets/img/controls.png')} />
            </TouchableHighlight>
          </View>
          {activities.map(a => <ActivityItem key={a._id} navigation={navigation} {...a}/>)}
        </View>

      </ScrollView>

    </View>
  );
}

export default inject(
  ({store}) => ({
    promo: store.promo,
    activities: store.activities
  })
)(
  observer(List)
);
