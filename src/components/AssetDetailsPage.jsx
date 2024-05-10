import React from 'react';
import { useParams } from 'react-router-dom';
import Assets from '../db.json'; // Import your assets JSON
import AssetDetails from './AssetDetails';

const AssetDetailsPage = () => {
    const { id } = useParams();
    console.log('Params ID:', id); // Check if id is extracted correctly
    console.log('All Assets:', Assets.assets); // Check all assets data

    const asset = Assets.assets.find(asset => asset.id === parseInt(id));


    console.log('Found Asset:', asset); // Check the found asset

    return asset ? <AssetDetails asset={asset} /> : <div>Asset not found</div>;
}

export default AssetDetailsPage;
