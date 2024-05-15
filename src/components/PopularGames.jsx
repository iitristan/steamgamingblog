import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import GameCard from "./GameCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const API_KEY = "88b0dcd0cabd45c8ba3f2e6d7ab68d32";

function PopularGames({ onAddToWishlist, wishlistItems, searchQuery }) {
  const [games, setGames] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); //pang track ng current page

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await axios.get("https://api.rawg.io/api/games", {
          params: {
            key: API_KEY,
            dates: "2024-01-01,2024-12-31",
            page: currentPage.toString(), // Get the first page of results
            page_size: 8, // 8 items per page
            search: searchQuery,
          },
        });

        console.log("Games data:", response.data);
        setGames(response.data.results);
      } catch (error) {
        console.error("Error fetching games:", error);
      }
    };

    fetchGames();
  }, [currentPage, searchQuery]);

  const loadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1); // Navigate to next page
  };

  const loadPrevious = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1); // Decrement page (previous)
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 my-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Popular Games today</h2>
        <div className="flex space-x-2">
          <button
            className="bg-transparent-500 border hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={loadPrevious}
          >
            <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
          </button>
          <button
            className="bg-transparent-500 border hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={loadMore}
          >
            <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {games.map((game) => (
          <GameCard
            key={game.id}
            game={game}
            onAddToWishlist={onAddToWishlist}
            wishlistItems={wishlistItems}
          />
        ))}
      </div>
    </div>
  );
}

export default PopularGames;
