import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  
  background: {
    width: '100%',
    height: 75,
  },
  
  text: {
    color: '#ffffff'
    
  },
  header: {
    position: "absolute",
    top: 0,
    width: '100%',
    height: 105,
  },

  headerhome:{
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    top: 30,
  },

  headerperfil:{
    flexDirection: 'row',
    justifyContent: 'flex-end',
    flex: 1,
  },

  headerlogo:{
    width: 30,
    height: 45, 
    
  },
  headermenu: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    fontSize: 15,
    top: 25,

  },

});

export default styles;