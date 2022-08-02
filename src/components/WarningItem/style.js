import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  box: {
    backgroundColor: '#ffffff',
    borderWidth: 2,
    borderColor: '#E8E9ED',
    borderRadius: 15,
    padding: 15,
    margin: 10,
  },
  date: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#9C9DB9',
    marginBottom: 10,
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 4,
  },
  description: {
    fontSize: 15,
    color: '#000000',
    textAlign: 'justify',
    marginBottom: 10,
  },
  statusArea: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusText: {
    fontSize: 14,
    color: '#9C9DB9',
    marginLeft: 10,
  },
  photoArea: {
    marginBottom: 10,
    flexDirection: 'row',
  },
  photoItem: {
    marginRight: 10,
  },
  photo: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  modalArea: {
    flex: 1,
    backgroundColor: '#000000',
  },
  modalPhoto: {
    flex: 1,
  },
  modalCloseButton: {
    width: 30,
    height: 30,
    top: 10,
    left: 10,
  },
});

export default styles;
