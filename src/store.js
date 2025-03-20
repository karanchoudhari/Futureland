import { configureStore } from "@reduxjs/toolkit";
import deleteProject from './FeatureRedux/project/deleteProject'
import counterReducer from './FeatureRedux/testReducer/testReducer'
import getallkml from './FeatureRedux/project/getKmlReducer'
import createBlog from './FeatureRedux/blogs/createblogSlice'
const store = configureStore({
  reducer: {
    counter: counterReducer,
    deleteProject:deleteProject,
    getallkml,getallkml,
    createBlog:createBlog,
  },
});

export default store;
