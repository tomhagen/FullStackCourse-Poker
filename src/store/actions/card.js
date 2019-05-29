import { SAVE_CARD, DRAW_CARD, CHANGE_STATUS } from "../constants/card";
import Axios from 'axios';

export const fetchCards = () => {
    return dispatch => {
        Axios({
            method: 'GET',
            url: 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'
        })
        .then(res => {
            console.log(res);
            dispatch(actSaveCards(res.data))
        })
        .catch(err => {
            console.log(err);
        })
    }
}
export const actSaveCards = (deck) => {
    return {
        type: SAVE_CARD,
        deck
    }
}

export const shuffleDeck = (deckID) => {
    return dispatch => {
        Axios({
            method: 'GET',
            url: `https://deckofcardsapi.com/api/deck/${deckID}/shuffle/`
        })
        .then(res => {
            console.log(res);
            dispatch(actSaveCards(res.data))
        })
        .catch(err => {
            console.log(err);
        })
    }
}

export const drawCards = (deckID) => {
    return dispatch => {
        Axios({
            method: 'GET',
            url: `https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=12`
        })
        .then(res => {
            console.log(res);
            dispatch(actDrawCards(res.data.cards))
        })
        .catch(err => {
            console.log(err);
        })
    }
}

export const actDrawCards = (cards) => {
    return {
        type: DRAW_CARD,
        cards
    }
}

export const actReveal = (bool) => {
    return {
        type: CHANGE_STATUS,
        bool
    }
}
