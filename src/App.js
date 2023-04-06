import React from "react";
import "./App.css";
import About from "./components/about/About";
import ContactUs from "./components/contactUs/ContactUs";
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
      <ContactUs/>
      as
    </div>
  );
};

export default App;
