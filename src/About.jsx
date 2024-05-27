import React, { useEffect, useState } from 'react';
import Footer from './Footer.jsx';
import { Link } from 'react-router-dom';
function About() {
  const [years, setYears] = useState(0);
  const [projects, setProjects] = useState(0);
  const [clients, setClients] = useState(0);

  useEffect(() => {
    const yearsTarget = 5;
    const projectsTarget = 50;
    const clientsTarget = 100;

    const interval = setInterval(() => {
      setYears((prev) => Math.min(prev + 1, yearsTarget));
      setProjects((prev) => Math.min(prev + 1, projectsTarget));
      setClients((prev) => Math.min(prev + 1, clientsTarget));
    }, 50);

    return () => clearInterval(interval);
  }, []);


  return (
    <div className="pt-20 bg-gray-100 dark:bg-zinc-950  text-gray-900">
      <section className="dark:bg-gradient-r dark:from-zinc-900 dark:to-zinc-700 mx-5 lg:mx-16 p-6 bg-gradient-to-r from-indigo-500 to-purple-700 rounded-lg shadow-lg">
        <div className="items-center flex flex-wrap">
          <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
            <img
              alt="About Us"
              className="max-w-full rounded-lg shadow-lg"
              src="/assets/img/front page.jpg"
            />
          </div>
          <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
            <div className="md:pr-12 center">
              <h1 className="text-3xl text-white font-bold mb-4 text-center main-section-text">
                About Us
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-gray-200">
                Dota is a dynamic online platform that empowers creators to showcase and sell their digital assets while providing buyers with the opportunity to purchase or bid on a wide range of high-quality products.
                <br />
                Whether you're a creator looking to monetize your work or a buyer seeking unique assets, Dota offers a vibrant marketplace for digital creativity and commerce.
              </p>
              <br />
              <p className="text-gray-300 mb-4">
                We are committed to fostering a community that values innovation, transparency, and the transformative power of digital ownership. Join us on this exciting journey into the world of NFTs.
              </p>
              <div className="flex">
                <Link to="/contact" className="text-white text-lg">
                <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Contact Us
                </button>
                </Link>
              </div>
              <br />
              <div className="flex space-x-4">
                <a href="#" className="text-gray-200 text-2xl">
                <i className="bi bi-twitter-x"></i>
                </a>
                <a href="#" className="text-gray-200 text-2xl">
                <i className="bi bi-facebook"></i>
                </a>
                <a href="#" className="text-gray-200 text-2xl">
                <i className="bi bi-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="  py-16 text-center text-black flex flex-col lg:flex-row items-center shadow-lg rounded-lg overflow-hidden">
        <div className="container mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl dark:text-white font-bold">Our Team</h2>
          </div>
          <div className="grid gap-8 lg:mx-20 sm:grid-cols-2 lg:grid-cols-2">
            <div className="rounded-lg p-6 transform transition-transform hover:scale-105 bg-gray-800">
              <img src="assets/img/King.png" alt="King Annor" className="object-cover rounded-t-lg mb-4" />
              <h3 className="text-2xl font-bold text-white">King Annor</h3>
              <h5 className="text-lg font-semibold text-gray-300 mb-4">Front-end Developer</h5>
              <div className="flex justify-center space-x-4">
                <a href="https://twitter.com/kingbygone" className="text-white text-2xl">
                <i className="bi bi-twitter-x"></i>
                </a>
                <a href="https://facebook.com/iamkingbygone" className="text-white text-2xl">
                <i className="bi bi-facebook"></i>
                </a>
                <a href="https://instagram.com/kingbygone" className="text-white text-2xl">
                <i className="bi bi-instagram"></i>
                </a>
              </div>
            </div>
            <div className=" rounded-lg p-6 transform transition-transform hover:scale-105 bg-gray-800">
              <img src="/assets/img/Ako.png" alt="Nana Akosua" className="object-cover rounded-t-lg mb-4" />
              <h3 className="text-2xl font-bold text-white">Nana Akosua</h3>
              <h5 className="text-lg font-semibold text-gray-300 mb-4">Back-end Developer</h5>
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-white text-2xl">
                <i className="bi bi-twitter-x"></i>
                </a>
                <a href="#" className="text-white text-2xl">
                <i className="bi bi-facebook"></i>
                </a>
                <a href="#" className="text-white text-2xl">
                <i className="bi bi-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto p-6">
          <div className="flex flex-col lg:flex-row items-center bg-white dark:bg-zinc-900 dark:text-white shadow-lg rounded-lg overflow-hidden mb-8 lg:h-80 lg:mx-20">
            <div className="w-full lg:w-1/2 p-8">
              <h2 className="text-3xl font-bold mb-4 text-center">Mission</h2>
              <p className="text-gray-700 dark:text-gray-100 mb-4">
                Our mission is to revolutionize the art world by leveraging blockchain technology to ensure authenticity, ownership, and transparency. We aim to empower artists by providing them with a platform to showcase and monetize their work globally.
              </p>
            </div>
            <div className="w-full lg:w-1/2">
              <img src="assets/img/Mission.jpg" alt="Mission" className="object-cover w-full h-80 lg:h-full img-size rounded-r-lg" />
            </div>
          </div>
        </div>

        <div className="container mx-auto p-6 ">
          <div className="flex flex-col lg:flex-row-reverse items-center bg-white dark:bg-zinc-900 dark:text-white shadow-lg rounded-lg overflow-hidden mb-8 lg:h-80 lg:mx-20">
            <div className="w-full lg:w-1/2 p-8">
              <h2 className="text-3xl font-bold mb-4 text-center">Vision</h2>
              <p className="text-gray-700 dark:text-gray-100 mb-4">
                Our vision is to become the leading NFT marketplace, fostering a vibrant ecosystem where digital art and collectibles are accessible to everyone. We envision a future where NFTs are a standard part of the digital economy.
              </p>
            </div>
            <div className="w-full lg:w-1/2">
              <img src="assets/img/Vision.jpg" alt="Vision" className="object-cover w-full h-80 lg:h-full img-size rounded-l-lg" />
            </div>
          </div>
        </div>

        <div className="container mx-auto p-6">
          <div className="flex flex-col lg:flex-row items-center bg-white dark:bg-zinc-900 dark:text-white shadow-lg rounded-lg overflow-hidden mb-8 lg:h-80 lg:mx-20">
            <div className="w-full lg:w-1/2 p-8">
              <h2 className="text-3xl font-bold mb-4 text-center">History</h2>
              <p className="text-gray-700 dark:text-gray-100 mb-4">
                Founded in 2022, our NFT platform was born out of a passion for digital art and blockchain technology. We started with a small team of dedicated enthusiasts and quickly grew into a thriving community of creators and collectors.
              </p>
            </div>
            <div className="w-full lg:w-1/2">
              <img src="assets/img/History.jpg" alt="History" className="object-cover w-full h-80 lg:h-full img-size rounded-r-lg" />
            </div>
          </div>
        </div>

        <div className="container mx-auto p-6">
          <div className="flex flex-col lg:flex-row-reverse dark:text-white items-center bg-white dark:bg-zinc-900 shadow-lg rounded-lg overflow-hidden mb-8 lg:h-80 lg:mx-20">
            <div className="w-full lg:w-1/2 p-8">
              <h2 className="text-3xl font-bold mb-4 text-center">Values</h2>
              <p className="text-gray-700 dark:text-gray-100 mb-4">
                We value creativity, innovation, and community. Our platform is built on the principles of transparency, security, and inclusivity, ensuring a trustworthy and welcoming environment for all users.
              </p>
            </div>
            <div className="w-full lg:w-1/2">
              <img src="assets/img/Values.jpg" alt="Values" className="object-cover w-full h-80 lg:h-full img-size rounded-l-lg" />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-500  dark:bg-purple-900 py-12 md:py-6">
        <div className="py-12 md:py-6">
          <div className="flex flex-wrap justify-center mb-6 md:mb-3">
            <div className="w-full md:w-1/2 xl:w-1/3 p-4 text-center">
              <h2 className="text-2xl font-bold text-white mb-2">{years}+</h2>
              <p className="text-lg text-gray-200">Years of Experience</p>
            </div>
            <div className="w-full md:w-1/2 xl:w-1/3 p-4 text-center">
              <h2 className="text-2xl font-bold text-white mb-2">{projects}+</h2>
              <p className="text-lg text-gray-200">Projects Completed</p>
            </div>
            <div className="w-full md:w-1/2 xl:w-1/3 p-4 text-center">
              <h2 className="text-2xl font-bold text-white mb-2">{clients}+</h2>
              <p className="text-lg text-gray-200">Happy Clients</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default About;
