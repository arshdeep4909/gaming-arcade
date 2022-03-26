import React from "react";
//Styling
import styled from "styled-components";
import { motion } from "framer-motion";
//Redux
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const GameDetail = () => {
  //navigate to manipulate or router dom
  const navigate = useNavigate();
  //Exit Detail
  const exitDetailHandler = (e) => {
    const element = e.target;
    //this returns the element that we click on
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      navigate("/");
      //so if we click back on the area between our gameDetail and game, the transparent
      //background portion then it takes us back to game component
    }
  };
  //Data
  const { game, screen, isLoading } = useSelector((state) => state.detail);

  return (
    <>
      {/* we only fetch our Game detail when is Loading is False, be default 
      it is true and it is not set to flase untill our gameDetail is done fteching */}
      {!isLoading && (
        <CardShadow className="shadow" onClick={exitDetailHandler}>
          <Detail>
            <Link to={"/"}>
              <HomeBtn className="shadow" onClick={exitDetailHandler}>
                X
              </HomeBtn>
            </Link>
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
                <img
                  src={images.image}
                  key={images.id}
                  alt="game screenshots"
                />
              ))}
            </Gallery>
          </Detail>
        </CardShadow>
      )}
    </>
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

const HomeBtn = styled(motion.div)`
  font-size: 2rem;
  font-weight: 500;
  cursor: pointer;
  position: absolute;
  left: 90%;
  border: 2px solid gray;
  padding: 3px 8px;
  top: 50px;
  border-radius: 10px;
  :hover {
    background: #535353;
    color: white;
  }
`;

const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 6rem 20rem 2rem 20rem;
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

//

export default GameDetail;
