import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; 
import App from './App';
import './index.css';  // Import global styles
import Dashboardindex from './Component/Dashboard/dashboardindex';
import Setting from './Component/setting';
import Management from './Component/Management/management';
import Chart from './Component/Overview/chart';
import Overview from './Component/Overview/overview';
import Addproject from './Component/Projectsfolder/addproject';
import Table3 from './Component/Table/table3';
import Dashboard from './Component/Dashboard/dashboard';
import Detail from './Component/Table/detail';
import ProjectList from './Component/Projectsfolder/projectlist';
import AddProject1 from './Component/Projectsfolder/addProject1';
import UserProfile from './Component/UserProfile/userprofile';
import Login from './Component/Loginpage/login';
import Addblogs  from './Component/Management/Blog/blogadd'
import Addgraph from './Component/Overview/addgraph';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/dashboard',
        element: <Dashboardindex/>,
       
      
      },
      {path:'/management', element:<Management/>},
      { path:'/detail',
        element:<Detail/>},
        { path:'/user' , element:<UserProfile/>},
      {
        path:'/settings',
        element:<Setting/>,
      },
      {
        path:'/login',
        element:<Login/>,
      },
      {
        path:'/add-blogs',
        element:<Addblogs/>,
      },
      {
        path:'/addgraph',
        element:<Addgraph/>,
      },
  
      {
        path:'/chart',
        element:<Chart/>,
      },
      {
        path:'/overview',
        element:<Overview/>,
      },
      {
        path:'/addproject',
        element:<Addproject/>,
      },
      {
        path:'/addProject1',
        element:<AddProject1/>
      },
      {
        path:'/projectlist',
        element:<ProjectList/>,
      },
   
      {
        path:'/table3',
        element:<Table3/>,
      },
      {
        path:'/dash',
        element:<Dashboard/>,
      },
    ],
  },

  // {
  //   path: '/detail',
  //   element: <>detail</>,
  // },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
