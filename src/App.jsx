import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import About from './components/About';
import Footer from './components/Foot';
import Restaurant from './components/Restaurants';
import Reviews from './components/Reviews';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/restaurants" element={<Restaurant />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
