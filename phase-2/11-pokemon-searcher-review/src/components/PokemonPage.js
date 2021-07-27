import React, {useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

  const [pokeArr, setPokeArr] = useState([]);
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => { // this syntax for useEffect will execute the callback function (here its fetch) only once--when the PokemonPage component first renders
    fetch('http://localhost:3001/pokemon')
    .then(res => res.json())
    .then(setPokeArr)
  }, [])

  function handleAddPokemon(newPokemon){
    setPokeArr([newPokemon, ...pokeArr]) // adds the new pokemon from the form submission to the front of our array in state
  }

  const filteredPoke = pokeArr.filter(poke => poke.name.toLowerCase().includes(searchTerm.toLowerCase()))  // filters the pokeArr matching pokemon names to the searchTerm

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onAddPokemon={handleAddPokemon}/>
      <br />
      <Search searchTerm={searchTerm} onChangeSearch={setSearchTerm}/>
      <br />
      <PokemonCollection pokeArr={filteredPoke}/>
    </Container>
  );
}

export default PokemonPage;
