import React from 'react';
import GamesList from '../components/GamesList';

function GamesPage({ addToWishlist, searchQuery }) {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetchGames();
  }, []);

  const fetchGames = async () => {
    const response = await fetch('/api/games');
    const data = await response.json();
    setGames(data);
  };

  const filteredGames = games.filter(game =>
    game.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      {filteredGames.map(game => (
        <div key={game.id}>
          <h3>{game.name}</h3>
          <button onClick={() => addToWishlist(game)}>Add to Wishlist</button>
        </div>
      ))}
    </div>
  );
}

export default GamesPage;
