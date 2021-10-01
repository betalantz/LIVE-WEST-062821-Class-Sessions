import React from "react";
import {bindActionCreators} from "redux"
import { useDispatch, connect} from "react-redux";
import { increaseVote, decreaseVote } from "../redux/actions";

const ParkCard = ({ park }) => {
  const dispatch = useDispatch();
  const dispatchIncreaseVote = bindActionCreators(increaseVote, dispatch)
  const dispatchDecreaseVote = bindActionCreators(decreaseVote, dispatch)


  return (
    <div className="card">
      <h2>Name: {park.name}</h2>
      <p>Votes: {park.votes}</p>
      <img src={park.image} alt={park.name}></img>
      <br />
      <button
        onClick={() => {
          // dispatch({ type: "INCREASE_VOTE", payload: id })
          dispatchIncreaseVote(park);
        }}
      >
        UpVote
      </button>
      <button
        onClick={() => {
          // dispatch(decreaseVote(park.id));
          dispatchDecreaseVote(park)
        }}
      >
        DownVote
      </button>
    </div>
  );
};
export default ParkCard;
// export default connect(null, {increaseVote})(ParkCard);
