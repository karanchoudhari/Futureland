// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'; 
// import App from './App';
// import './index.css';  // Import global styles
// import Dashboardindex from './Component/Dashboard/dashboardindex';
// import Setting from './Component/setting';
// import Management from './Component/Management/management';
// import Chart from './Component/Overview/chart';
// import Overview from './Component/Overview/overview';
// import Addproject from './Component/Projectsfolder/addproject';
// import Table3 from './Component/Table/table3';
// import Dashboard from './Component/Dashboard/dashboard';
// import Detail from './Component/Table/detail';
// import ProjectList from './Component/Projectsfolder/projectlist';
// import AddProject1 from './Component/Projectsfolder/addProject1';
// import UserProfile from './Component/UserProfile/userprofile';
// import Login from './Component/Loginpage/login';
// import Addblogs  from './Component/Management/Blog/blogadd'
// import Addgraph from './Component/Overview/addgraph';
// import Blogfront from './Component/Management/Blog/blogfront';
// import store from './store'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     children: [
//       {
//         path: '/dashboard',
//         element: <Dashboardindex/>,
       
      
//       },
//       {path:'/management', element:<Management/>},
//       { path:'/detail',
//         element:<Detail/>},
//         { path:'/user' , element:<UserProfile/>},
//       {
//         path:'/settings',
//         element:<Setting/>,
//       },
//       {
//         path:'/login',
//         element:<Login/>,
//       },
//       {
//         path:'/add-blogs',
//         element:<Addblogs/>,
//       },
//       {
//         path:'/Blogfront',
//         element:<Blogfront/>,
//       },
//       {
//         path:'/addgraph',
//         element:<Addgraph/>,
//       },
  
//       {
//         path:'/chart',
//         element:<Chart/>,
//       },
//       {
//         path:'/overview',
//         element:<Overview/>,
//       },
//       {
//         path:'/addproject',
//         element:<Addproject/>,
//       },
//       {
//         path:'/addProject1',
//         element:<AddProject1/>
//       },
//       {
//         path:'/projectlist',
//         element:<ProjectList/>,
//       },
   
//       {
//         path:'/table3',
//         element:<Table3/>,
//       },
//       {
//         path:'/dash',
//         element:<Dashboard/>,
//       },
//     ],
//   },

//   // {
//   //   path: '/detail',
//   //   element: <>detail</>,
//   // },
// ]);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );





import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; 
import { Provider } from 'react-redux';  // Import Provider from react-redux
import store from './store';  // Import the Redux store
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
import Addblogs from './Component/Management/Blog/blogadd';
import Addgraph from './Component/Overview/addgraph';
import Blogfront from './Component/Management/Blog/blogfront';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/dashboard', element: <Dashboardindex /> },
      { path: '/management', element: <Management /> },
      { path: '/detail', element: <Detail /> },
      { path: '/user', element: <UserProfile /> },
      { path: '/settings', element: <Setting /> },
      { path: '/login', element: <Login /> },
      { path: '/add-blogs', element: <Addblogs /> },
      { path: '/Blogfront', element: <Blogfront /> },
      { path: '/addgraph', element: <Addgraph /> },
      { path: '/chart', element: <Chart /> },
      { path: '/overview', element: <Overview /> },
      { path: '/addproject', element: <Addproject /> },
      { path: '/addProject1', element: <AddProject1 /> },
      { path: '/projectlist', element: <ProjectList /> },
      { path: '/table3', element: <Table3 /> },
      { path: '/dash', element: <Dashboard /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>  {/* Wrap everything with Provider */}
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
