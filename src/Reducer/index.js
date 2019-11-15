import { combineReducers } from "redux";
import ProveitReducer from "../Reducer/proveItReducer";
import ProveitErrorReducer from "../Reducer/proveItErrorReducer";

const rootReducer = combineReducers({
  ProveitReducer,
  ProveitErrorReducer
});

export default rootReducer;
