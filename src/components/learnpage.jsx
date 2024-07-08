import React, { useEffect } from 'react';
import Footer from './Footer'
const Learn = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <div className="min-h-screen dark:bg-zinc-800 bg-white pt-20">
      <section className='py-10 px-4'>
      <header className="mb-8">
        <h1 className="dark:text-cyan-300 text-4xl font-bold text-center text-gray-800">DOTA Assets Education Hub</h1>
      </header>

      <section className="mb-8">
        <h2 className="dark:text-gray-200 text-2xl font-semibold text-gray-700">Ways to Learn NFT Mining</h2>
        <p className="mt-4 dark:text-gray-100 text-gray-600">
          NFT mining involves the process of creating new NFTs. Learning about blockchain technology, smart contracts, and the specifics of the NFT marketplace is essential. Start with online courses, tutorials, and community forums.
        </p>
        <div className="mt-4">
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/Oz9zw7-_vhM" 
            title="YouTube video player" 
            className="w-full max-w-full rounded-lg shadow-md"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>
      </section>

      <section className="mb-8">
      <h2 className="dark:text-gray-200 text-2xl font-semibold text-gray-700">How to Create Digital Assets</h2>
 
    <div className="mt-4 ">
      <img src="/assets/learn.jpeg" alt="Digital art creation" className="w-full max-w-full h-96 rounded-lg shadow-md" />
    </div>
    <div className="">
      
<p className="dark:text-gray-100 mt-2 text-gray-600 mb-2">
  Creating digital assets involves designing and minting NFTs. As an artist or creator, you can follow these steps:
  
</p>
<ol className="dark:text-white">
    <li className='mb-2'>Conceptualize: Start by brainstorming ideas for your digital asset. What story or message do you want to convey?</li>
    <li className='mb-2'>Design: Use tools like Adobe Photoshop, Figma, or Illustrator to create your artwork. Pay attention to composition, color, and details.</li>
    <li className='mb-2'>Optimize: Ensure your digital asset is in the right format (e.g., PNG, JPEG) and resolution. Consider file size for faster loading.</li>
    <li className='mb-2'>Minting: Platforms like OpenSea, Rarible, or Mintable allow you to mint your digital art as NFTs. Minting involves creating a unique token on the blockchain.</li>
    <li className='mb-2'>Metadata: Provide metadata for your NFT, including a title, description, and attributes. This information enhances the value and uniqueness of your asset.</li>
    <li className='mb-2'>Gas Fees: Be aware of gas fees (transaction costs) associated with minting. These fees vary based on the blockchain network.</li>
    <li className='mb-2'>Marketplace: List your NFT on a marketplace. Engage with the community, promote your work, and consider pricing strategies.</li>
  </ol>
  </div>
</section>


      <section className="mb-8">
        <h2 className="dark:text-gray-200 text-2xl font-semibold text-gray-700">How to Be a Creator</h2>
        <p className="mt-4 dark:text-gray-100 text-gray-600">
          To become a successful creator, you need creativity, consistency, and an understanding of the market. Join creator communities, participate in NFT events, and constantly evolve your skills.
        </p>
        <div className="mt-4">
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/HnA75TAD-No" 
            title="YouTube video player" 
            className="w-full max-w-full rounded-lg shadow-md"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="dark:text-gray-200 text-2xl font-semibold text-gray-700">How to Bid</h2>
        <p className="mt-4 dark:text-gray-100 text-gray-600">
          Bidding on NFTs requires a digital wallet and an understanding of the bidding process on various platforms. Research the NFT you are interested in, set a budget, and follow the auction rules.
        </p>
        <div className="mt-4">
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/bnuY4pEOIA4" 
            title="YouTube video player" 
            className="w-full max-w-full rounded-lg shadow-md"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="dark:text-gray-200 text-2xl font-semibold text-gray-700">Featured Websites</h2>
        <ul className="mt-4 dark:text-gray-100 text-gray-600 list-disc list-inside">
          <li><a href="https://opensea.io" className="text-blue-500 hover:underline">OpenSea</a> - A popular marketplace for NFTs.</li>
          <li><a href="https://rarible.com" className="text-blue-500 hover:underline">Rarible</a> - Another platform for creating, selling, and buying NFTs.</li>
          <li><a href="https://foundation.app" className="text-blue-500 hover:underline">Foundation</a> - A community-curated marketplace for digital art.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="dark:text-gray-200 text-2xl font-semibold text-gray-700">YouTube Recommendations</h2>
        <ul className="mt-4 dark:text-gray-100 text-gray-600 list-disc list-inside">
          <li><a href="https://www.youtube.com/c/CoinBureau" className="text-blue-500 hover:underline">Coin Bureau</a> - Comprehensive guides on NFTs and cryptocurrencies.</li>
          <li><a href="https://www.youtube.com/c/GaryVee" className="text-blue-500 hover:underline">GaryVee</a> - Insights and tips on NFTs and digital assets.</li>
          <li><a href="https://www.youtube.com/c/Hashoshi4" className="text-blue-500 hover:underline">Hashoshi</a> - Blockchain and cryptocurrency education.</li>
        </ul>
      </section>
      </section>
      <Footer />
    </div>
  );
};

export default Learn;
