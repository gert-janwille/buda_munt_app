import {StyleSheet, Dimensions} from 'react-native';
const { width, height } = Dimensions.get('window');


export default StyleSheet.create({
  header: {
    backgroundColor: '#65AFA4',
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerHeading: {
    marginTop: 20,
    color: 'white',
    fontFamily: 'Poppins',
    fontSize: 25,
    fontWeight: 'bold',
  },
  heading: {
    fontFamily: 'Poppins',
    fontSize: 25,
    fontWeight: 'bold',
    color: '#62AFA4'
  },
  center: {
    textAlign: 'center'
  },
  tabButton:{
    width: 42,
    height: 40,
    marginTop: 10,
  },
  error: {
    color: 'red',
    fontSize: 10,
  },
  overlay: {
    zIndex: 100,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    opacity: 0.8,
    backgroundColor: '#000',
    width: width,
    height: height,
  }

});
