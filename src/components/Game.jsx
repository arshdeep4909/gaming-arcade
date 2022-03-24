import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Game = ({ name, id, image }) => {
  return (
    <StyledGame>
      <p>Game Component</p>
      <p>{name}</p>
      <img src={image} alt="" />
      <p>id</p>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  display: flex;
`;

export default Game;
