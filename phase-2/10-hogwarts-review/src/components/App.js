import React, {useState} from "react";
import Header from "./Header";
import HogList from './HogList'
import Filter from './Filter'

import hogs from "../porkers_data";

function App() {
  const [showGreased, setShowGreased] = useState(false)
  const [sortBy, setSortBy] = useState("name")

  const hogsToRender = hogs
    .filter(hog => showGreased ? hog.greased : true)
    .sort((hog1, hog2) => {
      if (sortBy === 'weight'){
        return hog1.weight - hog2.weight
      } else {
        return hog1.name.localeCompare(hog2.name)
      }
    })

  return (
    <div className="App">
      <Header />
      <Filter 
        showGreased={showGreased}
        onChangeShowGreased={setShowGreased}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
      <div>
        <HogList hogs={hogsToRender}/>
      </div>
    </div>
  );
}

export default App;
