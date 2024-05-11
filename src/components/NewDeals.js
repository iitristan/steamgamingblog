import React from "react";

const deals = [
  { id: 1, name: "Persona 5", discount: "-91%", price: "$1.72" },
  { id: 2, name: "Bobo c egboy", discount: "-97%", price: "$0.40" },
  {
    id: 3,
    name: "LEAGEU OF LEGNDS",
    discount: "-70%",
    price: "$15.78",
  },
  { id: 4, name: "waha R", discount: "-39%", price: "$21.31" },
  { id: 5, name: "Gbbor", discount: "-69%", price: "$14.83" },
];

const NewDeals = () => {
  return (
    <div className="container mx-auto px-10 my-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Games 1</h2>
        <a href="#" className="text-blue-500 hover:text-blue-700">
          See All
        </a>
      </div>
      <div className="grid grid-cols-5 gap-6">
        {deals.map((deal) => (
          <div key={deal.id} className="bg-white shadow-lg rounded-lg p-4">
            <img
              src="/picture.jpg"
              alt={deal.name}
              className="w-full h-40 object-cover rounded"
            />
            <div className="mt-2">
              <h3 className="text-md font-semibold truncate">{deal.name}</h3>
              <div className="flex justify-between items-center mt-1">
                <span className="text-green-600">{deal.discount}</span>
                <span className="font-bold">{deal.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewDeals;
