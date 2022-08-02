import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f6fa',
  },
  scroller: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 17,
    color: '#000000',
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#cccccc',
    backgroundColor: '#ffffff',
    borderRadius: 5,
    color: '#000000',
    fontSize: 15,
    padding: 10,
    marginBottom: 30,
  },
  photoArea: {
    marginBottom: 30,
  },
  photoScroller: {
    flex: 1,
  },
  photoAddButton: {
    width: 65,
    height: 65,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 5,
    marginLeft: 5,
  },
  photoItem: {
    width: 65,
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 5,
    paddingBottom: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  photo: {
    width: 63,
    height: 63,
    marginBottom: 5,
    borderRadius: 5,
  },
  photoRemoveButton: {},
  loading: {
    width: 65,
    height: 65,
    marginLeft: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#8863e6',
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default styles;
