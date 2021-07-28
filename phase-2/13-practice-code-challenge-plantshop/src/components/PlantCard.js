import React, {useState} from "react";


function PlantCard({plant}) {

  const [inStock, setInStock] = useState(true)

  const {name, image="https://via.placeholder.com/400", price} = plant

  function handleToggleClick(){
    setInStock(inStock => !inStock)
  }

  return (
    <li className="card">
      <img src={image} alt={"plant name"} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {inStock ? (
        <button  onClick={handleToggleClick} className="primary">In Stock</button>
      ) : (
        <button onClick={handleToggleClick} >Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
