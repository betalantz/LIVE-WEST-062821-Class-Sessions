import React, { useState } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  // const [filters, setFilters] = useState({ type: "all" }); // this code was given
  const [filters, setFilters] = useState("all");  // you can still make this work if filters is a string instead of an object

  function handleChangeType(type){
    setFilters(type)
  }

  function handleFindPetsClick(){
    // the base endpoint never changes
    let endpoint = 'http://localhost:3001/pets'
    // we only need to add on a query parameter string when the filter value is a specific pet
    if(filters !== 'all'){
      endpoint += `?type=${filters}`
    }
    fetch(endpoint)
      .then(r => r.json())
      .then(setPets) // the server response is an already-filtered array, so we just need to update state with it
  }

  function handleAdoptPet(id){
    // We can use .map to find just one element in an array and change it
    // const updatedPets = pets.map(pet => {
    //   if(pet.id === id){
    //     return {...pet, isAdopted: true}
    //   } else {
    //     return pet
    //   }
    // })

    // attempted to PATCH but blocked by CORS (beyond scope of requirements!)
    // let updatedPet = {}
    // const config = {
    //   method: 'patch',
    //   headers: {'Content-Type': 'application/json'},
    //   body: JSON.stringify({isAdopted: true})
    // }
    // fetch(`http://localhost:3001/pets/${id}`, config)
    //   .then(r => r.json())
    //   .then(changedPet => updatedPet = changedPet)

    // here's a refactor of the .map above using a ternary operator; same logic, different syntax
    const updatedPets = pets.map(pet => {
      return pet.id === id ? {...pet, isAdopted: true} : pet
    })
    setPets(updatedPets)
  }

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters 
              onChangeType={handleChangeType}
              onFindPetsClick={handleFindPetsClick}
            />
          </div>
          <div className="twelve wide column">
            <PetBrowser onAdoptPet={handleAdoptPet} pets={pets}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
