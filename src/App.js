import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Home from "./pages/Home";
import Travel from "./pages/Travel";
import Recipes from "./pages/Recipes";
import ContactMe from "./pages/ContactMe";
import Shop from "./pages/Shop";



function App() {
  return (
    <Router>
      <div className="wrapper">
        <nav>
          <Link to="/" className="link">HOME</Link>
          <Link to="/travel" className="link">TRAVEL</Link>
          <Link to="/recipes" className="link">RECIPES</Link>
          <Link to="/shop" className="link">SHOP</Link>
          <Link to="/contactMe" className="link">CONTACT ME ❤️</Link>
        </nav>

        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/travel" element={<Travel />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/shop" element={<Shop/>} />
            <Route path="/contactMe" element={<ContactMe />} />
          </Routes>
        </div>
      </div>

    </Router>
  );
}

export default App;
