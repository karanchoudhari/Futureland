import { configureStore } from "@reduxjs/toolkit";
import deleteProject from './FeatureRedux/project/deleteProject'
import counterReducer from './FeatureRedux/testReducer/testReducer'
import getallkml from './FeatureRedux/project/getKmlReducer'
const store = configureStore({
  reducer: {
    counter: counterReducer,
    deleteProject:deleteProject,
    getallkml,getallkml
  },
});

export default store;
