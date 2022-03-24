const initialState = {
  popular: [],
  upcomingGames: [],
  newGames: [],
  searched: [],
};

const gamesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return {
        ...state,
        popular: action.payload.popular,
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
