import React from 'react';
import { useCart } from './CartContext';


const Checkout = () => {
    const { cart, clearCart } = useCart();

    const handlePayNow = () => {
        console.log('Handling payment...');
        alert('Payment made successfully. You will receive a notification soon.');
        clearCart(); // Clear the cart
        window.location.href = '/home'; // Redirect to /home after clicking OK
    }; 

    const totalAmount = cart.reduce((sum, item) => sum + item['selling-prize'] * item.quantity, 0);
    
    return (
        <section className='pt-20 lg:px-20 p-5 dark:bg-zinc-800'>
            <div className="rounded-lg shadow-lg p-3 flex justify-center items-center">
                <div className='mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 p-5 lg:p-10 text-white'>
                    <form action="" className='dark:bg-zinc-900 bg-purple-300 dark:text-white text-black p-5 rounded-lg shadow-lg'>
                        <h1 className='text-2xl mb-5 font-bold'>Checkout</h1>
                        <div className="grid grid-cols-4 gap-1 text-center">
                            <div className="cursor-pointer mr-2 rounded px-5">
                                <img src="./visa.svg" alt="visa" className='w-full lg:w-10 lg:h-10' />
                            </div>
                            <div className="text-center cursor-pointer rounded px-5 mx-2">
                                <img src="./mtn.svg" alt="mtn" className='w-full lg:w-10 lg:h-10' />
                            </div>
                            <div className="cursor-pointer rounded px-5 mx-2">
                                <img src="./master.svg" alt="master" className='w-full lg:w-10 lg:h-10' />
                            </div>
                            <div className="cursor-pointer rounded px-5 mx-2">
                                <img src="./paypal.svg" alt="paypal" className='w-full lg:w-10 lg:h-10' />
                            </div>
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="name" className='text-sm font-bold'>Name on card</label>
                            <input type="text" placeholder='John Doe' className='p-2 dark:bg-zinc-700 mb-2 rounded mt-2' />
                        </div>
                        <div className='flex flex-col'>
                            <div className="flex justify-between">
                                <label htmlFor="card-number" className='text-sm font-bold'>Card Number</label>
                                <img src="https://img.icons8.com/color/48/000000/visa.png" alt="visa" className='w-10 h-10' />
                            </div>
                            <div className="grid grid-cols-4 gap-4">
                                <input type="text" placeholder='0000' className='p-2 dark:bg-zinc-700 mb-2 rounded mt-1' />
                                <input type="text" placeholder='0000' className='p-2 dark:bg-zinc-700 mb-2 rounded mt-1' />
                                <input type="text" placeholder='0000' className='p-2 dark:bg-zinc-700 mb-2 rounded mt-1' />
                                <input type="text" placeholder='0000' className='p-2 dark:bg-zinc-700 mb-2 rounded mt-1' />
                            </div>
                        </div>
                        <div className='grid grid-cols-2 mt-5 gap-4'>
                            <div className="flex flex-col">
                                <label htmlFor="expiry-date" className='text-sm font-bold'>Expiry Date</label>
                                <input type="text" placeholder='MM/YY' className='p-2 dark:bg-zinc-700 mb-2 rounded mt-1' />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="cvv" className='text-sm font-bold'>CVV CODE</label>
                                <input type="text" placeholder='CVV' className='p-2 dark:bg-zinc-700 mb-2 rounded mt-1' />
                            </div>
                        </div>
                        <div className="grid">
                            <button type='button' onClick={handlePayNow} className='mb-5 mt-10 text-center dark:bg-blue-500 bg-zinc-900 text-white font-bold py-2 lg:px-20 rounded'>Pay now</button>
                        </div>
                    </form>
                    <div className="summary p-10 dark:text-white text-black bg-purple-100 dark:bg-zinc-900 rounded-lg shadow-lg">
                        <h1 className='text-center font-bold mb-5'>Payment Summary</h1>
                        <hr className='mb-5 border border-b-black' />
                        <p className='text-center dark:text-gray-400 font-bold'>Orders</p>
                        {cart.map((item, index) => (
                            <div key={index}>
                                <div className="flex justify-between mt-5 mb-4">
                                    <h1 className='dark:text-gray-500 lg:text-2xl font-bold'>{item.title}</h1>
                                    <p className='dark:text-gray-500'>${(item['selling-prize'] * item.quantity).toFixed(2)}</p>
                                </div>
                                <hr className='mb-5 border border-b-black' />
                            </div>
                        ))}
                        <div className="flex justify-between mt-5 mb-4">
                            <h1 className='lg:text-3xl font-bold'>Total Amount To Pay:</h1>
                            <p className='lg:text-4xl text-2xl'>${totalAmount.toFixed(2)}</p>
                        </div>
                        
                    </div>
                </div>
            </div>
            
        </section>
    );
};

export default Checkout;
