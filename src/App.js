import React, { useEffect } from "react";
import Home from "./pages/Home";
import GlobalStyles from "./components/GlobalStyles";
import GameDetail from "./components/GameDetail";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";

function App() {
  return (
    <div>
      <GlobalStyles />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/game/:id" element={<Home />}></Route>
        {/* we need to : in our path because it means that if we add anything after /game/'add any id here' 
    then we will render our <Home/> */}
      </Routes>
      <Home />
    </div>
  );
}

export default App;
