import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavHeader from './Nav.jsx';
import Contact from './Contact.jsx';
import Slides from './routes/Slides.jsx';
import Projects from './routes/Projects.jsx';
import Reviews from './routes/Reviews.jsx';
import Estimate from './routes/Estimate.jsx';

const App = () => {
  return (
    <Router>
      <NavHeader />
      <Routes>
        <Route path="/" element={<Slides />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/estimate" element={<Estimate />} />
      </Routes>
      <Contact />
    </Router>
  );
};

export default App;
