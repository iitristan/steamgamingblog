import React, { createContext, useState, useContext } from "react";

const GameCollectionContext = createContext();

export const useGameCollection = () => {
  return useContext(GameCollectionContext);
};

export const GameCollectionProvider = ({ children }) => {
  const [collections, setCollections] = useState([]);

  const addCollection = (collectionName) => {
    const collectionExists = collections.some(
      (collection) => collection.name === collectionName
    );
    if (!collectionExists) {
      setCollections([...collections, { name: collectionName, games: [] }]);
    } else {
      alert("A collection with this name already exists.");
    }
  };

  const removeCollection = (collectionName) => {
    setCollections(
      collections.filter((collection) => collection.name !== collectionName)
    );
  };

  const addGameToCollection = (collectionName, game) => {
    setCollections(
      collections.map((collection) => {
        if (collection.name === collectionName) {
          const gameExists = collection.games.some((g) => g.name === game.name);
          if (!gameExists) {
            return { ...collection, games: [...collection.games, game] };
          } else {
            alert("Game with the same name already exists in this collection.");
            return collection;
          }
        }
        return collection;
      })
    );
  };

  const removeGameFromCollection = (collectionName, gameId) => {
    setCollections(
      collections.map((collection) =>
        collection.name === collectionName
          ? {
              ...collection,
              games: collection.games.filter((game) => game.id !== gameId),
            }
          : collection
      )
    );
  };

  const updateCollectionName = (oldName, newName) => {
    const collectionExists = collections.some(
      (collection) => collection.name === newName && collection.name !== oldName
    );
    if (!collectionExists) {
      setCollections(
        collections.map((collection) =>
          collection.name === oldName
            ? { ...collection, name: newName }
            : collection
        )
      );
    } else {
      alert("A collection with this name already exists.");
    }
  };

  return (
    <GameCollectionContext.Provider
      value={{
        collections,
        addCollection,
        removeCollection,
        addGameToCollection,
        removeGameFromCollection,
        updateCollectionName,
      }}
    >
      {children}
    </GameCollectionContext.Provider>
  );
};

export default GameCollectionContext;
