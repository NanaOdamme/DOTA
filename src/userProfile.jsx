import React, { useState } from "react";
import { Link } from "react-router-dom";

const UserProfile = () => {
    const [name, setName] = useState("Marvina Gary");
  const [username, setUsername] = useState("@fubr_yeah");
  const [bio, setBio] = useState("Passionate NFT enthusiast with a love for art, actively engaged in bidding and purchasing unique digital assets to enrich my collection.");
  
  const [editMode, setEditMode] = useState(false);

  const handleSave = () => {
    // Save changes to backend or update state as needed
    setEditMode(false); // Disable edit mode after saving
  };
  
  return (
    <>
    
      <section className="pb-10  profile-page pt-20 bg-sky-100 dark:bg-zinc-700 px-5 relative">
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:p-5">

        {/* frist grid has a crude. you can use the edit pen to edit name and bio */}
        <div className=" bg-white dark:bg-zinc-800 pb-10 rounded-lg shadow-lg"> 

        {/* Banner Image */}
        <div className="lg:h-80 mb-8 rounded-lg shadow-lg">
          <img
            src="assets/banner.jpg"
            alt="Banner"
            className="object-cover w-full h-full rounded-lg"
          />
          
        </div>
        {/* User Profile details */}
        <div className="flex dark:text-white -mt-20">
            <img
              src="assets/user (1).jpg"
              alt="Profile"
              className="transform object-cover w-32 h-32 lg:w-56 lg:h-56 rounded-full lg:mx-10 mx-5 lg:-mt-10 border-4 border-cyan-500"
            />
            <div className="flex flex-col justify-center mt-14">
              {/* Editable Fields */}
              {editMode ? (
                <>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    
                    className="border rounded-lg w-24 p-2 font-bold text-2xl mb-2 dark:bg-zinc-700 dark:text-white"
                  />
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="border rounded-lg w-24 p-2 text-gray-500 mb-2 dark:bg-zinc-700 dark:text-white"
                  />
                </>
              ) : (
                <>
                  <h1 className="text-2xl font-bold">{name}</h1>
                  <p className="text-gray-500">{username}</p>
                </>
              )}
              {/* Display Mode: User Role */}
              <i className="text-gray-500">user</i>
            </div>
          </div>

        {/* User Profile details */}
        <div className="py-5 px-10 dark:text-white">
            <h1 className="font-bold">Tags <i class="mx-2 bi bi-tags"></i></h1>
            <div className="flex flex-wrap">
                <span className="bg-gray-200 dark:bg-zinc-600 text-gray-500 dark:text-white px-3 py-1 mt-2 rounded-full mx-1">#NFT</span>
                <span className="bg-gray-200 dark:bg-zinc-600 text-gray-500 dark:text-white px-3 py-1 mt-2 rounded-full mx-1">#photography</span>
                <span className="bg-gray-200 dark:bg-zinc-600 text-gray-500 dark:text-white px-3 py-1 mt-2 rounded-full mx-1">#Art</span>
                <span className="bg-gray-200 dark:bg-zinc-600 text-gray-500 dark:text-white px-3 py-1 mt-2 rounded-full mx-1">#Blockchain</span>
            </div>
            <div className="flex  items-center mt-10 mx-5">
                <div className="mr-5 flex flex-col items-center">
                <h1 className="font-bold">232</h1>
                <p className="text-gray-500">Bids</p>
                </div>
                <div className="mr-5 flex flex-col items-center">
                <h1 className="font-bold">12</h1>
                <p className="text-gray-500">Assets</p>
                </div>
                <div className="mr-5 flex flex-col items-center">
                <h1 className="font-bold">5</h1>
                <p className="text-gray-500">Patrons</p>
                </div>
            </div>
        </div>

        {/* User Profile details */}
        <div className="py-5 px-10 dark:text-white">
            <h1 className="font-bold">Bio <i class="mx-2 bi bi-info-circle"></i></h1>
            {editMode ? (
              <>
                <textarea
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  className="w-full h-32 mb-4 p-2 border border-gray-300 dark:border-zinc-500 rounded-lg resize-none focus:outline-none dark:bg-zinc-700 dark:text-white"
                />
              </>
            ) : (
              <p className="text-gray-500">{bio}</p>
            )}
       </div>
       
       {/* Edit and Save Button */}
       <div className="flex justify-end">
            {editMode ? (
              <button onClick={handleSave} className="edit dark:text-white">
                <i className="mx-2 text-2xl bi bi-check"></i>
              </button>
            ) : (
              <button onClick={() => setEditMode(true)} className="edit dark:text-white">
                <i className="mx-2 text-2xl bi bi-pen"></i>
              </button>
            )}
          </div>
        </div>

 
         {/* second grid  */}
         <div className="flex flex-col dark:text-white">
         <div className="h-96 bg-white dark:bg-zinc-800 pb-10 rounded-lg shadow-lg"> 
          <div className="flex mt-10">
            <img src="/assets/upgrade.svg" alt="pro" className="hidden md:block lg:block mx-10  w-72 h-72 rounded-full border border-2"/>
            <div className="mx-auto px-10 lg:px-2 mt-16">
                <h1 className="font-bold text-2xl  mb-5">Upgrade to Pro?</h1>
                <ul>
                    <li>
                        <i class=" bi bi-check2"></i> Access to exclusive NFTs and digital assets from top creators and artists around the world.
                    </li>
                    <li>
                        <i class=" bi bi-check2"></i> Early access to new features and updates.
                    </li>
                    <li>
                        <i class=" bi bi-check2"></i> Priority support from our dedicated team.
                    </li>
                    <li>
                        <i class=" bi bi-check2"></i> 30-day money-back guarantee.
                    </li>
                    <li>
                        <i class=" bi bi-check2"></i> Cancel anytime.
                    </li>
                    <Link to='/pro'>
                    <li>
                        <i class=" bi bi-check2"></i> <span className="text-cyan-500">Upgrade Now</span>
                    </li>
                    </Link>
                </ul>
            </div>
          </div>
         </div>
         <div className="mt-20 h-96 bg-white dark:bg-zinc-800 pb-10 rounded-lg shadow-lg"> 

         </div>
         </div>
        </div>
      </section>
    </>
  );
};

export default UserProfile;
