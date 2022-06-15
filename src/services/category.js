import api from './api';

export const loadAllCategory = async () => {
  try {
    const result = await api.get('categories');
    return result || [];
  } catch (error) {
    return error.response;
  }
};
