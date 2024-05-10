import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import AllAssets from './components/AllAssets.jsx';
import AssetDetailsPage from './components/AssetDetailsPage.jsx'; 

const App = () => {
  return (
    <Router>
      <div >
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/allAssets" element={<AllAssets />} />
          <Route path="/details/:id" element={<AssetDetailsPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
