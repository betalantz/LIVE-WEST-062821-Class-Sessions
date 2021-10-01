// import Yosemite from "../../assets/yosemite.jpg";
// import Yellowstone from "../../assets/yellowstone.jpg";
// import Zion from "../../assets/zion.jpg";
// import MountRainier from "../../assets/mount-rainier.jpg";
import { INCREASE_VOTE } from "../actionTypes";


// const initialParks = {
//   1: {
//     id: 1,
//     name: "Yosemite",
//     votes: 10,
//     image: Yosemite,
//   },
//   2: {
//     id: 2,
//     name: "Zion",
//     votes: 10,
//     image: Zion,
//   },
//   3: {
//     id: 3,
//     name: "Yellowstone",
//     votes: -1,
//     image: Yellowstone,
//   },
//   4: {
//     id: 4,
//     name: "Mount Rainier",
//     votes: 10,
//     image: MountRainier,
//   },
// };

export function parksReducer(state = [], action) {
  switch (action.type) {
    case "SET_PARKS": 
      return action.payload;
    case "ADD_PARK": 
      return [...state, action.payload]
    case INCREASE_VOTE: 
      return state.map(p => p.id === action.payload ? {...p, votes: p.votes + 1} : p)
    case "DECREASE_VOTE": 
      return state.map(p => p.id === action.payload ? {...p, votes: p.votes - 1} : p)
    default:
      return state;
  }
}