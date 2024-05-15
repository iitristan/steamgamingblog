import React from "react";
import PopularGames from "../components/PopularGames";
import { Link } from "react-router-dom";

function HomePage({ addToWishlist, searchQuery }) {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto py-10 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center lg:justify-center">
          <div className="text-center lg:w-1/2">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Welcome to GameFly's
            </h1>
            <p className="text-lg mt-2 lg:text-xl mb-6">
              Discover and manage your favorite games in one place.
            </p>
            <Link
              to="/games"
              className="btn2 text-white font-bold py-2 px-4 rounded inline-block"
            >
              Explore
            </Link>
          </div>

          <div className="lg:w-1/2 flex justify-center">
            {" "}
            <img
              src="/qs.svg"
              alt="Game Controller"
              className="w-full max-w-xs lg:max-w-md xl:max-w-lg"
            />
          </div>
        </div>

        <PopularGames onAddToWishlist={addToWishlist} />
      </div>
    </div>
  );
}

export default HomePage;
