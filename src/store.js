import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./FeatureRedux/testReducer/testReducer"; // Import reducer

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
