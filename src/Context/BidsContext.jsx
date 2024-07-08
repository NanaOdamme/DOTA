import React, { createContext, useContext, useReducer, useEffect } from 'react';

const BidsContext = createContext();

const bidsReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_BIDS':
      return [...state, action.payload];
    case 'REMOVE_FROM_BIDS':
      return state.filter(asset => asset.id !== action.payload);
    case 'CLEAR_BIDS':
      return [];
    default:
      return state;
  }
};

const initializeBids = () => {
  const storedBids = localStorage.getItem('bids');
  return storedBids ? JSON.parse(storedBids) : [];
};

export const BidsProvider = ({ children }) => {
  const [bids, dispatch] = useReducer(bidsReducer, [], initializeBids);

  useEffect(() => {
    localStorage.setItem('bids', JSON.stringify(bids));
  }, [bids]);

  const addToBids = (asset) => {
    // Check if the asset is already in bids
    const isAssetInBids = bids.some((bid) => bid.id === asset.id);

    if (!isAssetInBids) {
      dispatch({ type: 'ADD_TO_BIDS', payload: asset });
      alert(`You bid on Asset ${asset.title}`);
    } else {
      // Handle duplicate asset scenario (optional)
      alert(`Asset ${asset.title} is already in bids.`);
    }
  };

  const removeFromBids = id => dispatch({ type: 'REMOVE_FROM_BIDS', payload: id });
  const clearBids = () => dispatch({ type: 'CLEAR_BIDS' });
  const updateBidAmount = (assetId, newBidAmount) => {
    dispatch({ type: 'UPDATE_BID_AMOUNT', payload: { id: assetId, bidAmount: newBidAmount } });
  };

  return (
    <BidsContext.Provider value={{ bids, addToBids, updateBidAmount, removeFromBids, clearBids }}>
      {children}
    </BidsContext.Provider>
  );
};

export const useBids = () => useContext(BidsContext);
