import React, { useState } from "react";
import { useGameCollection } from "../contexts/GameCollectionContext";
import GameCard from "../components/GameCard";

const CollectionsPage = () => {
  const {
    collections,
    addCollection,
    removeCollection,
    addGameToCollection,
    removeGameFromCollection,
  } = useGameCollection();
  const [newCollectionName, setNewCollectionName] = useState("");
  const [selectedCollection, setSelectedCollection] = useState(null);

  const handleAddCollection = () => {
    if (newCollectionName.trim() !== "") {
      addCollection(newCollectionName);
      setNewCollectionName("");
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 my-8">
      <h1 className="text-2xl font-bold mb-4">My Game Collections</h1>
      <div className="mb-4">
        <input
          type="text"
          value={newCollectionName}
          onChange={(e) => setNewCollectionName(e.target.value)}
          placeholder="New collection name"
        />
        <button
          onClick={handleAddCollection}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Collection
        </button>
      </div>
      {collections.length === 0 ? (
        <div className="text-center">No collections available</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {collections.map((collection) => (
            <div key={collection.name}>
              <h3 className="text-lg font-bold">{collection.name}</h3>
              <button
                onClick={() => removeCollection(collection.name)}
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                Delete Collection
              </button>
              {collection.games.length === 0 ? (
                <div className="text-center">No games in this collection</div>
              ) : (
                collection.games.map((game) => (
                  <GameCard
                    key={game.id}
                    game={game}
                    onRemoveFromWishlist={() =>
                      removeGameFromCollection(collection.name, game.id)
                    }
                  />
                ))
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CollectionsPage;
