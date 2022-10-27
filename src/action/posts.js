import * as api from '../api';

//ACTION CREATORS

export const getProfiles = (service) => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts(service);
    dispatch({ type: 'FETCH_ALL', payload: data });
  } catch (error) {
    console.log(error);
  }
};
