import React from "react";
import { connect } from "react-redux";
import { shuffleDeck, drawCards, actReveal } from "../../store/actions/card";

const control = ({ deck, onShuffleDeck, onDrawCards, onRevealStatus }) => {

    const handleOnReveal = () => {
        onRevealStatus(true);
    }
  return (
    <div className="d-flex">
      <div className="">
        <button
          className="btn btn-success"
          onClick={() => onShuffleDeck(deck.deck_id)}
        >
          Shuffle
        </button>
        <button
          className="btn btn-info"
          onClick={() => onDrawCards(deck.deck_id)}
        >
          Draw
        </button>
        <button
          className="btn btn-primary mr-2"
          onClick={handleOnReveal}
        >
          Reveal
        </button>
      </div>
      <div className="d-flex">
        <div className="border">
          <p>Player 1</p>
          <p>0</p>
        </div>
        <div className="border">
          <p>Player 2</p>
          <p>0</p>
        </div>
        <div className="border">
          <p>Player 3</p>
          <p>0</p>
        </div>
        <div className="border">
          <p>Tên</p>
          <p>0</p>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    deck: state.deck
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onShuffleDeck: id => {
      dispatch(shuffleDeck(id));
    },
    onDrawCards: id => {
      dispatch(drawCards(id));
    },
    onRevealStatus: bool => {
      dispatch(actReveal(bool));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(control);
