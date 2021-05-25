import React from "react";
import Header from "./Components/Containers/Header/Header";
import Footer from "./Components/Containers/Footer/Footer";

import Home from "./Components/Pages/Home/Home";
import Portfolio from "./Components/Pages/Portfolio/Portfolio";
import Contact from "./Components/Pages/Contact/Contact";

import "./App.scss";

function App() {
  return (
    <div className="app">
      <Header />
      <Footer />
      <div className="sections">
        <Home />
        <Portfolio />
        <Contact />
      </div>
    </div>
  );
}

export default App;
