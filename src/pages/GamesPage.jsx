import React from 'react';
import NewDeals from "../components/NewDeals";

const GamesPage = ({ addToWishlist }) => {
    return (
        <div>
        <NewDeals onAddToWishlist={addToWishlist}/>
        </div>
    );
}

export default GamesPage;