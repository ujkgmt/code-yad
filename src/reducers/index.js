import { combineReducers } from "redux";
import { courseReducer } from "./course";
import { coursesReducer } from "./courses";
import { userReducer } from "./user";

export const reducers = combineReducers({
  course: courseReducer,
  courses: coursesReducer,
  user: userReducer,
});
