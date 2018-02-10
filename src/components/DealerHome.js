import React, {Component} from 'react'
import {inject, observer} from 'mobx-react/native'
import Camera from 'react-native-camera'

import {View, Text, TouchableHighlight, Image, StatusBar} from 'react-native';

import InputButton from '../components/InputButton';
import PinDealerOverlay from '../components/PinDealerOverlay';

import homeStyle from '../styles/homeStyle';
import mainStyle from '../styles/mainStyle';

const DealerHome = ({navigation, title, type, price, _id, setDealerAmount, dealerAmount, user, payDealer, dealerText,setPinDealer, pinDealer, setDealerHash, dealerHash, isConnected, dealerQR, showDealerQR}) => {

  const handleQRScan = ({data}) => {
    if (dealerAmount === '' || dealerAmount <= 0) return;
    setPinDealer(true);
    setDealerHash(data);
  }

  const handleButtonPressed = e => setDealerAmount(e);
  const handleShowQR = () => showDealerQR();
  const handleCloseQR = () => showDealerQR();

  const inputButtons = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [0, 'AC', 'C']
  ];

  const renderInputButtons = () => {
    let views = [];
    inputButtons.map((row, rId) => {
      let inputRow = [];
      row.map((key, kId) => inputRow.push(<InputButton onPress={handleButtonPressed} value={key} key={`${rId}-${kId}`} />));
      views.push(<View style={homeStyle.inputRow} key={"row-" + rId}>{inputRow}</View>)
    })
    return views;
  }

  return (
    <View style={homeStyle.dealerContainer}>

      <View style={homeStyle.dealerColumn}>
        <Image style={{width: 100, alignSelf:'center', resizeMode: 'contain'}} source={require('../assets/img/logo.png')}/>

        <Text style={homeStyle.welcomeText}>{dealerText}</Text>
        {!isConnected ? <Text style={[mainStyle.error, {textAlign:'center', fontSize: 12}]}>WARNING: No Internet Connection</Text> : null}

        <View style={homeStyle.touchPad}>

          <View style={homeStyle.screenPad}>
            <Text style={homeStyle.screenText}>{dealerAmount === '' ? '0' : dealerAmount} BDA</Text>
          </View>

          {renderInputButtons()}

        </View>
      </View>

      <Camera
        style={[homeStyle.dealerCam]}
        onBarCodeRead={handleQRScan}
        type={'front'} >
      </Camera>

      <TouchableHighlight onPress={handleShowQR}>
        <View style={homeStyle.showQR}>
          <Image style={{resizeMode: 'contain', width: 40, height: 50}} source={require('../assets/img/qr-code.png')}/>
        </View>
      </TouchableHighlight>

      {dealerQR ?
        <TouchableHighlight onPress={handleCloseQR}>
          <View style={homeStyle.qrExpanded}>
            <Image style={homeStyle.qrDealer} source={{uri: user.qr}}/>
            <Text>You can now scan the dealers QR Code</Text>
            <Text style={{color:'blue'}}>Close</Text>
          </View>
        </TouchableHighlight>
      : null}


     {pinDealer ? <PinDealerOverlay navigation={navigation} /> : null}

    </View>
  );
}

export default inject(
  ({store}) => ({
    user: store.user,
    isConnected: store.isConnected,
    setDealerAmount: store.setDealerAmount,
    dealerAmount: store.dealerAmount,
    payDealer: store.payDealer,
    dealerText: store.dealerText,
    setPinDealer: store.setPinDealer,
    pinDealer: store.pinDealer,
    setDealerHash: store.setDealerHash,
    dealerQR: store.dealerQR,
    showDealerQR: store.showDealerQR
  })
)(
  observer(DealerHome)
);
