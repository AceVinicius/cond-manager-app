import AsyncStorage from '@react-native-async-storage/async-storage';

// const BASE_URL = 'https://cond-manager.herokuapp.com/api';
const BASE_URL = 'http://127.0.0.1:8000/api';

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

  let res;

  try {
    res = await fetch(url, {
      method: method,
      headers: headers,
      body: body,
    });
  } catch (error) {
    return error;
  }

  let json = await res.json();

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

  getProperty: async () => {
    return await AsyncStorage.getItem('property');
  },

  getWall: async () => {
    let token = await api.getToken();
    let json = await request('get', 'walls', {}, token);

    return json;
  },

  likeWallPost: async (id) => {
    let token = await api.getToken();
    let json = await request('post', `walls/${id}/like`, {}, token);

    return json;
  },

  getDocument: async () => {
    let token = await api.getToken();
    let json = await request('get', 'documents', {}, token);

    return json;
  },

  getBillet: async () => {
    let token = await api.getToken();
    let property = await api.getProperty();

    property = JSON.parse(property);

    let json = await request('get', `units/${property.id}/billets`, {}, token);

    return json;
  },

  getWarnings: async () => {
    let token = await api.getToken();
    let property = await api.getProperty();

    property = JSON.parse(property);

    let json = await request('get', `units/${property.id}/warnings`, {}, token);

    return json;
  },

  sendWarningFile: async (file) => {
    let token = await api.getToken();

    let formData = new FormData();
    formData.append('photo', {
      uri: file.uri,
      type: file.type,
      name: file.fileName,
    });

    let res;

    try {
      res = await fetch(`${BASE_URL}/warning/file`, {
        method: 'POST',
        headers: {
          Accept: 'multipart/form-data',
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });
    } catch (error) {
      return error;
    }

    let json = await res.json();

    return json;
  },

  sendWarning: async (title, description, photos) => {
    let token = await api.getToken();
    let property = await api.getProperty();

    property = JSON.parse(property);

    let json = await request(
      'post',
      `units/${property.id}/warnings`,
      {
        title: title,
        description: description,
        photos: photos,
      },
      token,
    );

    return json;
  },

  getAreas: async () => {
    let token = await api.getToken();
    let json = await request('get', 'areas', {}, token);

    return json;
  },

  getDisabledDays: async (id) => {
    let token = await api.getToken();
    let json = await request('get', `reservation/${id}/disabled-days`, {}, token);

    return json;
  },

  getReservationTimes: async (id, date) => {
    let token = await api.getToken();
    let json = await request('get', `reservation/${id}/available-times`, {date}, token);

    return json;
  },

  sendReservation: async (id, date, time) => {
    let token = await api.getToken();
    let property = await api.getProperty();

    property = JSON.parse(property);

    let json = await request('post', `units/${property.id}/reservations`, {id, date, time}, token);

    return json;
  },

  getMyReservations: async () => {
    let token = await api.getToken();
    let property = await api.getProperty();

    property = JSON.parse(property);

    let json = await request('get', `units/${property.id}/reservations`, {}, token);

    return json;
  }
};

export default api;
