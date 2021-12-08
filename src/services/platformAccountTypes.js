import api from './api';

export const loadAllPlatformAccountTypes = async () => {
  try {
    const result = await api.get('platformAccountTypes');
    return result || [];
  } catch (error) {
    return error.response;
  }
};
