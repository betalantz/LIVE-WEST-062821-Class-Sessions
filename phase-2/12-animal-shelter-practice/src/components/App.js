import React, { useState } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });

  function handleChangeType(type){
    setFilters({type})
  }

  function handleFindPetsClick(){
    let endpoint = 'http://localhost:3001/pets'
    if(filters.type !== 'all'){
      endpoint += `?type=${filters.type}`
    }
    fetch(endpoint)
      .then(r => r.json())
      .then(setPets)
  }

  function handleAdoptPet(id){
    console.log('id: ', id);
    // const updatedPets = pets.map(pet => {
    //   if(pet.id === id){
    //     return {...pet, isAdopted: true}
    //   } else {
    //     return pet
    //   }
    // })
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