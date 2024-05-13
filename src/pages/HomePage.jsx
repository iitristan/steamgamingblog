import React from 'react';
import PopularGames from "../components/PopularGames";
function HomePage({addToWishlist, searchQuery}) {
    return (
        <div>
            <PopularGames onAddToWishlist={addToWishlist} searchQuery={searchQuery} />
        </div>
    );
}

export default HomePage;
