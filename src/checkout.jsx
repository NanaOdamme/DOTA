import React from 'react';

const Checkout = () => {
    return (
        <section className='pt-20 lg:px-20 p-5 bg-zinc-300 '>
        <div className="rounded-lg shadow-lg mx-auto bg-zinc-700   p-3 flex justify-center items-center shadow-lg">
           
         
         <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 p-5 lg:p-10 text-white'> 
              <form action="" className=' bg-zinc-900 p-5 rounded-lg shadow-lg'>
              <h1 className='text-2xl mb-5 font-bold'>Checkout</h1>
                <div className="grid grid-cols-4 gap-1 text-center ">
                    <div className=" cursor-pointer  mr-2   rounded px-5">
                    <img src="./visa.svg" alt="visa" className='w-full lg:w-10 lg:h-10'/>
                    </div>
                    <div className="text-center cursor-pointer   rounded px-5 mx-2">
                    <img src="./mtn.svg" alt="visa" className='w-full lg:w-10 lg:h-10'/>
                    </div>
                    <div className="cursor-pointer rounded px-5 mx-2">
                    <img src="./master.svg" alt="visa" className='w-full lg:w-10 lg:h-10'/>
                    </div>
                    <div className="cursor-pointer   rounded px-5 mx-2">
                    <img src="./paypal.svg" alt="visa" className='w-full lg:w-10 lg:h-10'/>
                    </div>
                    
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="name" className='text-sm font-bold'>Name on card</label>
                <input type="text" placeholder='John Doe' className='p-2 bg-zinc-700 mb-2 rounded mt-2 '/>
                </div>
                <div className='flex flex-col'>
                    <div className="flex justify-between">
                    <label htmlFor="name" className='text-sm font-bold'>Card Number</label>
                    <img src="https://img.icons8.com/color/48/000000/visa.png" alt="visa" className='w-10 h-10'/>
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                    <input type="text" placeholder='0000' className='p-2 bg-zinc-700  mb-2 rounded mt-1 '/>
                    <input type="text" placeholder='0000' className='p-2 bg-zinc-700  mb-2 rounded mt-1 '/>
                    <input type="text" placeholder='0000' className='p-2 bg-zinc-700  mb-2 rounded mt-1 '/>
                    <input type="text" placeholder='0000' className='p-2 bg-zinc-700  mb-2 rounded mt-1 '/>
                    </div>
                </div>
                
                <div className='grid grid-cols-2 mt-5 gap-4'>
                    <div className="flex flex-col">
                        <label htmlFor="date" className='text-sm font-bold'>Expiry Date</label>
                <input type="text" placeholder='Expiry Date' className='p-2 bg-zinc-700  mb-2 rounded mt-1'/>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="number" className='text-sm font-bold'>CVV CODE</label>
                <input type="text" placeholder='CVV' className='p-2 bg-zinc-700  mb-2 rounded mt-1'/>
                </div>
                </div>
                <div className="grid">
                <button type='submit' className='mb-5 mt-10 text-center bg-blue-500 font-bold py-2 px-20 rounded'>Pay</button>
                </div>
              </form>
           <div className="summary p-10  text-white bg-zinc-900 rounded-lg shadow-lg">
            <h1 className='text-center font-bold mb-5'>Payment Summary</h1>
            <hr className='mb-5'/>
            <p className='text-center text-gray-400 font-bold'>Orders</p>
           </div>
         </div>
         
        </div>
        </section>
    );
};

export default Checkout;