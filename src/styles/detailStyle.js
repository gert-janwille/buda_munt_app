import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6BAFA4',
  },
  activityHeader: {
    flexDirection: 'column',
    backgroundColor: 'white',
    padding: 20,
    height: 200,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: .5,
    shadowRadius: 20,
  },
  activityHeaderHeading: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  first: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#6BAFA4',
  },
  description: {
    fontSize: 15,
    fontWeight: '200',
    lineHeight: 20,
    marginTop:  20,
  },
  scrollContainer: {
    height: Dimensions.get('window').height,
  },
  newComment: {
    marginTop: 20,
    marginRight: 20,
    marginBottom: 5,
    alignSelf: 'flex-end',
    alignContent: 'flex-end',
  },
  cardItem: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: .3,
    shadowRadius: 8,
  },
  date: {
    fontSize: 8,
    alignSelf: 'flex-end',
  },
  commentHeader: {
    flex: 1,
  },
  username: {
    fontWeight: 'bold',
  },
  descriptionComment: {
    fontWeight: '200',
  },

  formContainer: {
    flex: 1,
    paddingTop: 25,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: 'white',
  },
  radioGroup:{
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  actiItem: {
    marginTop: 20,
    height: 80,
    width: Dimensions.get('window').width - 40,
  },
  radio: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EEF0EF',
    height: 50,
    width: 150,
  },
  radioActive: {
    backgroundColor: '#6BAFA4',
  },
  radioActiveText: {
    color: 'white',
  },
  text: {
    color: 'grey',
    fontWeight: '200',
  },
  titleInput: {
    paddingLeft: 10,
    width: Dimensions.get('window').width - 40,
    borderWidth: 2,
    borderColor: '#EEF0EF',
    height: 50,
  },
  splitview: {
    flexDirection: 'row',
    height: 80,
    justifyContent: 'space-between',
  },
  itemSplit: {
    width: 50,
    width: Dimensions.get('window').width/2 - 40,
  },
  inputSplit: {
    paddingLeft: 10,
    height: 50,
    borderWidth: 2,
    borderColor: '#EEF0EF',
  },
  textArea: {
    paddingLeft: 10,
    height: 150,
    borderWidth: 2,
    borderColor: '#EEF0EF',
  },
  submitButton: {
    alignSelf: 'flex-end',
    marginTop: 35,
    width: Dimensions.get('window').width/3,
    height: 50,
    borderWidth: 2,
    borderColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitButtonText: {
    color: 'blue',
    fontSize: 15,
    fontWeight: 'bold',
  }

});
