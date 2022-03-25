import React from "react";
//Styling
import styled from "styled-components";
import { motion } from "framer-motion";
//Redux
import { useSelector } from "react-redux";
import { createStore } from "redux";

const GameDetail = () => {
  //Data
  const { game, screen } = useSelector((state) => state.detail);

  return (
    <CardShadow>
      <Detail>
        <Stats>
          <Rating>
            <h3>{game.name} </h3>
            <p>Rating: {game.rating} </p>
          </Rating>
          <Info className="info">
            <h3>Platforms </h3>
            <Platforms>
              {/* using conditional mapping here (? means that only render when platforms is available ) */}
              {game.platforms?.map((data) => (
                <h3 key={data.platform.id}> {data.platform.name} </h3>
              ))}{" "}
            </Platforms>
          </Info>
        </Stats>
        <Media>
          <img src={game.background_image} alt="" />
        </Media>
        <Description>
          <p> {game.description_raw}</p>
        </Description>

        <Gallery>
          {screen.map((images) => (
            <img src={images.image} key={images.id} alt="game screenshots" />
          ))}
        </Gallery>
      </Detail>
    </CardShadow>
  );
};

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }
  &::-webkit-scrollbar-track {
    background: white;
  }
`;

const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 20rem;
  background-color: white;
  position: absolute;
  left: 10%;
  color: black;
  img {
    width: 100%;
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled(motion.div)`
  text-align: center;
  /* width: 100%; */
`;

const Rating = styled(motion.div)`
  text-align: center;
  h3 {
    padding: 0 0 2rem;
  }
`;

const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img {
    /* will be replacing text with icons */
    margin-left: 3rem;
  }
`;

const Media = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
    object-fit: cover;
  }
`;
const Description = styled(motion.div)`
  margin: 2rem;
`;

const Gallery = styled(motion.div)`
  img {
    // to remove the space between game screenshots
    display: block;
  }
`;

export default GameDetail;
