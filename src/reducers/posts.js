const reducer = (posts = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;

    case "CREATEPOST":
      return [...posts, action.payload];

    default:
      return posts;
  }
};
export default reducer;
