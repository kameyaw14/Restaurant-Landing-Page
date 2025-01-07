import React from "react";

const foodItems = [
  {
    name: "Grilled Chicken",
    description: "Tender grilled chicken served with a side of veggies.",
    price: "$12.99",
    image: "https://via.placeholder.com/300x200?text=Grilled+Chicken",
  },
  {
    name: "Spaghetti Carbonara",
    description: "Creamy pasta with pancetta and parmesan.",
    price: "$14.99",
    image: "https://via.placeholder.com/300x200?text=Spaghetti+Carbonara",
  },
  {
    name: "Veggie Burger",
    description: "A delicious plant-based burger with all the fixings.",
    price: "$11.49",
    image: "https://via.placeholder.com/300x200?text=Veggie+Burger",
  },
  {
    name: "Chocolate Cake",
    description: "Decadent chocolate cake with a rich ganache.",
    price: "$6.99",
    image: "https://via.placeholder.com/300x200?text=Chocolate+Cake",
  },
  {
    name: "Tiramisu",
    description: "Classic Italian dessert made with coffee-soaked ladyfingers.",
    price: "$5.49",
    image: "https://via.placeholder.com/300x200?text=Tiramisu",
  },
  {
    name: "Cheesecake",
    description: "Creamy cheesecake with a graham cracker crust.",
    price: "$5.99",
    image: "https://via.placeholder.com/300x200?text=Cheesecake",
  },
];

const FoodList = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
          Our Delicious Dishes
        </h2>

        {/* Food Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {foodItems.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                {item.name}
              </h3>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <span className="text-xl font-bold text-gray-800">
                {item.price}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FoodList;
