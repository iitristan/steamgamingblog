import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import GamesPage from "./pages/GamesPage";
import CollectionsPage from "./pages/CollectionsPage";
import WishlistPage from "./pages/WishlistPage";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="sticky z-50 bg-gray-300 top-0">
          <Navbar />
        </header>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/games" element={<GamesPage />} />
          <Route path="/collections" element={<CollectionsPage />} />
          <Route path="/wishlist" element={<WishlistPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
