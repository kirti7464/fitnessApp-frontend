import React from 'react';
import NavBar from './components/NavBar.js';
import "./App.css";
import Recipes from './components/Recipes';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/Login.js';
import About from './components/About.js';
import SignUp from './components/SignUp.js';

const App=()=> {
  return (
    <div>
      <Router>
        <NavBar /> 
        {/* <SignUp/> */}
        <Routes> 
          {/* <Route exact path="/" element={<Register key="register" />} /> */}
          <Route exact path="/recipe" element={<Recipes key="home" />} />
          <Route exact path="/about" element={<About key="about" />} />
          <Route exact path="/login" element={<Login key="login" />} />
          <Route exact path="/" element={<SignUp key="park"/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
