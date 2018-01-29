import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
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
