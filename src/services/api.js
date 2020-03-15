import axios from 'axios';

const api = axios.create({
  baseURL: 'http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1',
});

export const getAllDragons = async () => {
  const response = await api.get('/dragon');

  return response.data;
};

export const getDragonDetails = async id => {
  const response = await api.get(`/dragon/${id}`);

  return response.data;
};

export const createDragon = async payload => {
  const response = await api.post('/dragon', payload);

  return response.data;
};

export const updateDragon = async ({ id, ...rest }) => {
  const response = await api.put(`/dragon/${id}`, rest);

  return response.data;
};

export const deleteDragon = async id => {
  const response = await api.delete(`/dragon/${id}`);

  return response.data;
};

export const logIn = ({ user, password }) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (user === 'admin' && password === 'admin') {
        resolve({ user });
      } else {
        reject('Usuário ou senha incorretos');
      }
    }, 300);
  });
