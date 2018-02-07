import React, {Component} from 'react'
import {inject, observer} from 'mobx-react/native'
import {isEmpty} from 'lodash';

import {TextInput, View, Picker, Text, TouchableWithoutFeedback} from 'react-native';

import OpenPicker from '../components/OpenPicker'


import mainStyle from '../styles/mainStyle';
import detailStyle from '../styles/detailStyle';

const NewItem = ({navigation, setType, data, changeInput, openPicker, setOpenPicker, submitActivity, errors}) => {

  const handleOpenPicker = e => setOpenPicker();

  const handleSetAanvraag = e => setType('R');
  const handleSetAanbieding = e => setType('O');

  const handleSetTitle = e => changeInput('title', e);
  const handleSetPrice = e => changeInput('price', e);
  const handleSetDescription = e => changeInput('description', e);

  const handleSetCategorie = e => {
    changeInput('categorie', e);
    setOpenPicker();
  };

  const handleSubmitNewActivity = () => submitActivity(navigation);

  return (
    <View style={detailStyle.formContainer}>

      <View style={detailStyle.radioGroup}>
        <TouchableWithoutFeedback onPress={handleSetAanvraag}>
          <View style={[detailStyle.radio, data.type === 'R' ? detailStyle.radioActive : null ]}>
            <Text style={data.type === 'R' ? detailStyle.radioActiveText : null}>Aanvraag</Text>
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={handleSetAanbieding}>
          <View style={[detailStyle.radio, data.type === 'O' ? detailStyle.radioActive : null ]}>
            <Text style={data.type === 'O' ? detailStyle.radioActiveText : null }>Aanbieding</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>

      <View style={[detailStyle.title, detailStyle.actiItem]}>
        <Text style={detailStyle.text}>Titel</Text>
        <TextInput style={detailStyle.titleInput} onChangeText={handleSetTitle} value={data.title}/>
        <Text style={mainStyle.error}>{!isEmpty(errors) ? errors.title : ''}</Text>
      </View>

      <View style={detailStyle.splitview}>
        <View style={detailStyle.itemSplit}>
          <Text style={detailStyle.text}>Categorie</Text>

          <TouchableWithoutFeedback onPress={handleOpenPicker}>
            <View style={[detailStyle.inputSplit, {justifyContent: 'center'}]}>
              <Text>{data.categorie}</Text>
            </View>
        </TouchableWithoutFeedback>
        <Text style={mainStyle.error}>{!isEmpty(errors) ? errors.categorie : ''}</Text>
        </View>

        <View style={detailStyle.itemSplit}>
          <Text style={detailStyle.text}>Price</Text>
          <View style={{flexDirection: 'row', alignItems:'center', justifyContent:'center'}}>
            <TextInput style={[detailStyle.inputSplit, {flex: 3}]} keyboardType='numeric' onChangeText={handleSetPrice} value={`${data.price}`}/>
            <Text style={{flex:1}}> BDA</Text>
          </View>
          <Text style={mainStyle.error}>{!isEmpty(errors) ? errors.price : ''}</Text>
        </View>
      </View>

      {openPicker ? <OpenPicker handleSetCategorie={handleSetCategorie}/> : null}

      <View>
        <Text style={detailStyle.text}>Uitleg</Text>
        <TextInput
          style={detailStyle.textArea}
          multiline={true}
          numberOfLines={4}
          onChangeText={handleSetDescription}
          placeholder='Uitleg over je activiteit'
          value={data.description}/>
        <Text style={mainStyle.error}>{!isEmpty(errors) ? errors.description : ''}</Text>
      </View>


      <TouchableWithoutFeedback onPress={handleSubmitNewActivity}>
        <View style={detailStyle.submitButton}>
          <Text style={detailStyle.submitButtonText}>Plaats</Text>
        </View>
      </TouchableWithoutFeedback>

    </View>
  );
}

export default inject(
  ({store}) => ({
    setType: store.setType,
    data: store.data,
    changeInput: store.changeInput,
    setOpenPicker: store.setOpenPicker,
    openPicker: store.openPicker,
    submitActivity: store.submitActivity,
    errors: store.errors
  })
)(
  observer(NewItem)
);
