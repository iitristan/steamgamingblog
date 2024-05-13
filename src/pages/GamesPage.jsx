import React from 'react';
import GamesList from '../components/GamesList';

const GamesPage = ({ addToWishlist, searchQuery }) => {
    return (
        <div>
        <GamesList onAddToWishlist={addToWishlist} searchQuery={searchQuery}/>
        </div>
    );
}

export default GamesPage;