import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f6fa',
  },
  scroller: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 16,
    color: '#000000',
    // textAlign: 'center',
    // marginTop: 10,
  },
  propertyList: {
    margin: '20px 0',
  },
  propertyListItem: {
    backgroundColor: '#ffffff',
    borderWidth: 2,
    borderColor: '#e8e9ed',
    borderRadius: 20,
    padding: 15,
    alignItems: 'center',
    marginBottom: 10,
  },
  propertyListItemText: {
    color: '#000000',
    fontSize: 15,
    fontWeight: 'bold',
  },
  bigArea: {
    margin: '50px 0',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#8863e6',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    padding: 15,
    marginHorizontal: 20,
    marginBottom: 15,
  },
  text: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default styles;
