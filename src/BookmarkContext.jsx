import React, { createContext, useState, useContext } from 'react';

// Create a context for bookmarks
const BookmarkContext = createContext();

// Provider component that wraps around the parts of the app where you need access to the bookmark state
export const BookmarkProvider = ({ children }) => {
  // State to store the list of bookmarked assets
  const [bookmarkedAssets, setBookmarkedAssets] = useState([]);

  // Function to add an asset to the bookmark list
  const addBookmark = (asset) => {
    // Check if the asset is already bookmarked
    if (!bookmarkedAssets.some((bookmarkedAsset) => bookmarkedAsset.id === asset.id)) {
      setBookmarkedAssets((prev) => [...prev, asset]);
    }
  };

  // Function to remove an asset from the bookmark list by its id
  const removeBookmark = (id) => {
    setBookmarkedAssets((prev) => prev.filter((asset) => asset.id !== id));
  };

  return (
    // Provide the bookmark state and functions to the component tree
    <BookmarkContext.Provider value={{ bookmarkedAssets, addBookmark, removeBookmark }}>
      {children}
    </BookmarkContext.Provider>
  );
};

// Custom hook to use the BookmarkContext in other components
export const useBookmarks = () => useContext(BookmarkContext);
