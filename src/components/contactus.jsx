import React, { useState, useEffect } from 'react';
import Footer from './Footer.jsx';

const ContactUs = () => {
    const [isOpen, setIsOpen] = useState({});
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  const toggleAnswer = (id) => {
    setIsOpen(prevState => ({
      ...prevState,
      [id]: !prevState[id]
    }));
  };
  
  const [rating, setRating] = useState(null);
  const [feedback, setFeedback] = useState('');

  const handleRatingChange = (event) => {
    setRating(parseInt(event.target.value));
  };

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Rating:', rating);
    console.log('Feedback:', feedback);
    // handle feed back to backend here
  };

    return (
        <section className="contactus pt-20 dark:bg-black">
            <div className='bg mb-10 dark:bg-zinc-700 bg-rose-300 w-full p-4 h-96 flex justify-center items-center text-center'>
                <div className='background-hero dark:text-white'>
             <h1 className='text-5xl mb-5 animated-text'>Get in touch</h1>
             <p>Reach out to us for enquiries. Get answers to frequently asked questions</p>
             <p>Feel free to send feedbacks concerning our services</p>
            </div>
            </div>
        <div className="form p-9 flex justify-center items-center shadow-lg">
           <form className="shadow-lg  w-full lg:w-1/2 dark:bg-white dark:text-black bg-blue-500 p-10 rounded-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-6">
                <div className='flex flex-col'>
            <label htmlFor="name" className='font-bold'>Name:</label>
            <input type="text" className='border border-black rounded p-2' placeholder='name' required />
            </div>
            <div className='flex flex-col'>
            <label htmlFor="email" className='font-bold'>Email:</label>
            <input type="text" className='border border-black rounded p-2' placeholder='email...' required/>
            </div>
            <div className='flex flex-col'>
            <label htmlFor="number" className='font-bold'>Phone Number:</label>
            <input type="email" className='border border-black rounded p-2' placeholder='020 2345 456' required/>
            </div>
            <div className='flex flex-col'>
            <label htmlFor="subject" className='font-bold'>Subject:</label>
            <input type="text" className='border border-black rounded p-2' placeholder='title...' required/>
            </div>
           
            </div>
            <div className='mt-5 flex flex-col'>
            <label htmlFor="message" className='font-bold'>Message:</label>
            <textarea type="text" className='border border-black rounded p-2' placeholder='message here' required/>
            </div>
            <div className='mt-5 flex justify-start'>
                <button className='bg-zinc-800 text-white rounded-full font-bold py-2 px-8 hover:bg-zinc-500 '>Send Message</button>
            </div>
           </form>
        </div>

        <div className="mostasked text-white lg:px-20 px-7 ">
      <h1 className='text-3xl text-center mt-5 mb-5 text-black dark:text-white'>Frequently Asked Questions</h1>
      <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-6'>
        <div className='faq dark:bg-zinc-900 bg-yellow-600 py-2 px-3 border border-white  rounded '>
            <div className="flex justify-between">
          <h1 className='text-1xl'>How do I create an account?</h1>
          <i class="text-white bi bi-arrow-down lg:ml-20"  onClick={() => toggleAnswer('faq1')}></i>
          </div>
          {isOpen['faq1'] && <p>To create an account, click on the sign up button on the top right corner of the page. Fill in your details and submit.</p>}
        </div>
        <div className='faq dark:bg-zinc-900 bg-yellow-600 py-2 px-3 border border-white  rounded '>
            <div className="flex justify-between">
          <h1 className='text-1xl'>How do I reset my password?</h1>
          <i class="text-white bi bi-arrow-down"  onClick={() => toggleAnswer('faq2')}></i>
          </div>
          {isOpen['faq2'] && <p>To reset your password, click on the forgot password link on the sign in page. Enter your email and a reset link will be sent to you.</p>}
        </div>
        <div className='faq dark:bg-zinc-900 bg-yellow-600 py-2 px-3 border border-white  rounded '>
            <div className="flex justify-between">
          <h1 className='text-1xl'>How do I make a payment?</h1>
          <i class="text-white bi bi-arrow-down"  onClick={() => toggleAnswer('faq3')}></i>
          </div>
          {isOpen['faq3'] && <p>To make a payment, click on the payment link on the top right corner of the page. Fill in your details and submit.</p>}
        </div>
        <div className='faq dark:bg-zinc-900 bg-yellow-600 py-2 px-3 border border-white  rounded '>
            <div className="flex justify-between">
          <h1 className='text-1xl' >How do I contact support?</h1>
          <i class="text-white bi bi-arrow-down"  onClick={() => toggleAnswer('faq4')}></i>
          </div>
          {isOpen['faq4'] && <p>To contact support, click on the contact us link on the top right corner of the page. Fill in your details and submit.</p>}
        </div>
      </div>
    </div>

    <div className="mt-20 reviews w-full lg:w-1/2  mx-auto p-6 dark:bg-zinc-800 bg-rose-800 mt-10 text-white rounded-md shadow-md">
      <h1 className="text-2xl font-bold mb-4">Rate Our Service</h1>
      <p className="mb-4">We would love to hear your feedback on our service. Please rate us and leave a comment below.</p>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="rating" className="block text-sm font-medium text-gray-200">
            Rate from 1 to 5:
          </label>
          <input
            type="number"
            id="rating"
            min="1"
            max="5"
            value={rating}
            onChange={handleRatingChange}
            className="text-black p-2 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="feedback" className="block text-sm font-medium text-gray-200">
            Feedback:
          </label>
          <textarea
            id="feedback"
            value={feedback}
            onChange={handleFeedbackChange}
            rows="4"
            className= " text-black mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-cyan-400 hover:bg-cyan-700 text-white font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Submit
        </button>
      </form>
    </div>
        <Footer />
    </section>
    );
};

export default ContactUs;