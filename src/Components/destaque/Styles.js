import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  text: {
    color: '#ffffff'
    
  },
  destaque: {
    width: '100%',
    height: 400,
  },

  logo: {
    marginTop: 200,
    alignSelf: 'center',
    width:300,
    height: 150,
    position: "absolute",
    zIndex: 10,
  },
  efeito:{
    width:'100%',
    height: 150,
    position: 'absolute',
    zIndex: 9,
    bottom: 0,
  },

});

export default styles;