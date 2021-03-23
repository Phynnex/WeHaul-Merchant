import { combineReducers } from "redux";
import userReducer from "./userReducer";
import uiReducer from "./uiReducer";
import adminReducer from "./adminReducer";

const allReducers = combineReducers({
  userData: userReducer,
  adminData: adminReducer,
  UI: uiReducer,
});

export default allReducers;
