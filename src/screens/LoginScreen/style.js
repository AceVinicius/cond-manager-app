import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: '#f5f6fa',
  },
  image: {
    width: 250,
    height: 200,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#cccccc',
    backgroundColor: '#ffffff',
    borderRadius: 5,
    color: '#000000',
    fontSize: 15,
    padding: 10,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#8863e6',
    padding: 12,
    justifyContent:'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 15,
  },
  text: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: 'bold',
  }
});

export default styles;
