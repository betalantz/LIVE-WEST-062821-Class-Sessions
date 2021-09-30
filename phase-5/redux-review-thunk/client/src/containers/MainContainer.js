import React, { useEffect } from "react";
import NationalParks from "../components/NationalParks";
import AddParkForm from '../components/AddParkForm';
import { useDispatch, useSelector } from 'react-redux'

import {getCharacters, getParks} from "../redux/actions"


function MainContainer() {
  const dispatch = useDispatch()
  const characters = useSelector((state) => state.user.characters)
 
  useEffect(() => {
    dispatch(getCharacters())
    dispatch(getParks())
  }, [])

  return (
    <div>
      <NationalParks  />
      <AddParkForm />
      {/* {characters.map(char => <p>{char.name}</p>)} */}
      <h1>THANKS FOR VOTING</h1>
    </div>
  );
}

export default MainContainer;
