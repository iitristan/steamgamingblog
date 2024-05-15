import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import GameCard from "./GameCard";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

const API_KEY = "88b0dcd0cabd45c8ba3f2e6d7ab68d32";
function GamesList({
  setSearchQuery,
  onAddToWishlist,
  wishlistItems,
  searchQuery,
}) {
  const [games, setGames] = useState([]);
  const [genres, setGenres] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [query, setQuery] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const buttonRef = useRef(null);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await axios.get("https://api.rawg.io/api/genres", {
          params: { key: API_KEY },
        });
        setGenres(response.data.results);
      } catch (error) {
        console.error("Error fetching genres:", error);
      }
    };

    fetchGenres();
  }, []);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await axios.get("https://api.rawg.io/api/games", {
          params: {
            key: API_KEY,
            page: currentPage.toString(),
            page_size: 8,
            search: searchQuery,
            genres: selectedGenre || undefined, // Set genres param to undefined if no genre is selected
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
      }
    };

    fetchGames();
  }, [currentPage, searchQuery, selectedGenre]);

  const loadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const loadPrevious = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handleGenreChange = (genre) => {
    setSelectedGenre(genre);
    setCurrentPage(1);
    setDropdownVisible(false);
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 my-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Games</h2>
        <form
          onSubmit={handleSubmit}
          className="flex space-x-2 items-center"
        >
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for a game..."
            className="searchbar px-4 py-2 rounded bg-gray-800 text-white focus:outline-none"
            required
          />
          <button
            type="submit"
            className="btn1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Search
          </button>
          <button
            type="button"
            onClick={toggleDropdown}
            ref={buttonRef}
            className="btn1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            <FontAwesomeIcon icon={faFilter} />
          </button>
          {dropdownVisible && (
            <div
              className="absolute bg-white shadow-md rounded mt-2 py-2 z-10"
              style={{
                top: buttonRef.current.offsetTop + buttonRef.current.offsetHeight,
                left: buttonRef.current.offsetLeft,
              }}
            >
              <button
                className="block px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white w-full text-left"
                onClick={() => handleGenreChange("")}
              >
                All Genres
              </button>
              {genres.map((genre) => (
                <button
                  key={genre.id}
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white w-full text-left"
                  onClick={() => handleGenreChange(genre.slug)}
                >
                  {genre.name}
                </button>
              ))}
            </div>
          )}
        </form>
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
      <div className="flex justify-center space-x-2 mt-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={loadPrevious}
        >
          Previous Page
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={loadMore}
        >
          Next Page
        </button>
      </div>
    </div>
  );
}

GamesList.propTypes = {
  setSearchQuery: PropTypes.func.isRequired,
  onAddToWishlist: PropTypes.func.isRequired,
  wishlistItems: PropTypes.array.isRequired,
  searchQuery: PropTypes.string.isRequired,
};

export default GamesList;
