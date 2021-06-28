import api from './api';

export const doLogin = async (values) => {
  try {
    const response = await api.post('users/login', values);

    return response || null;
  } catch (error) {
    return error.response;
  }
};
