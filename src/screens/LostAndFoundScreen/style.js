import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f6fa',
  },
  list: {
    flex: 1,
  },
  emptyList: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  emptyListText: {
    fontSize: 15,
    color: '#000000',
  },
  title: {
    fontSize: 17,
    color: '#000000',
    marginHorizontal: 10,
    marginVertical: 20,
  },
  listScroller: {
    width: '100%',
    paddingLeft: 20,
    paddingBottom: 10,
    marginBottom: 10,
  },

});

export default styles;
