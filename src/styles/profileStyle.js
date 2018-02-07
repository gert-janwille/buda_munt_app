import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  constainer: {
    backgroundColor: '#F0F0F2',
    flex: 1,
  },
  contentContainer: {
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemContainer: {
    marginTop: 20,
  },
  item: {
    height: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemTitle: {
    color: 'grey',
    width: 125,
  },
  itemContent: {
    color: 'grey',
    flex: 1,
    textAlign: 'left',
  },
  type: {
    marginTop: 25,
    height: 30,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  typeContainer: {
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 4,
    width: 200,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  typeItemSelect: {
    color: 'blue',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  largeMargin: {
    marginTop: 25,
  },
  containerTrans: {
    margin: 20,
  },
  cardTransaction: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginBottom: 15,
    height: 35,
    borderRadius: 10,
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: .3,
    shadowRadius: 5,
  }
});
