import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Home from "./Home";
import Travel from "./Travel";
import Recipes from "./Recipes";
import ContactMe from "./ContactMe";
import "./App.css";


function App() {
  return (
    <Router>
      <div className="wrapper">
        <nav>
          <Link to="/" className="link">Home</Link>
          <Link to="/travel" className="link">Travel</Link>
          <Link to="/recipes" className="link">Recipes</Link>
          <Link to="/contactMe" className="link">Contact Me</Link>
        </nav>

        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/travel" element={<Travel />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/contactMe" element={<ContactMe />} />
          </Routes>
        </div>
      </div>

    </Router>
  );
}

export default App;
