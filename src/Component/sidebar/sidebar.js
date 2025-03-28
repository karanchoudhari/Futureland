// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { UserCircle2Icon, Home, Settings, MapPinIcon, LucidePlus, OutdentIcon,ListPlus,Projector,LucideProjector } from 'lucide-react';
// import Cookies from 'js-cookie'
// const Sidebar = () => {


//     const [isModalOpen, setModalOpen] = useState(false);
//     const openmodal =  () => {
      
//         alert('click')
//         // const data = await dispatch(getUserName());
//         // console.warn('ye data hai direct dispatch se', data.payload.name);
//         // setUser(data.payload)
//     }

//      const [showModal, setShowModal] = useState(false);
//      const [showfull , setShowfull] = useState(false);

//      useEffect(()=>{
//         if(Cookies.get('xdjadken')=== true){
//            showfull(true);
//         }
//      },[])


//     return (

//         <>
        
        
//         <div className="h-screen bg-gray-900 text-white border-r p-4">
//             <h1 className="text-2xl font-bold mb-6">Sidebar</h1>
//             <nav className="space-y-4 flex flex-col items-start">
//                 <Link  onClick={() => setModalOpen(true)}
//                     style={{ cursor: 'pointer', position: 'relative' }} to="/user" className="w-full flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-700">
//                     <UserCircle2Icon size={20} />
//                     <span>CompanyProfile</span>
//                 </Link>
//                 <Link to="/dashboard" className="w-full flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-700">
//                     <Home size={20} />
//                     <span>Dashboard</span>
//                 </Link>
//                 <Link to="/settings" className="w-full flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-700">
//                     <Settings size={20} />
//                     <span>Settings</span>
//                 </Link>
//                 <Link to="/management/company_management" className="w-full flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-700">
//                     <MapPinIcon size={20} />
//                     <span>Management</span>
//                 </Link>


//                 <Link to="/addProject" className="w-full flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-700">
//                 <ListPlus size={20} />
//                     <span>Projects</span>
//                 </Link>
              
//                 <Link to="/overview" className="w-full flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-700">
//                     <OutdentIcon size={20} />
//                     <span>Overview</span>
//                 </Link>
//             </nav>
        
//         </div>


        
//         </>
//     );
// };

// export default Sidebar;



import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserCircle2Icon, Home, Settings, MapPinIcon, ListPlus, OutdentIcon } from 'lucide-react';
import Cookies from 'js-cookie';

const Sidebar = () => {
    const [showfull, setShowfull] = useState(false);

    useEffect(() => {
        // Get cookie value and convert it into a boolean
        const isMaster = Cookies.get('xdjadken') === 'true';
        setShowfull(isMaster);
    }, []);

    return (
        <div className="h-screen bg-gray-900 text-white border-r p-4">
            <h1 className="text-2xl font-bold mb-6">Sidebar</h1>
            <nav className="space-y-4 flex flex-col items-start">
                <Link to="/dashboard" className="w-full flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-700">
                    <Home size={20} />
                    <span>Dashboard</span>
                </Link>

                <Link to="/addProject" className="w-full flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-700">
                            <ListPlus size={20} />
                            <span>Projects</span>
                        </Link>

                {showfull && (
                    <>
                        <Link to="/user" className="w-full flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-700">
                            <UserCircle2Icon size={20} />
                            <span>Company Profile</span>
                        </Link>

                        <Link to="/settings" className="w-full flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-700">
                            <Settings size={20} />
                            <span>Settings</span>
                        </Link>

                        <Link to="/management/company_management" className="w-full flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-700">
                            <MapPinIcon size={20} />
                            <span>Management</span>
                        </Link>

                        {/* <Link to="/addProject" className="w-full flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-700">
                            <ListPlus size={20} />
                            <span>Projects</span>
                        </Link> */}

                        {/* <Link to="/overview" className="w-full flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-700">
                            <OutdentIcon size={20} />
                            <span>Overview</span>
                        </Link> */}
                    </>
                )}
                <Link to="/overview" className="w-full flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-700">
                            <OutdentIcon size={20} />
                            <span>Overview</span>
                        </Link>
            </nav>
        </div>
    );
};

export default Sidebar;
