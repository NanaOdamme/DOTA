import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Header from './components/Header';
import HomePage from './components/First-page.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import AllAssets from './components/AllAssets.jsx';
import AssetDetailsPage from './components/AssetDetailsPage.jsx';
import Creators from './components/AllCreators.jsx';
import CreatorProfile from './components/creatorsid.jsx';
import AuctionPage from './components/Auction.jsx';
import AuctionDetailPage from './components/AuctionDetailPage.jsx';
import Login from './components/login.jsx';
import Register from './components/register.jsx';
import ContactUs from './components/contactus.jsx';
import Checkout from './components/checkout.jsx';
import Pro from './components/pro.jsx';
import Watchlist from './components/whatchlist.jsx'
import { BookmarkProvider } from './Context/BookmarkContext';
import UserProfile from './components/userProfile.jsx';
import Deals from './components/deals-page.jsx';
import Learn from './components/learnpage.jsx';
import Cart from './components/cart.jsx';
import { CartProvider } from './Context/CartContext';
import Help from './components/helppage.jsx'
import FAQsList from './components/faqs.jsx';
import { BidsProvider } from './Context/BidsContext';
import BidsPage from './components/BidsPage.jsx';
import TermsAndPrivacy from './components/terms.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NotificationsPage from './components/notifications.jsx';
import NotificationInterval from './utils/NotificationInterval.jsx';
import DisableRightClick from './utils/PrintScreen.jsx';
import PreventMobileScreenshots from './utils/PreventMobileScreenshots';
const App = () => {
    return (
        <BidsProvider>
            <CartProvider>
                <BookmarkProvider>
                    <Router>
                        <div>
                            <Header />
                            <DisableRightClick />
                            <PreventMobileScreenshots />
                            <ToastContainer />
                            <NotificationInterval /> {/* Add the interval component */}
                            <Routes>
                                <Route path="/" element={<HomePage />} />
                                <Route path="/home" element={<Home />} />
                                <Route path="/about" element={<About />} />
                                <Route path="/contact" element={<ContactUs />} />
                                <Route path="/allAssets" element={<AllAssets />} />
                                <Route path="/details/:id" element={<AssetDetailsPage />} />
                                <Route path="/creators" element={<Creators />} />
                                <Route path="/creators/:id" element={<CreatorProfile />} />
                                <Route path="/auctions" element={<AuctionPage />} />
                                <Route path="/auction/:id" element={<AuctionDetailPage />} />
                                <Route path="/login" element={<Login />} />
                                <Route path="/register" element={<Register />} />
                                <Route path="/checkout" element={<Checkout />} />
                                <Route path='/pro' element={<Pro />} />
                                <Route path='/watchlist' element={<Watchlist />} />
                                <Route path="/profile" element={<UserProfile />} />
                                <Route path="/deals" element={<Deals />} />
                                <Route path='/learn' element={<Learn />} />
                                <Route path="/cart" element={<Cart />} />
                                <Route path='/help' element={<Help />} />
                                <Route path='/faqs' element={<FAQsList />} />
                                <Route path='/mybids' element={<BidsPage />} />
                                <Route path='/terms' element={<TermsAndPrivacy />} />
                                <Route path='/notification' element={<NotificationsPage />} />
                            </Routes>
                        </div>
                    </Router>
                </BookmarkProvider>
            </CartProvider>
        </BidsProvider>
    );
};

export default App;
