import React from "react";
import Header from "./Components/Containers/Header/Header";

import Menu from "./Components/Containers/Menu/Menu";

import Home from "./Components/Pages/Home/Home";
import Portfolio from "./Components/Pages/Portfolio/Portfolio";
import Contact from "./Components/Pages/Contact/Contact";
import Works from "./Components/Works/Works";

import "./App.scss";
import { useState } from "react";

import * as emailjs from "emailjs-com";


function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <div className="sections">
        <Home />
        <Portfolio />
        <Works />
        <Contact />
      </div>
    </div>
  );
}

export default App;
