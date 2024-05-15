import { useState, useEffect } from 'react';
import GamesList from '../components/GamesList';
import PopularGames from '../components/PopularGames';
const GamesPage = ({ addToWishlist, searchQuery }) => {
  return (
      <div>
      <PopularGames onAddToWishlist={addToWishlist} />
      <GamesList onAddToWishlist={addToWishlist} searchQuery={searchQuery}/>
      </div>
  );
}

export default GamesPage;