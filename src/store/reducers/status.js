import { CHANGE_STATUS } from "../constants/card";

let initialState = {
    revealStatus: false,
    drawStatus: false
}
const statusReducer = (state = initialState, action) => {
    switch(action.type){
        case CHANGE_STATUS:
            state.revealStatus = action.bool
            return {...state}

        default : return state;
    }
}
export default statusReducer;