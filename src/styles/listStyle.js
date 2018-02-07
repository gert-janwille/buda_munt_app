import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container : {
    backgroundColor: '#F0F0F2',
  },
  splitHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  scrollContainer: {
    paddingTop: 10,
    height: Dimensions.get('window').height -130,
  },
  promo: {
    borderColor: '#65AFA4',
    backgroundColor: 'white',
    borderRadius: 4,
    borderWidth: 2,
    marginLeft: 10,
    marginRight: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: .2,
    shadowRadius: 3,
    elevation: 1,
  },
  promoInnerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  contentContainer: {
    flex: 3,
  },
  promoHeading: {
    fontSize: 20,
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    color: '#65AFA4',
  },
  promoContent: {
    fontWeight: '200',
  },
  activityContainer: {
    margin: 20,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  card: {
    backgroundColor: 'white',
    marginBottom: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 4 },
    shadowOpacity: .2,
    shadowRadius: 3,
    elevation: 1,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 100,
    borderLeftWidth: 5,
    borderColor: '#65AFA4',
  },
  cardInner:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  filterButton: {
    backgroundColor: '#F0F0F2',
  }

});
