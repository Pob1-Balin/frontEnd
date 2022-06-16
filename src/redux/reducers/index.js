import { combineReducers } from "redux";
import {userReducer} from './user'


const reducers = combineReducers({
    users: userReducer,
})


export default reducers