import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  fundo: {
    flex: 1,
    backgroundColor: '#000',
  },
  menodestaque:{
    width: '100%',
    height: 38,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  menubutton:{
    justifyContent: "center",
    alignItems: "center",
  },

  textbutton: {
    color:'#ffffff',
    fontSize: 9,

  },
  buttonplay:{
    flexDirection: 'row',
    backgroundColor: '#fffdfc',
    justifyContent: 'center',
    height: 40,
    width: 135,
    borderColor: '#ffffff',
    borderRadius: 9,
    alignSelf: 'center',
  },

  buttonplaytext:{
    color:'#000',
    alignSelf: 'center',
    justifyContent: 'center',
  },

});

export default styles;