import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokeArr}) {

  const renderPokemon = pokeArr.map(pokemon => (
    <PokemonCard key={pokemon.id} pokemon={pokemon}/>
  ))
  
  return (
    <Card.Group itemsPerRow={6}>
      {renderPokemon}
    </Card.Group>
  );
}

export default PokemonCollection;
