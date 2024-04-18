import React, { useState } from "react";

function Reviews() {
  const [restaurantName, setRestaurantName] = useState("");
  const [address, setAddress] = useState("");
  const [rating, setRating] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(
      `Review submitted for ${restaurantName} (${address}): Rating: ${rating}/5`
    );
    setRestaurantName("");
    setAddress("");
    setRating("");
  };

  return (
    <div className="m-40">
      <div className="w-64 mx-auto mt-8 p-10 bg-gray-100 border border-gray-300 rounded-lg shadow-md">
        <h2 className="text-center font-bold text-lg mb-4">Submit a Review</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="restaurantName" className="block mb-1">
              Restaurant Name:
            </label>
            <input
              type="text"
              id="restaurantName"
              value={restaurantName}
              onChange={(event) => setRestaurantName(event.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="address" className="block mb-1">
              Address:
            </label>
            <input
              type="text"
              id="address"
              value={address}
              onChange={(event) => setAddress(event.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="rating" className="block mb-1">
              Rating:
            </label>
            <input
              type="number"
              id="rating"
              min="1"
              max="5"
              value={rating}
              onChange={(event) => setRating(event.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          >
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
}

export default Reviews;
