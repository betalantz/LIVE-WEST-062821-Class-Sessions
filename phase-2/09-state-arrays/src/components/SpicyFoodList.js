import React, { useState } from "react";
import { spicyFoods, getNewSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);

  function handleAddFood() {
    const newFood = getNewSpicyFood();
    console.log(newFood);
    // foods.push(newFood)
    const newFoodArray = [...foods, newFood]
    setFoods(newFoodArray)
  }

  function handleLiClick(id){
    console.log('li clicked', id)
    // using filter below will remove an element from the foods array
    // const filteredFoods = foods.filter(food => food.id != id)
    // setFoods(filteredFoods)

    // using map lets us update one element of the array
    const updatedFoods = foods.map(food => {
      if (food.id === id) {
          return {
              ...food,
              heatLevel: food.heatLevel + 1
              }
      } else {
          return food
      }
      // we can also use a ternary to the same effect
      // return food.id === id ? {...food, heatLevel: food.heatLevel + 1} : food
    })
    setFoods(updatedFoods)
  }


  const foodList = foods.map(food => (
    <li key={food.id} onClick={() => handleLiClick(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ))

  return (
    <div>
      <select name="filter" >
        <option value="All">All</option>
        <option value="American">American</option>
        <option value="Sichuan">Sichuan</option>
        <option value="Thai">Thai</option>
        <option value="Mexican">Mexican</option>
      </select>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;
