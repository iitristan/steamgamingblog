import { useState, useEffect } from "react";
import GamesList from "../components/GamesList";

const GamesPage = ({ addToWishlist, searchQuery, setSearchQuery }) => {
  return (
    <div>
      <GamesList
        onAddToWishlist={addToWishlist}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
    </div>
  );
};

export default GamesPage;