import { combineReducers } from "redux";
import drugsReducer from './drugsReducer'
import pharmaciesReducer from "./pharmaciesReducer";
import drugsInfoReducer from './drugsDataReducer'
const rootReducr = combineReducers({
  drugsReducer,
  pharmaciesReducer,
  drugsInfoReducer
});
export default rootReducr;
