import React, { useState, useEffect } from "react";
import axios from "axios";
import GameCard from "./GameCard";
import { useGameCollection } from "../contexts/GameCollectionContext";

const API_KEY = '88b0dcd0cabd45c8ba3f2e6d7ab68d32';

function GamesList({ onAddToWishlist, wishlistItems, searchQuery }) {
  const [games, setGames] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await axios.get('https://api.rawg.io/api/games', {
          params: {
            key: API_KEY,
            page: currentPage.toString(),
            page_size: 8,
            search: searchQuery,
          }
        });

        console.log('Games data:', response.data);
        setGames(prevGames => [...prevGames, ...response.data.results]);
        setGames(response.data.results);
      } catch (error) {
        console.error('Error fetching games:', error);
      }
    };

    fetchGames();
  }, [currentPage, searchQuery]);

  const loadMore = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const loadPrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 my-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Games</h2>
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
      <div className="div1 flex justify-center">
        <button className="btn1 prev text-white font-bold py-2 px-4 rounded mt-4" onClick={loadPrevious}>
          Previous Page
        </button>
        <button className="btn1 next text-white font-bold py-2 px-4 rounded mt-4" onClick={loadMore}>
          Next Page
        </button>
      </div>
    </div>
  );
};

export default GamesList;
