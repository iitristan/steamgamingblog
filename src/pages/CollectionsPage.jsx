import React, { useState } from "react";
import { useGameCollection } from "../contexts/GameCollectionContext";

const CollectionsPage = () => {
  const {
    collections,
    addCollection,
    removeCollection,
    addGameToCollection,
    removeGameFromCollection,
    updateCollectionName,
  } = useGameCollection();
  const [newCollectionName, setNewCollectionName] = useState("");
  const [pageIndexes, setPageIndexes] = useState({});
  const [editingCollection, setEditingCollection] = useState(null);
  const [updatedCollectionName, setUpdatedCollectionName] = useState("");

  const handleAddCollection = () => {
    if (newCollectionName.trim() !== "") {
      addCollection(newCollectionName);
      setNewCollectionName("");
    }
  };

  const handleAddGameToCollection = (collectionName, game) => {
    const collection = collections.find((c) => c.name === collectionName);
    if (collection && collection.games.length < 5) {
      const gameExists = collection.games.some((g) => g.name === game.name);
      if (!gameExists) {
        addGameToCollection(collectionName, game);
      } else {
        alert("Game with the same name already exists in this collection.");
      }
    }
  };

  const handleNextPage = (collectionName) => {
    setPageIndexes((prev) => ({
      ...prev,
      [collectionName]: (prev[collectionName] || 0) + 1,
    }));
  };

  const handlePreviousPage = (collectionName) => {
    setPageIndexes((prev) => ({
      ...prev,
      [collectionName]: Math.max((prev[collectionName] || 0) - 1, 0),
    }));
  };

  const handleEditCollection = (collectionName) => {
    setEditingCollection(collectionName);
    setUpdatedCollectionName(collectionName);
  };

  const handleUpdateCollectionName = () => {
    if (updatedCollectionName.trim() !== "") {
      updateCollectionName(editingCollection, updatedCollectionName);
      setEditingCollection(null);
      setUpdatedCollectionName("");
    }
  };
  const renderGames = (collection) => {
    const pageIndex = pageIndexes[collection.name] || 0;
    const gamesToShow = collection.games.slice(
      pageIndex * 5,
      (pageIndex + 1) * 5
    );

    return (
      <div>
        {gamesToShow.length === 0 ? (
          <div className="text-center">No games in this collection</div>
        ) : (
          gamesToShow.map((game) => (
            <div
              key={game.id}
              className="flex items-center text-right justify-between mb-2"
            >
              <span>{game.name}</span>
              <button
                onClick={() =>
                  removeGameFromCollection(collection.name, game.id)
                }
                className="btn1 bg-red-500 text-white px-2 py-1 rounded"
              >
                Remove
              </button>
            </div>
          ))
        )}
        <div className="flex justify-between mt-4">
          <button
            onClick={() => handlePreviousPage(collection.name)}
            className="btn2 bg-gray-500 text-white px-4 py-2 rounded"
            disabled={pageIndex === 0}
          >
            ◀
          </button>
          <button
            onClick={() => handleNextPage(collection.name)}
            className="btn2 bg-gray-500 text-white px-4 py-2 rounded"
            disabled={(pageIndex + 1) * 5 >= collection.games.length}
          >
            ▶
          </button>
        </div>
      </div>
    );
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
          className="option1 border border-gray-300 px-4 py-2 rounded mr-2"
        />
        <button
          onClick={handleAddCollection}
          className="btn1 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Collection
        </button>
      </div>
      {collections.length === 0 ? (
        <div className="text-center">No collections available</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {collections.map((collection) => (
            <div key={collection.name} className="border1 border p-4 rounded">
              <h3
                onMouseEnter={() => handleEditCollection(collection.name)}
                onMouseLeave={() => setEditingCollection(null)}
                className="text-lg font-bold mb-2"
              >
                {editingCollection === collection.name ? (
                  <div className="flex items-center">
                    <input
                      type="text"
                      value={updatedCollectionName}
                      onChange={(e) => setUpdatedCollectionName(e.target.value)}
                      className="option1 border border-gray-300 py-1 rounded mr-2 w-full sm:w-50"
                      placeholder="New collection name"
                    />
                    <button
                      onClick={handleUpdateCollectionName}
                      className="btn1 bg-blue-500 text-white py-1 rounded w-full sm:w-auto flex items-center justify-center" // Added flex and justify-center classes
                    >
                      Save
                    </button>
                  </div>
                ) : (
                  collection.name
                )}
              </h3>
              <button
                onClick={() => removeCollection(collection.name)}
                className="btn1 bg-red-500 text-white px-2 py-1 rounded mb-2"
              >
                Delete Collection
              </button>
              <hr className="mb-3"/>
              {renderGames(collection)}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CollectionsPage;
