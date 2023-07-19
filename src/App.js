import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css"


import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Nav from "./components/Nav";
import Learn from "./pages/Learn"
import Test from "./pages/Test"
import Websiteinfo from "./pages/Websiteinfo"
import Wg from "./pages/Wg"


function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/test" element={<Test />} />
        <Route path="/websiteinfo" element={<Websiteinfo />} />
        <Route path="/wg" element={<Wg />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}


export default App;
