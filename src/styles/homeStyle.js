import {StyleSheet, Dimensions} from 'react-native';
const { width, height } = Dimensions.get('window');

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
  scanContainer: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#68AFA4',
    flex: 1,
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
    justifyContent: 'flex-start',
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
    textAlign: 'center',
  },
  camButton: {
    width:50,
    height:50,
  },
  camera: {
    marginTop: 5,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    height: Dimensions.get('window').width - 120,
    width: Dimensions.get('window').width - 120,
 },
 pinOverlay: {
   zIndex: 100,
   flex: 1,
   alignItems: 'center',
   justifyContent: 'flex-start',
   position: 'absolute',
   left: 0,
   top: 0,
   backgroundColor: '#fff',
   width: width,
   height: height,
   paddingTop: 50,
   paddingLeft: 10,
   paddingRight: 10,
 },
 pin: {
   width: width - 40,
   borderColor: '#d6d7da',
   paddingLeft: 10,
   borderWidth: 2,
   height: 100,
   fontSize: 50,
   textAlign: 'center',
   marginBottom: 50,
 },
 dealerContainer: {
   // backgroundColor: 'red',
   flexDirection: 'row',
   height
 },
 dealerColumn: {
   width: width/3,
   backgroundColor: 'white',
   justifyContent: 'space-between',
 },
 dealerCam: {
   flex:1,
 },
 inputRow: {
    flex: 1,
    flexDirection: 'row'
  },
  welcomeText: {
    fontFamily: 'Poppins',
    textAlign: 'center',
    fontSize: 20,
    color: 'grey',
  },
  touchPad: {
    backgroundColor: '#6BAFA4',
    bottom: 0,
    height: height/2,
  },
  inputButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'white'
  },
  inputButtonText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white'
  },
  screenPad: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
    backgroundColor: 'white',
  },
  screenText: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#6BAFA4',
  },
  overlayPin: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    width,
    height,
    backgroundColor: 'rgba(0,0,0,.8)'
  },
  pinContainer: {
    width: width/2,
  },
  showQR: {
    top: 50,
    right:0,
    zIndex: 1000,
    position: 'absolute',
    backgroundColor: '#6BAFA4',
    width: 80,
    height: 50,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    paddingLeft: 20,
  },
  qrExpanded: {
    width: width/3,
    marginTop: 20,
    alignItems: 'center',
  },
  qrDealer: {
    marginTop:10,
    width: 280,
    height: 280,
    resizeMode: 'contain',
    borderRadius: 10,
  },
});
