import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  fundo: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#000',
    padding: 8,
    
  },
  logo: {
    display: 'flex',
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#363636',
    height: 60,
    marginBottom: 20,
    color: '#fff',
    fontSize: 18,
    borderRadius: 10,
  },
  inputext:{
    color:'#FFF',
    fontSize: 12,
  },
  button:{
    backgroundColor: '#000',
    justifyContent: 'center',
    height: 60,
    borderWidth: 3,
    borderColor: '#ffffff',
    borderRadius: 10,
    marginBottom: 30,
  },
  buttontext:{
    color:'#ffffff',
    textAlign: 'center',
    fontSize: 22,
  },

  buttonajuda:{
    justifyContent: 'center',
    textAlign: 'center',
    marginBottom: 50,
    fontSize: 15,
    color:'#fff',
  },

  buttonajudatext:{
    fontSize: 12,
    color:'#fff',
    textAlign: 'center',

  },

  textgoogle:{
    marginTop: 50,
    color: '#808080',
    textAlign: 'center',
    fontSize: 10,
  }

});

export default styles;