import { INCREASE_VOTE } from "../actionTypes"

export function increaseVote(park) {
  // return { type: INCREASE_VOTE, payload: id }
  return (dispatch, getState) => {
    // setTimeout(
    //   () => dispatch({ type: INCREASE_VOTE, payload: id })
    // , 3000)
    // fetch('https://rickandmortyapi.com/api/character')
    // .then(resp => resp.json())
    // .then(data => {
    //   console.log(data)
      dispatch({ type: INCREASE_VOTE, payload: park.id })
      const newVotes = {votes: park.votes + 1}
      fetch(`/parks/${park.id}`, {
        method: "PATCH",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newVotes)
      })
    // })
  }
}

export function decreaseVote(id) {
  // return { type: "DECREASE_VOTE", payload: id}
  return (dispatch, getState) => {
    dispatch({ type: "DECREASE_VOTE", payload: id})

  }
}


export function getCharacters() {
  return (dispatch, getState) => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(resp => resp.json())
      .then(data => {
        dispatch({ type: "SET_CHARACTERS", payload: data.results})
      })
  }
}

export function getParks() {
  return (dispatch) => {
    fetch('/parks')
    .then(r => r.json())
    .then(parksArr => dispatch({type: "SET_PARKS", payload: parksArr}))
  }
}

export function addPark(park) {
  return (dispatch) => {
    
    const config = {
      method: "POST",
      
    }
    fetch('/parks', config)
    .then(res => res.json())
    .then(newPark => dispatch({type: "ADD_PARK", payload: newPark}))
  }
}