import { USER_LOGIN } from "../constants";

let initialState = {
    userProfile: {}
};

const userReducer = (state = initialState,action) => {
    switch(action.type){
        case USER_LOGIN:
            const updateState = {...state};
            updateState.userProfile = action.payload;
            return updateState

        default : return {...state}
    }
}
export default userReducer