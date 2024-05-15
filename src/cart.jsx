import React, { useState } from 'react';

const CartPopup = ({ setIsCartOpen }) => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Asset 1', price: 10, quantity: 1 },
    { id: 2, name: 'Asset 2', price: 15, quantity: 1 },
  ]);

  const handleClose = () => {
    setIsCartOpen(false);
  };

  const handleRemove = (itemId) => {
    const updatedCartItems = cartItems.filter(item => item.id !== itemId);
    setCartItems(updatedCartItems);
  };

  const handleAdd = (itemId) => {
    const updatedCartItems = cartItems.map(item => {
      if (item.id === itemId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  const handleReduce = (itemId) => {
    const updatedCartItems = cartItems.map(item => {
      if (item.id === itemId && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-screen flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-zinc-900 rounded-lg p-8 w-96">
        <div className="flex justify-end">
          <button className="text-gray-400 hover:text-gray-500" onClick={handleClose}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <h2 className="text-2xl font-bold mb-4 text-cyan-400">Your Cart</h2>
        {cartItems.length === 0 ? (
          <p className="text-gray-500 text-center">You have no items in your cart</p>
        ) : (
          <div>
            {/* Cart Items */}
            {cartItems.map((item) => (
              <div key={item.id} className="border-b border-gray-300 pb-4 mb-4">
                <p className="text-lg font-medium">{item.name}</p>
                <p className="text-sm text-gray-500">Price: ${item.price}</p>
                <div className="flex justify-end">
                  <button className="text-cyan-400 mr-2" onClick={() => handleReduce(item.id)}>-</button>
                  <span className="mr-2">{item.quantity}</span>
                  <button className="text-cyan-400 mr-2" onClick={() => handleAdd(item.id)}>+</button>
                  <button className="text-red-500" onClick={() => handleRemove(item.id)}><i class="bi bi-trash3"></i></button>
                </div>
              </div>
            ))}
            {/* Total */}
            <div className="flex justify-between items-center mt-4">
              <p className="text-lg font-bold">Total:</p>
              <p className="text-lg font-bold text-cyan-400">${cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0)}</p>
            </div>
            {/* Checkout Button */}
            <button className="bg-cyan-400 text-white rounded-md px-4 py-2 mt-6 block w-full text-center hover:bg-cyan-500 transition duration-300" onClick={() => setIsCartOpen(false)}>
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPopup;
