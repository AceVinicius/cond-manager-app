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
    fontSize: 15,
    lor: '#000000',
  },
  statusArea: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  statusText: {
    fontSize: 14,
    color: '#9C9DB9',
    marginLeft: 10,
  },
  photoArea: {
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
    position: 'absolute',
    top: 10,
    right: 10,
  },
});

export default styles;
