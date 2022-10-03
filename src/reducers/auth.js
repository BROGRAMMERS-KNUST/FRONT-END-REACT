const authReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case 'AUTH':
      localStorage.setItem('profile', JSON.stringify({ ...action.data }));
      return { ...state, authData: null };

    case 'AUTHSERVICE':
      localStorage.setItem('profile', JSON.stringify({ ...action.data }));
      return { ...state, authData: null };

    case 'LOGOUT':
      localStorage.clear();
      return { ...state, authData: null };

    default:
      return state;
  }
};
export default authReducer;
