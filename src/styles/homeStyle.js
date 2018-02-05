import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#6FB7AD',
    flex: 1,
    alignItems: 'center'
  },

  qr: {
    marginTop:10,
    width: Dimensions.get('window').width-100,
    height: Dimensions.get('window').width-100,
    resizeMode: 'contain',
    borderRadius: 10,
  },

  qrContainer: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height-200,
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  qrContainerInner:{
    height: Dimensions.get('window').width-100,
  },
  qrContainerText: {
    color: 'white',
    marginTop: 10,
    fontWeight: '200',
  },
  openScanContainer: {
    marginBottom: 20,
    alignItems: 'center',
    width: Dimensions.get('window').width-100,
  },
  openButtonText: {
    color:'#fff',
    textAlign:'center',
  },
  openButton: {
    marginRight:40,
    marginLeft:40,
    marginTop:10,
    paddingTop:20,
    paddingBottom:20,
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff',
    width: Dimensions.get('window').width-100,

  },
  camera: {
   flex: 0,
   alignItems: 'center',
   justifyContent: 'center',
   backgroundColor: 'transparent',
   height: Dimensions.get('window').width,
   width: Dimensions.get('window').width,
 },
});
