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
  }

});
