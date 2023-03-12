import React from "react";
import "./App.css";
import Main from "./components/main/Main";
import Service from "./components/services/Service";

const App = () => {
  return (
    <div className="App">
      <div className="bg">
        <Main />
      </div>
      <div>
        <Service/> 
      </div>
      <div> </div>
    </div>
  );
};

export default App;
