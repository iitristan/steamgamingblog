import React, { createContext, useState, useContext } from 'react';

const GameCollectionContext = createContext();

export const useGameCollection = () => {
  return useContext(GameCollectionContext);
};

export const GameCollectionProvider = ({ children }) => {
  const [collections, setCollections] = useState([]);

  const addCollection = (collectionName) => {
    setCollections([...collections, { name: collectionName, games: [] }]);
  };

  const removeCollection = (collectionName) => {
    setCollections(collections.filter(collection => collection.name !== collectionName));
  };

  const addGameToCollection = (collectionName, game) => {
    setCollections(collections.map(collection => 
      collection.name === collectionName 
        ? { ...collection, games: [...collection.games, game] } 
        : collection
    ));
  };

  const removeGameFromCollection = (collectionName, gameId) => {
    setCollections(collections.map(collection => 
      collection.name === collectionName 
        ? { ...collection, games: collection.games.filter(game => game.id !== gameId) } 
        : collection
    ));
  };

  return (
    <GameCollectionContext.Provider value={{ collections, addCollection, removeCollection, addGameToCollection, removeGameFromCollection }}>
      {children}
    </GameCollectionContext.Provider>
  );
};

export default GameCollectionContext;
