import React from "react";
import "./App.css";
import About from "./components/about/About";
import Gallery from "./components/gallery/Gallery";
import Main from "./components/main/Main";
import Pricing from "./components/pricing/Pricing";
import Service from "./components/services/Service";

const App = () => {
  return (
    <div className="App">
      <div className="bg">
        <Main />
      </div>
      <Service />
      <About />
      <Gallery />
      <Pricing />
      as
    </div>
  );
};

export default App;
