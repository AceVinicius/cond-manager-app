import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f6fa',
  },
  scroller: {
    flex: 1,
  },
  image: {
    backgroundColor: '#cccccc',
    height: 150,
  },
  centerLoading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  calendarArea: {
    margin: 20,
  },
  title: {
    fontSize: 17,
    color: '#000000',
    fontWeight: 'bold',
    marginHorizontal: 20,
    marginVertical: 10,
  },
  timeArea: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginBottom: 30,
  },
  timeButton: {
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 5,
    marginVertical: 5,
    marginHorizontal: 20,
    backgroundColor: 'transparent',
    padding: 10,
  },
  timeText: {
    color: '#000000',
    fontSize: 12,
  },
  timeButtonActive: {
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 5,
    marginVertical: 5,
    marginHorizontal: 20,
    backgroundColor: '#8863e6',
    padding: 10,
  },
  timeTextActive: {
    color: '#ffffff',
    fontSize: 12,
  },
  saveButton: {
    backgroundColor: '#8863e6',
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    // marginBottom: 15,
  },
  saveButtonText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default styles;
