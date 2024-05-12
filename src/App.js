import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CollectionsPage from "./pages/CollectionsPage";
import WishlistPage from "./pages/WishlistPage";
import NewDeals from "./components/NewDeals";
import PopularGames from "./components/PopularGames";
import GamesPage from "./pages/GamesPage";

function App() {
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlistItems")) || [];
    setWishlistItems(storedWishlist);
  }, []);

  useEffect(() => {
    localStorage.setItem("wishlistItems", JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  const addToWishlist = (deal) => {
    if (!wishlistItems.find((item) => item.id === deal.id)) {
      setWishlistItems([...wishlistItems, deal]);
    }
  };

  const removeFromWishlist = (dealId) => {
    const updatedWishlist = wishlistItems.filter(item => item.id !== dealId);
    setWishlistItems(updatedWishlist);
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/newdeals"
            element={<NewDeals addToWishlist={addToWishlist} wishlistItems={wishlistItems} />}
          />
          <Route path="/collections" element={<CollectionsPage />} />
          <Route
            path="/wishlist"
            element={<WishlistPage wishlistItems={wishlistItems} removeFromWishlist={removeFromWishlist} />}
          />
          <Route path="/populargames" element={<PopularGames addToWishlist={addToWishlist} wishlistItems={wishlistItems} />} />
          <Route path="/games"  element={<GamesPage  addToWishlist={addToWishlist} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;