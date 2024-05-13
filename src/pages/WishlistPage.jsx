import React from "react";
import GameCard from "../components/GameCard"; 

const WishlistPage = ({ wishlistItems = [], removeFromWishlist }) => { 
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 my-8">
      <h1 className="text-2xl font-bold mb-4">Wishlist Page</h1>

      {wishlistItems.length === 0 ? (
        <div className="text-center">No items in wishlist</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {wishlistItems.map((game) => (
            <GameCard
              key={game.id}
              game={game}
              onRemoveFromWishlist={removeFromWishlist}
              wishlistItems={wishlistItems}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;