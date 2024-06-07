import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import bgImage from './assets/help.gif';
import helpTopicsData from './support.json';
import Footer from './Footer'

const Help = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearchTerm(searchTerm);

    const results = helpTopicsData.filter((topic) =>
      topic.title.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  };

  return (
    <div className="pt-16 min-h-screen dark:bg-zinc-800 dark:text-white bg-gray-100">
      <div
        style={{ backgroundImage: `url(${bgImage})` }}
        className="relative h-96 bg-hero-pattern bg-cover bg-center flex items-center justify-center"
      >
        <div className="absolute inset-0 bg-cyan-400 dark:bg-purple-900 opacity-90 shadow-lg"></div>

        <div className="p-3 z-10 dark:text-white text-black text-center">
          <h1 className="text-4xl font-bold">Welcome to <br />DOTA HELP CENTER</h1>
          <p className="text-lg mt-4">Find All Your Answers Here!</p>
          <div className="mt-8">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearch}
              className="w-full p-2 rounded-full bg-white border  border-white placeholder-white::placeholder text-black focus:outline-none focus:border-primary focus:ring focus:ring-primary"
            />
          </div>
        </div>
      </div>

      <Link
        to="/faqs"
        className="text-center font-bold m-10 p-2 bg-red-500 rounded-lg shadowl-lg w-1/4 text-white hover:bg-cyan-400 mt-2 block"
      >
        View FAQs
      </Link>

      <div className="mt-10 mx-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {searchResults.length > 0
          ? searchResults.map((topic, index) => (
              <div
                key={index}
                className="cursor-pointer bg-white rounded-lg shadow-lg hover:bg-cyan-200 transform hover:scale-105 transition duration-300 ease-in-out"
              >
                <div className="flex">
                
                  <i
                    className={` text-rose-500 text-5xl p-3 font-bold ${topic.icon}`}
                  ></i>
                 
                  <div className="p-3">
                    <h1 className="font-bold text-cyan-700">{topic.title}</h1>
                    <p className="text-sm font-bold text-gray-500">
                      {topic.description}
                    </p>
                  </div>
                </div>
              </div>
            ))
          : helpTopicsData.map((topic, index) => (
              <div
                key={index}
                className="cursor-pointer bg-white rounded-lg shadow-lg hover:bg-cyan-200 transform hover:scale-105 transition duration-300 ease-in-out"
              >
                <div className="flex">
                  <i
                    className={`text-rose-500 text-5xl p-3 font-bold ${topic.icon}`}
                  ></i>
                  <div className="p-3">
                    <h1 className="font-bold text-cyan-700">{topic.title}</h1>
                    <p className="text-sm font-bold text-gray-500">
                      {topic.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
      </div>

      <div className="p-5">
        <h2 className="text-xl font-semibold mb-2">Contact Support</h2>
        <p className="dark:text-whitetext-gray-600">
          For further assistance, you can contact our support team via email.
        </p>
        <a href="mailto:ronstyles@gmail.com" className="text-blue-500 hover:underline mt-2 block">
          dotasupport@gmail.com
        </a>
      </div>
      <Footer />
    </div>
  );
};

export default Help;
