import React, { useState, useEffect } from "react";
import axios from "axios";
import GameCard from "./GameCardPopular";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const API_KEY = "88b0dcd0cabd45c8ba3f2e6d7ab68d32";

function PopularGames({ onAddToWishlist, wishlistItems, searchQuery }) {
  const [games, setGames] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchGames = async () => {
      setLoading(true);
      try {
        const response = await axios.get("https://api.rawg.io/api/games", {
          params: {
            key: API_KEY,
            dates: "2024-01-01,2024-12-31",
            page: currentPage.toString(),
            page_size: 8,
            search: searchQuery,
          },
        });

        console.log("Games data:", response.data);
        if (currentPage === 1) {
          setGames(response.data.results);
        } else {
          setGames((prevGames) => [...prevGames, ...response.data.results]);
        }
      } catch (error) {
        console.error("Error fetching games:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, [currentPage, searchQuery]);

  const loadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const loadPrevious = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 my-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Discover Desired Games</h2>
        <div className="flex space-x-2">
          <button
            className="bg-transparent-500 border hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={loadPrevious}
            disabled={currentPage === 1}
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
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="loader border-t-4 border-blue-500 rounded-full w-16 h-16 animate-spin"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {games.map((game) => (
            // <Link >
            <GameCard
              key={game.id}
              game={game}
              onAddToWishlist={onAddToWishlist}
              wishlistItems={wishlistItems}
            />
            // </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default PopularGames;
