import React, { useState } from 'react';
import { Link } from 'react-router-dom'

const CreateAndSellSection = () => {
  const [expandedTextIndex, setExpandedTextIndex] = useState(null);

  const handleTextClick = (index) => {
    setExpandedTextIndex(expandedTextIndex === index ? null : index);
  };

  const content = [
    {
      icon: 'bi bi-wallet2',
      title: 'Set up your Account',
      text: 'Log in to your new account using your email and password. Complete your profile by clicking on "My Profile" and adding a profile picture, bio, and links to your social media profiles or personal website. Finally, connect your cryptocurrency wallet (MetaMask, Trust Wallet, or Coinbase Wallet) by following the secure connection instructions provided.'
    },
    {
      icon: 'bi bi-boxes',
      title: 'Apply to Be a Creator',
      text: 'Navigate to the "Become a Creator" section in the main menu. Fill out the application form with details about your artistic background, a portfolio of your work, and a brief explanation of why you want to join our platform. After submission, wait for approval; you will receive an email notification within 3-5 business days if your application is accepted.'
    },
    {
      icon: 'bi bi-file-plus',
      title: 'Start Minting Your Digital Assets',
      text: 'Once approved, log in to your account and access your Creator Dashboard. Click on "Create Digital Asset" to upload your digital artwork, providing a title, description, and other relevant information. Choose your pricing model (fixed price or auction) and set your royalty percentage for secondary sales. Finally, review your details and click "Mint Digital Asset," then confirm the transaction in your connected wallet to complete the minting process.'
    },
    {
      icon: 'bi bi-card-list',
      title: 'Promote and Sell Your Digital Assets',
      text: 'Share your newly minted digital assets on social media and with your network to attract potential buyers. Engage with the community by participating in our forums, attending virtual events, and collaborating with other creators to increase your visibility and network within the platform.'
    },
  ];

  return (
    <section className="create-n-sell mb-10 px-10">
      <h1 className="mx-4 dark:text-blue-400">Be a creator</h1>
      <div className="flex justify-between">
        <h1 className="mx-4 mb-10 dark:text-white text-2xl">Create and sell your asset</h1>
        <Link to='/pro' className="mx-4 dark:text-white">Get started<i className="mx-6 bi bi-arrow-right"></i></Link>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 p-3">
        {content.map((item, index) => (
          <div key={index} className="bg-purple-300 text-black p-3 rounded-lg">
            <i className={`${item.icon} dark:text-purple-600 text-cyan-700 text-3xl mb-2`}></i>
            <h2 className="font-bold dark:text-purple-600 text-cyan-700 text-2xl mb-2">{item.title}</h2>
            <p className="text-zinc-700 cursor-pointer" onClick={() => handleTextClick(index)}>
              {expandedTextIndex === index ? item.text : `${item.text.substring(0, 100)}...`}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CreateAndSellSection;
