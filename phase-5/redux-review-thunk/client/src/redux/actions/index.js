import { INCREASE_VOTE } from "../actionTypes"

export function increaseVote(park) {
  // return { type: INCREASE_VOTE, payload: id } // this would be a normal action creator returning an object
  return (dispatch, getState) => { // we need to update on the backend, so we need a thunk!
      dispatch({ type: INCREASE_VOTE, payload: park.id }) // optomistic rendering
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

export function decreaseVote(id) { // since this action creator is not doing anything asynchronous
  //there is no reason for it to be a thunk (returning a function)
  // it could just be a "regular" action creator which returns an action object as follows:
  // return { type: "DECREASE_VOTE", payload: id}
  return (dispatch, getState) => {
    dispatch({ type: "DECREASE_VOTE", payload: id})

  }
}


export function getCharacters() {
  return (dispatch, getState) => {  // getState is another function available inside of a thunk to read data from the Redux store, but is unused here
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
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(park)
    }
    fetch('/parks', config)
    .then(res => res.json())
    .then(newPark => dispatch({type: "ADD_PARK", payload: newPark})) // pessimistic rendering 
  }
}