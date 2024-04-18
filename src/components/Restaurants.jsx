import React from "react";
import Searchbar from "./Searchbar";

function Restaurants() {
  const restaurants = [
    {
      id: 1,
      name: "Family Palace",
      image:
        "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      place: "Vellore",
      review: "4.9/5",
    },
    {
      id: 2,
      name: "Hundereds Heritage",
      image:
        "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      place: "VIT,Vellore",
      review: "4.8/5",
    },
    {
      id: 3,
      name: "Zaitun",
      image:
        "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      place: "Near main gate,VIT",
      review: "4.8/5",
    },
    {
      id: 1,
      name: "Tara Ma",
      image:
        "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      place: "Near main gate VIT",
      review: "4.5/5",
    },
    {
      id: 2,
      name: "Harish mess",
      image:
        "https://plus.unsplash.com/premium_photo-1670984940113-f3aa1cd1309a?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      place: "Near main gate VIT",
      review: "4.2/5",
    },
    {
      id: 3,
      name: "Darling",
      image:
        "https://images.unsplash.com/photo-1586999768265-24af89630739?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      place: "VIT Vellore",
      review: "4.1/5",
    },
    {
      id: 1,
      name: "PR",
      image:
        "https://images.unsplash.com/photo-1587574293340-e0011c4e8ecf?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      place: "Near N-block VIT",
      review: "4.0/5",
    },
    {
      id: 2,
      name: "Bites and Bites",
      image:
        "https://images.unsplash.com/photo-1522336572468-97b06e8ef143?q=80&w=2676&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      place: "Q block VIT",
      review: "3.8/5",
    },
    {
      id: 3,
      name: "ZUSAN",
      image:
        "https://images.unsplash.com/photo-1579027989536-b7b1f875659b?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      place: "Libaray Vit",
      review: "3.5/5",
    },
  ];
  
  return (
    <div className="container mx-auto">
      <Searchbar />
      <div className="grid grid-cols-3 gap-6 p-6 justify-between">
        {restaurants.map((restaurant) => (
          <div
            key={restaurant.id}
            className="bg-white rounded-lg overflow-hidden shadow-md"
          >
            <img
              src={restaurant.image}
              alt={restaurant.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{restaurant.name}</h3>
              <p className="text-gray-600 mb-2">{restaurant.place}</p>
              <p className="text-gray-700">{restaurant.review}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Restaurants;
