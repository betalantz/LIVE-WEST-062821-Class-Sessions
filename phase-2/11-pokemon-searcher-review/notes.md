## Stories
A user can:
- [x] see all pokemon cards displayed (name, sprite, hp)
- [x] search for a pokemon by name (display only cards w/name matching the search term)
- [x] use a form to add a new pokemon (added pokemon will persist)

## Structure
- App
    - PokemonPage
        - PokemonForm
        - Search
        - PokemonCollection
            - PokemonCard *

## Data
```javascript
[
    {
      "id": 2,
      "name": "ivysaur",
      "hp": 60,
      "sprites": {
        "front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
        "back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/2.png"
      }
    },
    {...}
]
```

**Reasoning**
The components are already given, and so is the structure, SO...


My focus needs to be on:
- where to fetch
- which components hold state
- what to put in state
- what gets passed down as props
- where to use inverse data flow with callbacks passed down