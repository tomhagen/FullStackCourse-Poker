import {combineReducers} from 'redux';
import userReducer from './user';
import playerReducer from './player';
import cardReducer from './card';
import statusReducer from './status';

const rootReducer = combineReducers({

    user : userReducer,
    player: playerReducer,
    deck: cardReducer,
    status: statusReducer
})

export default rootReducer