import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plantsArr, setPlantsArr] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    fetch('http://localhost:6001/plants')
      .then(r => r.json())
      .then(setPlantsArr)
  }, [])

  const filteredPlants = plantsArr.filter(plant => {
    return plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  })

  return (
    <main>
      <NewPlantForm />
      <Search search={searchTerm} onSearchChange={setSearchTerm} />
      <PlantList plants={filteredPlants}/>
    </main>
  );
}

export default PlantPage;
