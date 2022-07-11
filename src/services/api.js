import AsyncStorage from '@react-native-async-storage/async-storage';

const BASE_URL = 'https://cond-manager.herokuapp.com/api';

const request = async (method, endpoint, params, token = null) => {
  method = method.toLowerCase();

  let url = `${BASE_URL}/${endpoint}`;
  let headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + token ?? null,
  };
  let body = null;

  switch (method) {
    case 'get':
      let queryString = new URLSearchParams(params).toString();
      url += `?${queryString}`;
      break;

    case 'post':
    case 'put':
    case 'delete':
      body = JSON.stringify(params);
      break;

    default:
      break;
  }

  let req = await fetch(url, {
    method: method,
    headers: headers,
    body: body,
  });

  let json = await req.json();

  return json;
};

const api = {
  getToken: async () => {
    return await AsyncStorage.getItem('token');
  },

  validateToken: async () => {
    let token = await api.getToken();
    let json = await request('post', 'auth/validate', {}, token);

    return json;
  },

  login: async (username, password) => {
    let params = {
      cpf: username,
      password: password,
    };

    let json = await request('post', 'auth/login', params);

    return json;
  },

  logout: async () => {
    let token = await api.getToken();
    let json = await request('post', 'auth/logout', {}, token);

    await AsyncStorage.removeItem('token');
    await AsyncStorage.removeItem('property');

    return json;
  },

  register: async (name, email, cpf, password, confirmPassword) => {
    let params = {
      name,
      email,
      cpf,
      password,
      password_confirmation: confirmPassword,
    };

    let json = await request('post', 'users', params);

    return json;
  },
};

export default api;
