import React, { useState } from "react";
import { useGameCollection } from '../contexts/GameCollectionContext';

const GameCard = ({ game, onAddToWishlist, onRemoveFromWishlist, wishlistItems = [] }) => {
  const { addGameToCollection } = useGameCollection();
  const [selectedCollection, setSelectedCollection] = useState('');

  const isWishlisted = wishlistItems.some((item) => item.id === game.id);
  const handleClick = () => {
    if (isWishlisted) {
      onRemoveFromWishlist(game.id); 
    } else {
      onAddToWishlist(game);
    }
  };

  const handleAddToCollection = () => {
    if (selectedCollection) {
      addGameToCollection(selectedCollection, game);
    }
  };

  return (
    <article className="card rounded-lg shadow-md overflow-hidden">
      <img
        src={`${game.background_image}`} 
        alt={`Thumbnail of ${game.name} game`}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{game.name}</h3>
        <div className="flex justify-between items-center">
          <span className="text-green-600">{game.rating}</span>
          <span className="font-bold">{game.price}</span>
        </div>
        <div className="flex justify-between items-center mt-4">
          {game.short_screenshots.map((screenshot, index) => (
            <img
              key={index}
              src={screenshot.image}
              alt={`Screenshot ${index + 1}`}
              className="w-20 h-20 object-cover rounded-lg shadow-md"
            />
          ))}
        </div>
        <button
          onClick={handleClick}
          className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 w-full ${isWishlisted ? "bg-red-500" : "bg-blue-500"}`}
        >
          {isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
        </button>
        <select
          value={selectedCollection}
          onChange={(e) => setSelectedCollection(e.target.value)}
          className="mt-2"
        >
          <option value="">Select collection</option>
          {useGameCollection().collections.map(collection => (
            <option key={collection.name} value={collection.name}>
              {collection.name}
            </option>
          ))}
        </select>
        <button
          onClick={handleAddToCollection}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4 w-full"
        >
          Add to Collection
        </button>
      </div>
    </article>
  );
};

export default GameCard;