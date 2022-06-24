import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  token: '',
  user: {},
  property: {},
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case 'setToken':
      AsyncStorage.setItem('token', action.payload.token);
      state.token = action.payload.token;
      break;

    case 'setUser':
      state.user = action.payload.user;
      break;

    case 'setProperty':
      state.property = action.payload.property;
      break;

    default:
      break;
  }

  return state;
};
