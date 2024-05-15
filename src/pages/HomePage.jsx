import React from "react";
import PopularGames from "../components/PopularGames";

function HomePage({ addToWishlist, searchQuery }) {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center">
      <div className="py-10 flex items-center justify-center flex-col lg:flex-row lg:space-x-8">
        <div className="text-center lg:text-left mb-8 lg:mb-0">
          <h1 className="text-5xl font-bold mb-4">Welcome to GameFly's</h1>
          <p className="text-xl mb-8">
            Discover and manage your favorite games in one place.
          </p>
        </div>
        <img src="/gamer.svg" alt="Game Controller" className="w-50" />
      </div>
      <main className="container mx-auto py-6 px-6"></main>
      <PopularGames onAddToWishlist={addToWishlist} />
    </div>
  );
}

export default HomePage;
