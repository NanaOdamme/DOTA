import React from 'react';
import { useCart } from './CartContext';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, removeFromCart, clearCart, increaseQuantity, decreaseQuantity } = useCart();

  const totalAmount = cart.reduce((sum, asset) => sum + asset['selling-prize'] * asset.quantity, 0);

  return (
    <section className="dark:bg-black bg-gray-100 pt-20 all">
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center dark:text-white">Your Cart</h1>
        {cart.length === 0 ? (
            <div className="empty text-center dark:text-white">
          <p className=" mt-10 ">Your cart is empty</p>
          <Link to='/allassets'>Add items <i class=" text-2xl bi bi-cart-plus"></i>
          </Link>
          </div>
        ) : (
          <div className="mt-10">
            <div className="flex justify-end mb-4">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded"
                onClick={clearCart}
              >
                Clear Cart
              </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {cart.map((asset) => (
                <div key={asset.id} className="bg-white dark:bg-zinc-900 p-4 rounded-lg shadow-lg">
                  <Link to={`/details/${asset.id}`}>
                    <img src={asset['asset-image']} alt={asset.title} className="w-full h-48 object-cover rounded-lg mb-4" />
                    <h2 className="text-2xl font-bold dark:text-white">{asset.title}</h2>
                  </Link>
                  <p className="text-lg dark:text-gray-400">{asset.creator}</p>
                  <p className="text-lg dark:text-gray-400">${asset['selling-prize']}</p>
                  <div className="flex items-center mt-2">
                    <button
                      className="bg-blue-500 text-white px-3 py-1 rounded mr-2"
                      onClick={() => decreaseQuantity(asset.id)}
                    >
                      -
                    </button>
                    <p className="mx-2 text-lg dark:text-white">{asset.quantity}</p>
                    <button
                      className="bg-blue-500 text-white px-3 py-1 rounded ml-2"
                      onClick={() => increaseQuantity(asset.id)}
                    >
                      +
                    </button>
                  </div>
                  <div className='flex justify-end'>
                  <button
                    className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
                    onClick={() => removeFromCart(asset.id)}
                  >
                    <i class="bi bi-trash3"></i>
                  </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 text-right">
              
              
            </div>
            <div className="summary p-10 dark:text-white text-black bg-purple-100 dark:bg-zinc-900 rounded-lg shadow-lg mt-10">
              <h1 className='text-center font-bold mb-5'>Payment Summary</h1>
              <hr className='mb-5 border border-b-black'/>
              <p className='text-center dark:text-gray-400 font-bold'>Orders</p>
              {cart.map((asset, index) => (
                <div key={index}>
                  <div className="flex justify-between mt-5 mb-4">
                    <h1 className='dark:text-gray-500 lg:text-2xl font-bold'>{asset.title}</h1>
                    <p className='dark:text-gray-500'>${(asset['selling-prize'] * asset.quantity).toFixed(2)}</p>
                  </div>
                  <hr className='mb-5 border border-b-black'/>
                </div>
              ))}
              <div className="flex justify-between mt-5 mb-4">
                <h1 className=' lg:text-3xl font-bold'>Total</h1>
                <p className='lg:text-4xl text-2xl'>${totalAmount.toFixed(2)}</p>
              </div>
              <div className="flex justify-center mt-5">
                <Link to='/checkout'>
                <button className='bg-blue-500 text-white font-bold py-2 lg:px-20 px-5 rounded'>Checkout</button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </section>
  );
};

export default Cart;
