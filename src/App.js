import React from "react";
import Navbar from "./component2/Navbar";
import News from "./component2/Check";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Books from "./component2/Books";
import About from "./component2/About";
import Footer from "./component2/Footer";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<News category="home" />} />
          <Route exact path="/world" element={<News category="world" />} />
          <Route
            exact
            path="/business"
            element={<News category="business" />}
          />
          <Route exact path="/science" element={<News category="science" />} />
          <Route exact path="/sports" element={<News category="sports" />} />
          <Route
            exact
            path="/technology"
            element={<News category="technology" />}
          />
          <Route exact path="/Books" element={<Books />} />
          <Route exact path="/About" element={<About />} />
        </Routes>
        
      </Router>
      <Footer />
    </div>
  );
};

export default App;
