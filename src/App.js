import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CollectionsPage from "./pages/CollectionsPage";
import WishlistPage from "./pages/WishlistPage";
import PopularGames from "./components/PopularGames";
import GamesPage from "./pages/GamesPage";
import GamesList from "./components/GamesList";


function App() {
  const [wishlistItems, setWishlistItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlistItems")) || [];
    setWishlistItems(storedWishlist);
  }, []);

  useEffect(() => {
    localStorage.setItem("wishlistItems", JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  const addToWishlist = (game) => {
    if (!wishlistItems.find((item) => item.id === game.id)) {
      setWishlistItems([...wishlistItems, game]);
    }
  };

  const removeFromWishlist = (gameId) => {
    const updatedWishlist = wishlistItems.filter(item => item.id !== gameId);
    setWishlistItems(updatedWishlist);
  };

  
  return (
    <Router>
      <div className="App">
        <Navbar setSearchQuery={setSearchQuery} />
        <Routes>
          <Route path="/" element={<HomePage addToWishlist={addToWishlist} wishlistItems={wishlistItems} />} />
          <Route
            path="/newdeals"
            element={<GamesList addToWishlist={addToWishlist} wishlistItems={wishlistItems} searchQuery={searchQuery} />}
          />
          <Route path="/collections" element={<CollectionsPage />} />
          <Route
            path="/wishlist"
            element={<WishlistPage wishlistItems={wishlistItems} removeFromWishlist={removeFromWishlist} />}
          />
          <Route path="/populargames" element={<PopularGames addToWishlist={addToWishlist} wishlistItems={wishlistItems} />} />
          <Route path="/games"  element={<GamesPage  addToWishlist={addToWishlist} searchQuery={searchQuery} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;