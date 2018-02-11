import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  constainer: {
    marginTop: 50,
    flex: 1,
  },

  rowOne: {
    flex: 6,
  },

  rowTwo: {
    flex: 1,
    backgroundColor: '#AEEBE2',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  innerContainer: {
    height: 250,
    marginTop: 50,
    padding: 30,
  },

  input: {
    flex: 2,
    borderColor: '#d6d7da',
    paddingLeft: 10,
    borderWidth: 2,
    height: 50,
  },

  label: {
    flex: 1,
    color: '#666666',
    fontWeight: 'bold',
    fontSize: 15,
  },

  loginBtn: {
    alignContent: 'flex-end'
  },
  backgroundImage: {
    alignSelf: 'center',
    flex:1,
    resizeMode: 'contain',
  },
  infoText: {
    color: 'grey',
    textAlign: 'center',
    lineHeight: 20,
    marginTop: 20,
    marginLeft: 25,
    marginRight: 25,
  },
  registerButton: {
    width: 180,
    borderColor: 'blue',
    borderWidth: 1,
    borderRadius: 4,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
  registerContainer: {
    margin: 25,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 150,
  },
  registerHeader: {
    height: 150,
    justifyContent: 'space-between',
  },
  backButton: {
    marginTop: 10,
    marginLeft: 10,
    width: 80,
    borderColor: '#6BAFA4',
    borderWidth: 1,
    borderRadius: 4,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },

  progressbar: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width
  },
  line: {
    position: 'absolute',
    width,
    height: 1,
    backgroundColor: '#B8ECD5',
  },
  activeBol: {
    backgroundColor: '#B8ECD5',
  },
  bol: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: '#B8ECD5',
    borderRadius: 100,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: 'white',
  },
  registrationHeaderText: {
    fontFamily: 'Poppins',
    color: '#6BAFA4',
    marginLeft: 10,
    fontSize: 15,
  },
  regiInput: {
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    alignItems: 'center',
  },
  regiText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'grey',
    width: 110,
  },
  inputType: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#6BAFA4',
    height: 35,
    paddingLeft: 10,
  },
  nextButton: {
    marginTop: 10,
    marginLeft: 10,
    width: 120,
    borderColor: 'blue',
    borderWidth: 1,
    borderRadius: 4,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
  }
});
