import React, { useState } from "react";
import { useGameCollection } from "../contexts/GameCollectionContext";

const GameCard = ({
  game,
  onAddToWishlist,
  onRemoveFromWishlist,
  wishlistItems = [],
}) => {
  const { addGameToCollection } = useGameCollection();
  const [selectedCollection, setSelectedCollection] = useState("");

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
          <span className="text-green-600">Rating: {game.rating}⭐</span>
          <span className="font-bold">Released: {game.released}</span>
        </div>
        <div className="flex justify-between items-center mt-4">
          {game.short_screenshots.slice(0, 3).map((screenshot, index) => (
            <img
              key={index}
              src={screenshot.image}
              alt={`Screenshot ${index + 1}`}
              className="w-20 h-20 object-cover rounded-lg shadow-md mr-1"
            />
          ))}
        </div>
        <button
          onClick={handleClick}
          className={`btn2 text-white font-bold py-2 px-4 rounded mt-4 w-full ${
            isWishlisted ? "bg-red-500" : "bg-blue-500"
          }`}
        >
          {isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
        </button>
      </div>
    </article>
  );
};

export default GameCard;
