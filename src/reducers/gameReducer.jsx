const initialState = {
  popular: [],
  upcoming: [],
  newGames: [],
  searched: [],
};

const gamesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return {
        ...state,
        popular: action.payload.popular,
        upcoming: action.payload.upcoming,
        newGames: action.payload.newGames,
      };
    default:
      return { ...state };
  }
};

//ACTION CREATOR

const fetchgames = (userData) => {
  return {
    type: "FETCH_GAMES",
    payload: userData,
  };
};
fetchgames();

export default gamesReducer;
