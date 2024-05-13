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
import Creators from './AllCreators.jsx';
import CreatorProfile from './creatorsid.jsx';
import AuctionPage from './Auction.jsx';
import AuctionDetailPage from './AuctionDetailPage.jsx';
const App = () => {
  return (
      <Router>
          <div>
              <Header />
              <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/allAssets" element={<AllAssets />} />
                  <Route path="/details/:id" element={<AssetDetailsPage />} />
                  <Route path="/creators" element={<Creators />} />
                  <Route path="/creators/:id" element={<CreatorProfile />} />
                  <Route path="/auctions" element={<AuctionPage />} />
                  <Route path="/auction/:id" element={<AuctionDetailPage />} />
              </Routes>
          </div>
      </Router>
  );
};

export default App;
