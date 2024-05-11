import React from "react";

const games = [
  { id: 1, name: "V Rising", price: "~$24.12", img: "/picture.jpg" },
  { id: 2, name: "Steelrising", price: "~$1.72", img: "/picture.jpg" },
  { id: 3, name: "Hi-Fi RUSH", price: "~$7.59", img: "/picture.jpg" },
  {
    id: 4,
    name: "Assassin's Creed Mirage",
    price: "~$14.99",
    img: "/picture.jpg",
  },
  { id: 5, name: "Hades II", price: "~$29.99", img: "/picture.jpg" },
];

const GameCard = ({ game }) => {
  return (
    <div className="text-center">
      <div className="w-200 h-200 bg-gray-300 flex items-center justify-center overflow-hidden">
        <img
          src={game.img}
          alt={game.name}
          className="max-w-full max-h-full cursor-pointer"
        />
      </div>
      <h3 className="mt-2 text-sm font-semibold">{game.name}</h3>
      <p className="text-sm">{game.price}</p>
    </div>
  );
};

const PopularGames = () => {
  return (
    <div className="container mx-auto px-10 my-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Most Popular Games</h2>
        <a href="1" className="text-blue-500 hover:text-blue-700">
          See All
        </a>
      </div>
      <div className="grid grid-cols-5 gap-4">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
};

export default PopularGames;
