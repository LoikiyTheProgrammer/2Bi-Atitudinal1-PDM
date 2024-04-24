import { StyleSheet } from 'react-native'
import { height, width } from './dimensions'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#18172e',
  },

  navigation: {
    width: width*0.99,
    height: height*0.99,
    borderRadius: width*0.1,
    borderWidth: 5,
    borderColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },

  navButton: {
    width: width*0.25,
    height: height*0.065,
    borderRadius: width*0.125,
    borderWidth: 5,
    borderColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    fontWeight: 'bold',
  },

  navButtonText: {
    color: 'orange',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default styles;