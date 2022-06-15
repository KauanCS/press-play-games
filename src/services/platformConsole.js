import api from './api';

export const loadAllPlatformConsole = async () => {
  try {
    const result = await api.get('platformConsoles');
    return result || [];
  } catch (error) {
    return error.response;
  }
};
