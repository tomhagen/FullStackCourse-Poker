import { DRAW_CARD } from "../constants/card";

const inititalState = [
    {
        username: 'Player 1',
        score: 0,
        cards: []
    },
    {
        username: 'Player 2',
        score: 0,
        cards: []   
    },
    {
        username: 'Player 3',
        score: 0,
        cards: []
    },
    {
        username: JSON.parse(localStorage.getItem('userLogin')).TaiKhoan,
        score: 0,
        cards: []
    }
]

const playerReducer = (state = inititalState, action) => {
    switch(action.type){
        case DRAW_CARD:
            for(let i in action.cards){
                let index = i % state.length; // chia lấy phần dư
                state[index].cards.push(action.cards[i]);
            }   
            return [...state]
        default :
        return state;
    }
}
export default playerReducer