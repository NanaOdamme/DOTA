import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Header from './Header.jsx';
import HomePage from './First-page.jsx';

import Home from './Home.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';
import AllAssets from './AllAssets.jsx';
import AssetDetailsPage from './AssetDetailsPage.jsx'; 

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        </Routes>
      <div>
        <Header />
        
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/allAssets" element={<AllAssets />} />
          <Route path="/details/:id" element={<AssetDetailsPage />} />
        </Routes>
      
      </div>
    </Router>
  );
};

export default App;
