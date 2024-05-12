import React from "react";
import { Link } from "react-router-dom";
import GameCard from "../components/gamecard";

const NewDeals = ({ onAddToWishlist, wishlistItems }) => {
  const deals = [
    { id: 1, name: "Persona 5 Royal", discount: "-91%", price: "$1.72" },
    { id: 2, name: "Cyberpunk 2077", discount: "-50%", price: "$29.99" },
    { id: 3, name: "Red Dead Redemption 2", discount: "-60%", price: "$19.99" },
    { id: 4, name: "The Witcher 3: Wild Hunt", discount: "-70%", price: "$9.99" },
    { id: 5, name: "Grand Theft Auto V", discount: "-50%", price: "$14.99" },
  ]; 

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 my-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">New Deals</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {deals.map((deal) => (
          <GameCard
            key={deal.id}
            deal={deal}
            onAddToWishlist={onAddToWishlist}
            wishlistItems={wishlistItems}
          />
        ))}
      </div>
    </div>
  );
};


export default NewDeals;