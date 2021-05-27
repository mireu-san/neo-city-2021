import React from "react";
import Header from "./Components/Containers/Header/Header";
import Footer from "./Components/Containers/Footer/Footer";

import Home from "./Components/Pages/Home/Home";
import Portfolio from "./Components/Pages/Portfolio/Portfolio";
import Contact from "./Components/Pages/Contact/Contact";
import Menu from "./Components/Containers/Menu/Menu";

import "./App.scss";
import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu />
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
