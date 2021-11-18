import api from './api';

export const loadAllGames = async () => {
  try {
    const result = await api.get('games');
    return result || [];
  } catch (error) {
    return error.response;
  }
};
