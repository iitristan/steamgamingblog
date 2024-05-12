import React from "react";

const GameCard = ({ deal, onAddToWishlist, onRemoveFromWishlist, wishlistItems = [] }) => {

  const isWishlisted = wishlistItems.some((item) => item.id === deal.id);
  const handleClick = () => {
    if (isWishlisted) {
      onRemoveFromWishlist(deal.id); 
    } else {
      onAddToWishlist(deal);
    }
  };

  return (
    <article className="card rounded-lg shadow-md overflow-hidden">
        <img
          src={`https://source.unsplash.com/random/300x200?game+${deal.name}`} 
          alt={`Thumbnail of ${deal.name} game`}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">{deal.name}</h3>
          <div className="flex justify-between items-center">
            <span className="text-green-600">{deal.discount}</span>
            <span className="font-bold">{deal.price}</span>
          </div>
          <button
            onClick={handleClick}
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 w-full ${isWishlisted ? "bg-red-500" : "bg-blue-500"}`}
          >
            {isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
          </button>
        </div>
      </article>
  );
};
export default GameCard;