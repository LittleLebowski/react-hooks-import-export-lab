import React from "react";
import About from "./About";
import Home from "./Home";
import NavBar from "./NavBar";
import * as Blabla from "../data/user.js";

function App() {
  const { username, city, image } = Blabla;
  return (
    <div>
      <NavBar />
      <Home username={username} city={city} />
      <About image={image} />
    </div>
  );
}

export default App;
