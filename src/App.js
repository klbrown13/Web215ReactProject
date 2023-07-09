import React from 'react';

import "./styles.css";
import Header from "./Header";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Skills from "./Skills";
import Experience from "./Experience";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <Header/>
      <AboutMe/>
      <Projects/>
      <Skills/>
      <Experience/>
      <Footer/>
    </div>
  );
}
