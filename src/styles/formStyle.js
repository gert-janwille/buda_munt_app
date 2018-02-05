import {StyleSheet, Dimensions} from 'react-native';

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
    height: 30,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    padding: 5,
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
  }
});
