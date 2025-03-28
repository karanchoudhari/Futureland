// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'; 
// import { Provider } from 'react-redux';  // Import Provider from react-redux
// import store from './store';  // Import the Redux store
// import App from './App';
// import './index.css';  // Import global styles
// import Dashboardindex from './Component/Dashboard/dashboardindex';
// import Setting from './Component/setting';
// import Management from './Component/Management/management';
// import Chart from './Component/Overview/chartComponent';
// import Overview from './Component/Overview/overview';
// import Addproject from './Component/Projectsfolder/addproject';
// import Table3 from './Component/Table/table3';
// import Dashboard from './Component/Dashboard/dashboard';
// import Detail from './Component/Table/detail';
// import ProjectList from './Component/Projectsfolder/projectlist';
// import AddProject1 from './Component/Projectsfolder/addProject1';
// import UserProfile from './Component/UserProfile/userprofile';
// import Login from './Component/Loginpage/login';
// import Addblogs from './Component/Management/Blog/blogadd';
// // import Addgraph from './Component/Overview/addgraph';
// // import Blogfront from './Component/Management/Blog/blogfront';
// import Graphfront from './Component/Overview/graphfront';
// import Usermain from './Component/Management/User/usermain';
// import CompanyManageTable from './Component/Management/CompanyManageTable';
// import Blogfront from './Component/Management/Blog/blogfront';
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     children: [
//       { path: '/dashboard', element: <Dashboardindex /> },
//       { path: '/management', element: <Management /> , children:[
//         { path: '/management/company_management', element: <CompanyManageTable/>    },
//         { path: '/management/blog', element: <Blogfront/> },
//         { path: '/management/graph', element: <Graphfront/> },
//       ] },
//       { path: '/detail', element: <Detail /> },
//       { path: '/user', element: <UserProfile /> },
//       { path: '/settings', element: <Setting /> },
      
//       { path: '/add-blogs', element: <Addblogs /> },
//       { path: '/Blogfront', element: <Blogfront /> },
//       // { path: '/addgraph', element: <Addgraph /> },

//       { path: '/graphfront', element: <Graphfront/> },
//       { path: '/chart', element: <Chart /> },
//       { path: '/overview', element: <Overview /> },
//       { path: '/addproject', element: <Addproject /> },
//       { path: '/addProject1', element: <AddProject1 /> },
//       { path: '/projectlist', element: <ProjectList /> },
//       { path: '/table3', element: <Table3 /> },
//       { path: '/dash', element: <Dashboard /> },
//       { path: '/usermain', element: <Usermain /> },
//     ],
    
//   },
//   { path: '/login', element: <Login /> },
// ]);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Provider store={store}>  {/* Wrap everything with Provider */}
//       <RouterProvider router={router} />
//     </Provider>
//   </React.StrictMode>
// );






import React , {useState , useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Navigate, Outlet, useNavigate } from 'react-router-dom'; 
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import './index.css';
import Dashboardindex from './Component/Dashboard/dashboardindex';
import Setting from './Component/setting';
import Management from './Component/Management/management';
import Chart from './Component/Overview/chartComponent';
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
import Graphfront from './Component/Overview/graphfront';
import Usermain from './Component/Management/User/usermain';
import CompanyManageTable from './Component/Management/CompanyManageTable';
import Blogfront from './Component/Management/Blog/blogfront';

// 🔒 Protected Route Component
const ProtectedRoute = ({ element }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate =  useNavigate();



  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('token');

      if (token) {
        setLoading(true);
        setIsAuthenticated(true);
        setLoading(false);
      } else {
        setLoading(false);
        setIsAuthenticated(false);
        navigate('/login'); // Navigate to signin page
      }
    };

    checkAuth();
  }, [navigate]);

  if (loading) {
    return <div>Loading...</div>;  
  }

  return isAuthenticated ? element : null;
};

const router = createBrowserRouter([
  { path: '/login', element: <Login /> }, // Public Route

  {
    path: '/',
    element: <ProtectedRoute element={<App/>}  />, // Protects all child routes
    children: [
      // { path: '/', element: <App /> },
      { path: 'dashboard', element: <Dashboardindex /> },
      { path: 'management', element: <Management />, children: [
          { path: '/management/company_management', element: <CompanyManageTable /> },
          { path: '/management/blog', element: <Blogfront /> },
          { path: '/management/graph', element: <Graphfront /> },
        ] 
      },
      { path: '/detail', element: <Detail /> },
      { path: '/user', element: <UserProfile /> },
      { path: '/settings', element: <Setting /> },
      { path: '/add-blogs', element: <Addblogs /> },
      { path: '/Blogfront', element: <Blogfront /> },
      { path: '/graphfront', element: <Graphfront /> },
      { path: '/chart', element: <Chart /> },
      { path: '/overview', element: <Overview /> },
      { path: '/addproject', element: <Addproject />  },
      // { path: '/addProject1', element: <AddProject1 /> },
      { path: '/projectlist', element: <ProjectList /> },
      { path: '/table3', element: <Table3 /> },
      { path: '/dash', element: <Dashboard /> },
      { path: '/usermain', element: <Usermain /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
