import React, { useState } from 'react';
import { Link } from 'react-router-dom'

const Help = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [complaint, setComplaint] = useState('');

  const handleSearch = () => {
    // Implement search functionality here
    console.log('Search query:', searchQuery);
  };

  const handleSubmitComplaint = () => {
    // Implement complaint submission logic here
    console.log('Complaint submitted:', complaint);
    setComplaint('');
  };

  return (
   <div className="pt-20 min-h-screen dark:bg-zinc-700 dark:text-white bg-gray-100 ">
    <div className='p-4 w-full  items-center justify-center'>
      <div className="bg-white p-8 rounded-lg shadow-lg ">
        <h1 className="text-3xl text-rose-800 font-bold mb-4">Help Center</h1>
        <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 mb-4">
          <input
            type="text"
            placeholder="Search for help..."
            className="text-rose-800 flex-1 outline-none px-2"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            className="-ml-7 flex items-center justify-center bg-blue-500 text-white rounded-lg p-2 hover:bg-blue-600"
            onClick={handleSearch}
          >
            <i class="bi bi-search"></i>
          </button>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Submit a Complaint</h2>
          <textarea
            placeholder="Describe your issue or complaint..."
            className="text-rose-800 w-full border border-gray-300 rounded-lg p-2 resize-none"
            rows={5}
            value={complaint}
            onChange={(e) => setComplaint(e.target.value)}
          />
          <button
            className="mt-2 bg-red-500 text-white rounded-lg px-4 py-2 hover:bg-red-600"
            onClick={handleSubmitComplaint}
          >
            <i class="bi bi-exclamation-lg mr-2"></i>
            Submit
          </button>
        </div>
        <p className="text-gray-500 text-sm">
          Need further assistance? Contact support@example.com
        </p>
      </div>
      </div>
      <div className="p-5">
      <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Frequently Asked Questions</h2>
          <p className="dark:text-white text-gray-600">
            Check out our FAQs section for answers to common questions.
          </p>
          <Link to='/faqs'
           
            className="text-blue-500 hover:underline mt-2 block"
          >
            View FAQs
          </Link>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Contact Support</h2>
          <p className="dark:text-whitetext-gray-600">
            For further assistance, you can contact our support team via email.
          </p>
          <a
            href="mailto:ronstyles@gmail.com"
            className="text-blue-500 hover:underline mt-2 block"
          >
            dotasupport@gmail.com
          </a>
        </div>
        </div>
    </div>
  );
};

export default Help;
