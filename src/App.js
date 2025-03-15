import './App.css';
import { Outlet } from 'react-router-dom';
import Sidebar from './Component/sidebar/sidebar';

function App() {
  return (
    <div className="flex h-screen">  {/* Use flex-row for side-by-side layout */}
      {/* Sidebar (Left) - Fixed Width */}
      <div className="w-[15%] h-full">
        <Sidebar />
      </div>

      {/* Main Content (Right) - Takes Remaining Space */}
      <div className="flex-1 bg-gray-100">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
