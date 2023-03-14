import React from "react";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Place from "./components/Place";
import LoginPage from "./components/LoginPage";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <>
      <Router>
      <NavBar></NavBar>
      
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/Place" element={<Place/>}/>
          <Route path="/LoginPage" element={<LoginPage/>}/>
        </Routes>
      </Router>
      
    </>
  );
}
