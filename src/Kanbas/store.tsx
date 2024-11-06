import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./Courses/Modules/reducer";
import assignmentReducer from "./Courses/Assignments/reducer";
import accountReducer from "./Account/reducer";
import enrollmentReducer from "./Dashboard/enrollmentReducer";
const store = configureStore({
  reducer: {
    modulesReducer,
    assignments : assignmentReducer,
    accountReducer,
    enrollmentReducer
  },
});
export default store;
