import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({

  capa: {
    width: 120,
    height:180,
    borderRadius: 4,
    overflow: 'hidden',
    margin:5,   
  },

  img:{
  top:5,  
  flexDirection: 'row',

  },
  titulocategoria: {
    top:10,
    marginLeft:20,
    width: '100%',
    height:50,
    justifyContent: 'center',
  },

  text:{
    color: '#ffffff',
    fontSize: 17,
  },

});

export default styles;