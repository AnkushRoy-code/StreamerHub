import React from "react";

import NavBar from "./components/navbar/navBar";
import Hero from "./components/hero/hero";
import Inspiration from "./components/inspiration/inspiration";
import Help from "./components/help/help";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Inspiration />
      <Help />
      <div
        style={{
          scrollSnapAlign: "end",
          height: "100vh",
          width: "100vw",
          backgroundColor: "orange",
        }}
      ></div>
      <div
        style={{
          scrollSnapAlign: "end",
          height: "100vh",
          width: "100vw",
          backgroundColor: "red",
        }}
      ></div>
    </>
  );
};

export default App;
