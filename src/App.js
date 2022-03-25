import React, { useEffect } from "react";
import Home from "./pages/Home";
import GlobalStyles from "./components/GlobalStyles";
import GameDetail from "./components/GameDetail";

function App() {
  return (
    <div>
      <GlobalStyles />
      <h1>Hello Ignite</h1>
      <Home />
    </div>
  );
}

export default App;
