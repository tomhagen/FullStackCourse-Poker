import { SAVE_CARD } from "../constants/card";

const initialState = {};

const cardReducer = (state = initialState , action ) => {
    switch(action.type){
        case SAVE_CARD:
            return action.deck
            
        default: return state;
    }
}
export default cardReducer;