import React from "react";
import "./App.css";
import About from "./components/about/About";
import Gallery from "./components/gallery/Gallery";
import Main from "./components/main/Main";
import Service from "./components/services/Service";

const App = () => {
  return (
    <div className="App">
      <div className="bg">
        <Main />
      </div>
      <div>
        <Service />
      </div>
      <div>
        <About />
      </div>
      <div>
        <Gallery />
      </div>
      <div>
         asd
      </div>
    </div>
  );
};

export default App;
