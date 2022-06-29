import AsyncStorage from '@react-native-async-storage/async-storage';

const BASE_URL = null;

const request = async (method, endpoint, params, token = null) => {
  method = method.toLowerCase();

  let fullUrl = `${BASE_URL}/${endpoint}`;
  let headers = {'Content-Type': 'application/json'};
  let body = null;

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  switch (method) {
    case 'get':
      let queryString = new URLSearchParams(params).toString();
      fullUrl += `?${queryString}`;
      break;

    case 'post':
    case 'put':
    case 'delete':
      body = JSON.stringify(params);
      break;

    default:
      break;
  }

  let req = await fetch(fullUrl, {
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

    return json;
  },
};

export default api;
