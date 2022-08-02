import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  box: {
    backgroundColor: '#ffffff',
    borderWidth: 2,
    borderColor: '#E8E9ED',
    borderRadius: 20,
    padding: 15,
    margin: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  info: {
    marginLeft: 15,
    flex: 1,
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    lor: '#000000',
  },
  date: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#9C9DB9',
  },
  body: {
    fontSize: 15,
    color: '#000000',
    marginVertical: 20,
    marginHorizontal: 0,
    textAlign: 'justify',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  likeButton: {
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  likeText: {
    marginLeft: 7,
    fontSize: 13,
    color: '#9C9DB9',
  },
});

export default styles;
