import React, { useState } from "react";

function FavouriteFood() {
  const food = {
    pizza: {
      name: "Pizza",
      image:
        "https://res.cloudinary.com/dl26pbek4/image/upload/v1672294935/assets/shourav-sheikh-a66sGfOnnqQ-unsplash_dufyvk.jpg",
    },
    burger: {
      name: "Burger",
      image:
        "https://res.cloudinary.com/dl26pbek4/image/upload/v1672294934/assets/food-photographer-E94j3rMcxlw-unsplash_kuljtd.jpg",
    },
    pasta: {
      name: "Pasta",
      image:
        "https://res.cloudinary.com/dl26pbek4/image/upload/v1672294934/assets/pixzolo-photography-aeESmmFKH0M-unsplash_wag5lc.jpg",
    },
    sushi: {
      name: "Sushi",
      image:
        "https://res.cloudinary.com/dl26pbek4/image/upload/v1672294934/assets/pixzolo-photography-aeESmmFKH0M-unsplash_wag5lc.jpg",
    },
    chickenBiryani: {
      name: "Chicken Biryani",
      image:
        "https://res.cloudinary.com/dl26pbek4/image/upload/v1672294935/assets/mario-raj-ysmeQt1dzcw-unsplash_ivdvre.jpg",
    },
  };
  let [favFood, setFood] = useState(null); //track food

  const handleClick = (foodItem) => {
    setFood(foodItem);
  };

 

  const FavouriteFood = () => (
    <div className="favourite-food max-w-sm mx-auto mt-10 bg-white border border-gray-200 rounded-lg shadow-lg">
      <span className="text-xl font-semibold">Your favourite food is:</span>
      <div class="px-4 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg">
        <h2 className="text-2xl font-semibold text-gray-800">{favFood.name}</h2>
  </div>
      <img src={favFood.image} />
    </div>
  );
  return (
    <div className="App">
      {/* Hint: Use logical && to render FavouriteFood only if favouriteFood is defined */}
      {/* Write code here to render the FavouriteFood component conditionally */}
      {favFood && <FavouriteFood />}
      <h2 className="text-7xl">Select your favourite food</h2>
      <div className="food-list py-8">
        {/* Refactor the onClick handlers below to use a single handler function */}
        {Object.values(food).map((item, index) => (
          <div onClick={() => handleClick(item)} key={index} className="max-w-sm mx-auto mt-10 bg-white border border-gray-200 rounded-lg shadow-lg">
            <div class="px-4 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg">
        <h2 className="text-2xl font-semibold text-gray-800">{item.name}</h2>
  </div>
            <img src={item.image} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FavouriteFood;
