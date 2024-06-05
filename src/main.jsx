// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ThemeProvider } from './ThemeContext';
import { CartProvider } from './CartContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <CartProvider>
      <App />
    </CartProvider>
  </ThemeProvider>
);
