import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f6fa',
  },
  scroller: {
    padding: 20,
    flex: 1,
  },
  title: {
    fontSize: 16,
    color: '#000000',
    textAlign: 'center',
    marginTop: 10,
    fontWeight: 'bold',
  },
  propertyList: {
    marginHorizontal: 0,
    marginVertical: 20,
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
    marginHorizontal: 0,
    marginVertical: 50,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#8863e6',
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 15,
  },
  text: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default styles;
