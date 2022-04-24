import { combineReducers } from "redux";
import dishReducer from "./dish";

const allReducers = combineReducers({
    dish: dishReducer
});

export default allReducers