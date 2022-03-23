require("dotenv").config();

//base URL
const base_URL = `https://api.rawg.io/api/`;

//Getting date and times
const date = new Date();

//current month
const getCurrentMonth = () => {
  const currentMonth = date.getMonth() + 1;
  if (currentMonth < 10) {
    return `0${currentMonth}`;
  } else {
    return currentMonth;
  }
};

//current day
const getCurrentDay = () => {
  const currentDay = date.getDate();
  if (currentDay < 10) {
    return `0${currentDay}`;
  } else {
    return currentDay;
  }
};

//current day/Month/Year
const currentYear = date.getFullYear();
const currentDay = getCurrentDay();
const currentMonth = getCurrentMonth();

//function to get the dates
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//Popular Games
const popularGames = `games?key=${process.env.REACT_APP_API_KEY}&dates=${lastYear},${currentDate}&oredering=-rating&page_size=10`;
const upcomingGames = `games?key=${process.env.REACT_APP_API_KEY}&dates=${currentDate},${nextYear}&oredering=-added&page_size=10`;
const newGames = `games?key=${process.env.REACT_APP_API_KEY}&dates=${lastYear},${currentDate}&oredering=-released&page_size=10`;

//getting the completed URL
export const popularGamesURL = () => `${base_URL}${popularGames}`;
export const upcomingGamesURL = () => `${base_URL}${upcomingGames}`;
export const newGamesURL = () => `${base_URL}${newGames}`;

//game details
export const gameDetailsURL = (game_id) => {
  return `${base_URL}games/${game_id}&key=${process.env.REACT_APP_API_KEY}`;
};

//game screenShots
export const gameScreenshotURL = (game_id) => {
  return `${base_URL}games/${game_id}/screenshots&key=${process.env.REACT_APP_API_KEY}`;
};

//Searched Game
export const searchGameURl = (game_name) => {
  return `${base_URL}games?search=${game_name}&key=${process.env.REACT_APP_API_KEY}`;
};
