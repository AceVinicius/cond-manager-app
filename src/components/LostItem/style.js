import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  box: {
    backgroundColor: '#ffffff',
    width: 200,
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 5,
    marginRight: 20,
  },
  image: {
    backgroundColor: '#cccccc',
    height: 100,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  title: {
    fontSize: 15,
    color: '#000000',
    margin: 10,
    height: 50,
  },
  infoTitle: {
    fontWeight: 'bold',
    color: '#9c9db9',
    marginHorizontal: 10,
    marginTop: 10,
  },
  infoText: {
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 10,
    marginHorizontal: 10,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#8b63e7',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
});

export default styles;
