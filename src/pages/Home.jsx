import { useEffect } from "react";
//Redux
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";
//Components
import Game from "../components/Game";
import GameDetail from "../components/GameDetail";
//Styling
import styled from "styled-components";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const Home = () => {
  //get the current location
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];
  //this return us an array but when we are on our home our location is '/'
  //which means that pathId will be undefined but we will still render our Home component
  //because that how we set up our routes in our App.js
  // we can use this to render our our GameDetail
  //Fetch games
  const disaptch = useDispatch();
  useEffect(() => {
    disaptch(loadGames());
  }, [disaptch]);
  //getting the data
  const { popular, upcoming, newGames } = useSelector((state) => state.games);

  return (
    <GameList>
      {/* render our <GameDetail/> only if we have our pathId available */}
      {pathId && <GameDetail />}
      <h2>Popular Games</h2>
      <Games>
        {popular.map((game) => (
          <Game
            name={game.name}
            released={game.released}
            id={game.id}
            platform={game.platform}
            image={game.background_image}
            key={game.id}
          />
        ))}
      </Games>
      <h2>Upcoming Games</h2>
      <Games>
        {upcoming.map((game) => (
          <Game
            name={game.name}
            released={game.released}
            id={game.id}
            platform={game.platform}
            image={game.background_image}
            key={game.id}
          />
        ))}
      </Games>{" "}
      <h2>New Games</h2>
      <Games>
        {newGames.map((game) => (
          <Game
            name={game.name}
            released={game.released}
            id={game.id}
            platform={game.platform}
            image={game.background_image}
            key={game.id}
          />
        ))}
      </Games>
    </GameList>
  );
};

const GameList = styled(motion.div)`
  padding: 0 5rem;
  h2 {
    padding: 5rem 0;
  }
`;

const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
  overflow: hidden;
`;
export default Home;
