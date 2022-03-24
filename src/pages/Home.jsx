import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";
import Game from "../components/Game";

const Home = () => {
  //Fetch games
  const disaptch = useDispatch();
  useEffect(() => {
    disaptch(loadGames());
  }, [disaptch]);
  //getting the data
  const { popular, upcoming, newGames } = useSelector((state) => state.games);

  return (
    <div>
      <p>Below should be the game compnoent</p>
      <div>
        <p>Popular Game</p>
        {popular.map((game) => (
          <Game
            name={game.name}
            id={game.id}
            image={game.background_image}
            key={game.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
