import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  padding: {
    flex: 1,
    // paddingHorizontal: 10,
    paddingBottom: 15,
  },
  logoText: {
    fontSize: 32,
    color: '#8863e6',
    fontWeight: 'bold',
    paddingBottom: 10,
    paddingHorizontal: 5,
    marginHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eeeeee',
  },
  scroller: {
    flex: 1,
    marginVertical: 20,
    marginHorizontal: 0,
  },
  menuButton: {
    flexDirection: 'row',
    marginBottom: 5,
    borderRadius: 5,
    alignItems: 'center',
  },
  menuButtonSquare: {
    width: 5,
    height: 35,
    marginRight: 20,
    backgroundColor: '#00000000',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  menuButtonSquareSelected: {
    width: 5,
    height: 35,
    marginRight: 20,
    backgroundColor: '#8863e6',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  menuButtonText: {
    fontSize: 15,
    marginLeft: 10,
    color: '#666e78',
  },
  menuButtonTextSelected: {
    fontSize: 15,
    marginLeft: 10,
    color: '#8863e6',
  },
  button: {
    backgroundColor: '#8863e6',
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginHorizontal: 10,
  },
  text: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 20,
    paddingHorizontal: 5,
    marginHorizontal: 10,
  },
  footerTextName: {
    fontSize: 15,
    color: '#000000',
  },
  footerTextUnit: {
    fontSize: 15,
    color: '#666e78',
  },
});

export default styles;
