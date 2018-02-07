import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#68AFA4',
    flex: 1,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: .8,
    shadowRadius: 2,
    elevation: 1,
  },

  qr: {
    marginTop:10,
    width: Dimensions.get('window').width-100,
    height: Dimensions.get('window').width-100,
    resizeMode: 'contain',
    borderRadius: 10,
  },

  amountContainer: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height-200,
    marginTop: 25,
    justifyContent: 'center',
    alignItems: 'center'
  },

  qrContainer: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height-200,
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  qrContainerInner:{
    marginTop: 20,
    height: Dimensions.get('window').width-100,
  },
  qrContainerText: {
    color: 'white',
    marginBottom: 10,
    fontWeight: '200',
  },
  openScanContainer: {
    marginTop: 20,
    alignItems: 'center',
    width: Dimensions.get('window').width-100,
  },
  openButtonText: {
    color:'#fff',
    textAlign:'center',
  },
  image:{
    marginTop: -50,
    width: Dimensions.get('window').width,
    height: 160,
    resizeMode: 'stretch',
    zIndex: -10,
  },
  openButton: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    backgroundColor: 'white',
    paddingTop:20,
    paddingBottom:20,
    borderRadius:100,
    width: 80,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',

  },

  inputContainer: {
    marginTop: 50,
    marginBottom: 20,
    width: Dimensions.get('window').width-100,
    backgroundColor: 'red',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  amountText: {
    fontSize: 20,
    color: 'white',
    fontWeight: '200',
    alignSelf: 'flex-start',
  },
  bda: {
    flex: 1,
    fontSize:40,
    color: 'white',
  },
  amount:{
    flex: 2,
    borderRadius:10,
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 80,
    color: 'white',
    fontSize: 40,
  },
  camButton: {
    width:50,
    height:50,
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
