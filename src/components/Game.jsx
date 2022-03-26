import React from "react";
//styling
import styled from "styled-components";
import { motion } from "framer-motion";
//Redux
import { useDispatch } from "react-redux";
//components
import loadDetail from "../actions/detailAction";
import { Link } from "react-router-dom";

const Game = ({ name, id, image, released, platform }) => {
  const dispatch = useDispatch();
  //Event Handlers
  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden";
    //we do this in order to avoid scrolling the Home component when our gameDetail is open
    //but we have to set it back to auto once we are back to our Game
    dispatch(loadDetail(id));
  };
  return (
    <StyledGame onClick={loadDetailHandler}>
      {/* used link here because then when we click on our games then our location
      updates to  the path   that we defined in our link  */}
      <Link to={`/game/${id}`}>
        <h3>{name} </h3>
        <p> {released} </p>
        <img src={image} alt="" />
      </Link>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  overflow: hidden;
  cursor: pointer;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
    display: block;
  }
`;

export default Game;
