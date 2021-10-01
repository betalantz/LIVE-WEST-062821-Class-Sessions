
// import { INCREASE_VOTE } from "../actionTypes";
const initialUser = {
  username: "Emiley",
  characters: []
};

export function userReducer(state = initialUser, action) {
  switch (action.type) {
    case "SET_CHARACTERS": 
      return {
        ...state,
        characters: action.payload
      }
    default:
      return state;
  }
}