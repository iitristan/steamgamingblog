import React from "react";

const deals = [
  { id: 1, name: "Persona 5", discount: "-91%", price: "$1.72" },
  { id: 2, name: "Bobo c egboy", discount: "-97%", price: "$0.40" },
  { id: 3, name: "LEAGUE OF LEGENDS", discount: "-70%", price: "$15.78" },
  { id: 4, name: "waha R", discount: "-39%", price: "$21.31" },
  { id: 5, name: "Gbbor", discount: "-69%", price: "$14.83" },
];

const GameCard = ({ deal }) => {
  return (
    <div className="gamecard shadow-lg rounded-lg p-4">
      <img
        src="/picture.jpg"
        alt={deal.name}
        className="w-full h-40 object-cover rounded"
      />
      <div className="mt-2">
        <h3 className="text-md font-semibold truncate">{deal.name}</h3>
        <div className="flex justify-between items-center mt-1">
          <span className="text-green-600">{deal.discount}</span>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
            Add to Wishlist
          </button>
          <span className="font-bold">{deal.price}</span>
        </div>
      </div>
    </div>
  );
};

const NewDeals = () => {
  return (
    <div className="container mx-auto px-10 my-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Games 1</h2>
        <a href="1" className="text-blue-500 hover:text-blue-700">
          See All
        </a>
      </div>
      <div className="grid grid-cols-5 gap-6">
        {deals.map((deal) => (
          <GameCard key={deal.id} deal={deal} />
        ))}
      </div>
    </div>
  );
};

export default NewDeals;
