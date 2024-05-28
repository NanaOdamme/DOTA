import { useState, useEffect } from 'react';
import React from 'react';
import creatorsData from './creators.json';
import Assets from './db.json';
import { useParams } from 'react-router-dom';
import Footer from './Footer'
import { Link } from 'react-router-dom';

const CreatorProfile = () => {
    const { id } = useParams(); 
    const creator = creatorsData.creators.find(creator => creator.id === parseInt(id));
    const [creators, setCreators] = useState(creatorsData);
    const [assets, setAssets] = useState([]);
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
      
    useEffect(() => {
        const creatorAssets = Assets.assets.filter(asset => asset['creator-id'] === parseInt(id));
        setAssets(creatorAssets);
    }, [id]);

    if (!creator) {
        return <div>Creator not found</div>;
    }


    const [activeTab, setActiveTab] = useState('about');

    const showContent = (id) => {
        setActiveTab(id);
    };


   
     const handleFollow = () => {
        const updatedCreators = { ...creators };
        const creatorToUpdate = updatedCreators.creators.find(creator => creator.id === parseInt(id));
        if (creatorToUpdate) {
            creatorToUpdate.Followers++;
            setCreators(updatedCreators);
        }
    };

    return (
        <section className="dark:bg-black pt-10">
            <section className="header flex justify-between px-10 pt-20">
                <div className="send-back">
                <Link to="/creators">
              <i className="dark:text-white text-4xl hover:text-cyan-300 bi bi-back"></i>
            </Link>
                </div>
            </section>

            <section className="creator-info mb-5">
          
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 p-2">
                
                    <div className="div1 p-6 mt-10 dark:text-white">
                        <h1 className="mb-4 font-bold text-6xl">{creator.name}</h1>
                        <p className="text-purple-400">@{creator.username}</p>
                        <p className="mb-4 dark:text-white">{creator['h-text']}</p>
                        <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-6">
                        <button className="bg-cyan-400 w-28 h-10 px-8 hover:bg-purple-800 font-bold py-2 rounded-full" onClick={handleFollow}>Follow</button>
                        <p className='hover:text-yellow-400  font-bold text-2xl text-cyan-400'>{creator.Followers} Followers</p>
                        </div>
                        <ul className="flex-col mt-10 dark:text-white">
                        <li>
                                <button className={`mx-8 ${activeTab === 'about' && 'active'}`} onClick={() => showContent('about')}>About</button>
                            </li>
                            <li>
                                <button className={`mx-8 ${activeTab === 'contact-info' && 'active'}`} onClick={() => showContent('contact-info')}>Contact</button>
                            </li>
                            <li>
                                <button className={`mx-8 ${activeTab === 'works' && 'active'}`} onClick={() => showContent('works')}>Assets</button>
                            </li>
                        </ul>
                        <div className="shadow-lg mt-10 dark:bg-zinc-900 bg-purple-500 rounded-lg p-4">
                            <div id="about" className={`dark:bg-gray-800 bg-purple-300 dark:text-white p-2 rounded-lg ${activeTab === 'about' ? '' : 'hidden'}`}>
                                <h2 className=" p-2 font-bold dark:text-cyan-400 text-3xl">About {creator.name}</h2>
                                <p className="mt-3 p-2"> {creator.Bio}</p>
                                <div className="flex justify-between">
                                    <p className="text-1xl mt-1 dark:text-cyan-400"> <i className="bi bi-heart"></i> {creator.Likes} </p>
                                    <p className="text-1xl mt-1 dark:text-cyan-400">Sales : {creator.Sales}</p>
                                    <p className="text-1xl mt-1 dark;text-cyan-400">Tokens: {creator.tokens}  <i className="bi bi-coin"></i></p>
                                </div>
                            </div>
                            <div id="contact-info" className={`${activeTab === 'contact-info' ? '' : 'hidden'}`}>
                            <h1 class="mx-3 mb-5 text-3xl font-bold">Get In Touch With {creator.name}</h1>
                                <i className="mx-3 dark:text-cyan-400 text-2xl hover:text-cyan-200 bi bi-twitter-x"></i>
                                <i className="mx-3 dark:text-cyan-400 text-2xl hover:text-cyan-200 bi bi-facebook"></i>
                                <i className="mx-3 dark:text-cyan-400 text-2xl hover:text-cyan-200 bi bi-whatsapp"></i>
                                <i className="mx-3 dark:text-cyan-400 text-2xl hover:text-cyan-200 bi bi-envelope"></i>
                            </div>
                            <div id="works" className={`${activeTab === 'works' ? '' : 'hidden'}`}>
                             <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2 ">
                                {assets.map(asset => (
                                    <Link to={`/details/${asset.id}`} key={asset.id} className="asset-link">
                                    <div key={asset.id} className="p-4 dark:bg-gray-800 bg-purple-300 rounded-lg">
                                        <img src={asset['asset-image']} alt={asset.title} className="w-64 h-64 rounded-lg" />
                                        <h3 className="mt-2 text-sm dark:text-white">{asset.title}</h3>
                                    </div>
                                    </Link>
                                ))}
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="image">
                        <img src={creator.image} className="shadow-lg rounded-lg w-full border border-2 border-zinc-900" alt="" style={{height: 700}} />
                    </div>
                </div>
           
            </section>

            <Footer />
        </section>
    );
};

export default CreatorProfile;
