import { configureStore } from "@reduxjs/toolkit";
import deleteProject from './FeatureRedux/project/deleteProject'
import counterReducer from './FeatureRedux/testReducer/testReducer'
import getallkml from './FeatureRedux/project/getKmlReducer'
import createBlog from './FeatureRedux/blogs/createblogSlice'
import addCompany from './FeatureRedux/CompanyReducer/addCompany'
import getChartData from './FeatureRedux/chartReducer/donatchartget'
import allcompanylist from './FeatureRedux/CompanyReducer/getCompanylist'
import deleteCompany from './FeatureRedux/CompanyReducer/deleteCompany'
import updateCompany from './FeatureRedux/CompanyReducer/updateCompany'
import getallGraphdata from './FeatureRedux/GraphData/showGraphdata'
import CreateSession from './FeatureRedux/CompanyReducer/loginCompany'
const store = configureStore({
  reducer: {
    counter: counterReducer,
    deleteProject:deleteProject,
    getallkml,getallkml,
    createBlog:createBlog,
    addCompany:addCompany,
    getChartData:getChartData,
    allcompanylist:allcompanylist,
    deleteCompany:deleteCompany,
    updateCompany:updateCompany,
    getallGraphdata:getallGraphdata,
    CreateSession:CreateSession,
  },
});

export default store;
