import React, {Component} from 'react'
import {inject, observer} from 'mobx-react/native'
import {View, Text, TouchableWithoutFeedback} from 'react-native';

import detailStyle from '../styles/detailStyle'
import listStyle from '../styles/listStyle'

import OpenPicker from '../components/OpenPicker'

const Filter = ({openPicker, setOpenFilter, filterData, setFilterType, setOpenPicker, changeFilterInput}) => {

  const handleSetAanbieding = e => setFilterType('O', e);
  const handleSetAanvraag = e => setFilterType('R', e);
  const handleOpenPicker = e => setOpenPicker();
  const handleSetCategorie = e => {
    changeFilterInput('categorie', e);
    setOpenPicker();
  };
  
  const handleFilterResults = e => setOpenFilter(false);
  const handleCloseFilter = e => setOpenFilter(false);

  return (
    <View style={listStyle.filterCon}>

      <View style={listStyle.filterOverlay}>

        <View style={detailStyle.radioGroup}>
          <TouchableWithoutFeedback onPress={handleSetAanvraag}>
            <View style={[detailStyle.radio, filterData.type.indexOf('R') !== -1 ? detailStyle.radioActive : null ]}>
              <Text style={filterData.type.indexOf('R') !== -1 ? detailStyle.radioActiveText : null }>Aanvraag</Text>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={handleSetAanbieding}>
            <View style={[detailStyle.radio, filterData.type.indexOf('O') !== -1 ? detailStyle.radioActive : null ]}>
              <Text style={filterData.type.indexOf('O') !== -1 ? detailStyle.radioActiveText : null }>Aanbieding</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>

        <View style={listStyle.picker}>
          <Text style={detailStyle.text}>Categorie</Text>

          <TouchableWithoutFeedback onPress={handleOpenPicker}>
            <View style={[detailStyle.inputSplit, {justifyContent: 'center'}]}>
              <Text>{filterData.categorie}</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>

        <TouchableWithoutFeedback onPress={handleFilterResults}>
          <View style={detailStyle.submitButton}>
            <Text style={detailStyle.submitButtonText}>Filter</Text>
          </View>
        </TouchableWithoutFeedback>

        {openPicker ? <OpenPicker handleSetCategorie={handleSetCategorie}/> : null}

      </View>

      <TouchableWithoutFeedback onPress={handleCloseFilter}>
        <View style={{flex:1}}></View>
      </TouchableWithoutFeedback>

    </View>
  );
}

export default inject(
  ({store}) => ({
    promo: store.promo,
    activities: store.activities,
    openFilter: store.openFilter,
    setOpenFilter: store.setOpenFilter,
    filterData: store.filterData,
    setFilterType: store.setFilterType,
    setOpenPicker: store.setOpenPicker,
    openPicker: store.openPicker,
    changeFilterInput: store.changeFilterInput
  })
)(
  observer(Filter)
);
