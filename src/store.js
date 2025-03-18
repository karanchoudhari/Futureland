import { configureStore } from "@reduxjs/toolkit";
import deleteProject from './FeatureRedux/project/deleteProject'
import counterReducer from './FeatureRedux/testReducer/testReducer'
const store = configureStore({
  reducer: {
    counter: counterReducer,
    deleteProject:deleteProject
  },
});

export default store;
