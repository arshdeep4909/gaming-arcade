import React, { useState } from "react";
//Styling
import styled from "styled-components";
import { motion } from "framer-motion";
import logo from "../img/logo.svg";
//Components
import { fetchSearch } from "../actions/gamesAction";
//Redux and Routes
import { useDispatch } from "react-redux";

const Nav = () => {
  const dispatch = useDispatch();
  //State
  const [textInput, setTextInput] = useState("");

  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };
  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(textInput));
    setTextInput("");
  };
  const clearSearched = () => {
    dispatch({ type: "CLEAR_SEARCH" });
  };

  return (
    <StyledNav>
      <Logo onClick={clearSearched}>
        <img src={logo} alt="logo" />
        <h1>Gaming Arcade</h1>
      </Logo>
      <Form className="search">
        <SearchBar>
          <input
            value={textInput}
            onChange={inputHandler}
            onSubmit={submitSearch}
            type="text"
          />
          <button onClick={submitSearch} type="submit">
            Search
          </button>
        </SearchBar>
      </Form>
    </StyledNav>
  );
};

const StyledNav = styled(motion.div)`
  padding: 3rem 5rem;
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const Logo = styled(motion.div)`
  cursor: pointer;
`;

const Form = styled(motion.form)`
  display: flex;
`;

const SearchBar = styled(motion.div)`
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
  margin-top: 2rem;
  display: flex;
  align-items: center;
  border-radius: 30px;
  overflow: hidden;

  input {
    display: block;
    font-size: 1.5rem;
    padding: 1rem;
    border: none;
    outline: none;
    font-weight: bold;
    font-family: "Montserrat", sans-serif;
  }

  button {
    display: block;
    font-size: 1.5rem;
    border: none;
    padding: 1rem 2rem;
    background: #ff7676;
    color: white;
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    border-radius: 30px;
    &:hover {
      cursor: pointer;
      color: #ff7676;
      background-color: white;
      font-weight: bold;
    }
  }
`;

export default Nav;
