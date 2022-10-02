import * as api from "../api";

//ACTION CREATORS

export const getProfiles = (field) => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts(field);
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error);
  }
};
// export const createPost = (post) => async (dispatch) => {
//   try {
//     const { data } = await api.createPost(post);
//     dispatch({ type: "CREATE", payload: data });
//   } catch (error) {
//     console.log(error);
//   }
// };
