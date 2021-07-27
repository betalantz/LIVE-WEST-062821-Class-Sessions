import React, {useState} from "react";
import { Form } from "semantic-ui-react";


function PokemonForm({onAddPokemon}) {
  
  // keep an object in state where the keys match the name= attributes of your form inputs
  const [formData, setFormData] = useState({
    name: "",
    hp: "",
    frontUrl: "",
    backUrl: ""
  })

  // updates the formData object in state with new user inputs
  function handleChange(e){
    setFormData({
      ...formData,  // make sure you keep all the other key/value pairs!
      [e.target.name]: e.target.value // using [] on the key means its a computed value
    })
  }

  function handleSubmit(){
    // Semantic UI React's Form component handles the preventDefault automatically!
    // but if you aren't using Semantic's components, you'll still need to accept an event parameter here and call preventDefault() on it

    // if the shape (keys/values) of the formData object doesn't match the objects in your database,
    // you'll need to use the formData values to compose a new object with the right shape
    const newPokemon = {
      name: formData.name,
      hp: formData.hp,
      sprites: {
        front: formData.frontUrl,
        back: formData.backUrl
      }
    }
    
    // this config object is how we set options with the fetch function; it's the 2nd argument to fetch
    const config = {
      method: 'POST', // sets the HTTP method of the request
      headers: {  // make sure headers is plural and its value is an object
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPokemon) // we need to convert our JSON object into a string that is still in a JSON-like format
    }

    fetch("http://localhost:3001/pokemon", config)
    .then(res => res.json())
    .then((newPoke) => {  // the response is the object that was just added to the database, with its new id assigned by the databse
      onAddPokemon(newPoke) // pass that response object to our callback function which will add it to our pokeArr in state
      setFormData({ // we also want to reset our form by setting it's state back to initial values
        name: "",
        hp: "",
        frontUrl: "",
        backUrl: ""
      })
    })
    
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input 
            fluid
            label="Name" 
            placeholder="Name" 
            name="name" 
            value={formData.name}
            onChange={handleChange}
          />
          <Form.Input 
            fluid 
            label="hp" 
            placeholder="hp" 
            name="hp" 
            value={formData.hp}
            onChange={handleChange}
          />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={formData.frontUrl}
            onChange={handleChange}

          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={formData.backUrl}
            onChange={handleChange}

          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
