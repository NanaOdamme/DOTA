import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Header from './Header.jsx';
import HomePage from './First-page.jsx';
import Home from './Home.jsx';
import About from './About.jsx';
import AllAssets from './AllAssets.jsx';
import AssetDetailsPage from './AssetDetailsPage.jsx';
import Creators from './AllCreators.jsx';
import CreatorProfile from './creatorsid.jsx';
import AuctionPage from './Auction.jsx';
import AuctionDetailPage from './AuctionDetailPage.jsx';
import Login from './login.jsx';
import Register from './register.jsx';
import ContactUs from './contactus.jsx';
import Checkout from './checkout.jsx';
import Pro from './pro.jsx';
import Watchlist from './whatchlist.jsx'
import { BookmarkProvider } from './BookmarkContext';
import UserProfile from './userProfile.jsx';
import Deals from './deals-page.jsx';
import Learn from './learnpage.jsx';
import Cart from './cart.jsx';
import { CartProvider } from './CartContext';
import Help from './helppage.jsx'
import FAQsList from './faqs.jsx';
import { BidsProvider } from './BidsContext.jsx';
import BidsPage from './BidsPage.jsx';
import TermsAndPrivacy from './terms.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NotificationsPage from './notifications.jsx';
import NotificationInterval from './NotificationInterval.jsx'; // Create this component
import DisableRightClick from './PrintScreen.jsx';

const App = () => {
    return (
        <BidsProvider>
            <CartProvider>
                <BookmarkProvider>
                    <Router>
                        <div>
                            <Header />
                            <DisableRightClick />
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
