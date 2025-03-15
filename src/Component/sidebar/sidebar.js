import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { UserCircle2Icon, Home, Settings, MapPinIcon, LucidePlus, OutdentIcon } from 'lucide-react';

const Sidebar = () => {


    const [isModalOpen, setModalOpen] = useState(false);
    const openmodal =  () => {
      
        alert('click')
        // const data = await dispatch(getUserName());
        // console.warn('ye data hai direct dispatch se', data.payload.name);
        // setUser(data.payload)
    }

     const [showModal, setShowModal] = useState(false);


    return (

        <>
        
        
        <div className="h-screen bg-gray-900 text-white border-r p-4">
            <h1 className="text-2xl font-bold mb-6">Sidebar</h1>
            <nav className="space-y-4 flex flex-col items-start">
                <Link  onClick={() => setModalOpen(true)}
                    style={{ cursor: 'pointer', position: 'relative' }} to="/user" className="w-full flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-700">
                    <UserCircle2Icon size={20} />
                    <span>User</span>
                </Link>
                <Link to="/dashboard" className="w-full flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-700">
                    <Home size={20} />
                    <span>Dashboard</span>
                </Link>
                <Link to="/settings" className="w-full flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-700">
                    <Settings size={20} />
                    <span>Settings</span>
                </Link>
                <Link to="/management" className="w-full flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-700">
                    <MapPinIcon size={20} />
                    <span>Management</span>
                </Link>

                {/* karn sharma */}
                {/* <Link to="/addproject" className="w-full flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-700">
                <LucidePlus size={20} />
                    <span>Add-Project</span>
                </Link> */}

                <Link to="/addProject1" className="w-full flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-700">
                <LucidePlus size={20} />
                    <span>Add-Project1</span>
                </Link>
                {/* <button className="w-full flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-700">
                    <LucidePlus size={20} />
                    <span>Add-Project</span>
                </button> */}
                {/* <Link to="" className="w-full flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-700">
                    <MapPinnedIcon size={20} />
                    <span>KML</span>
                </Link> */}
                <Link to="/overview" className="w-full flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-700">
                    <OutdentIcon size={20} />
                    <span>Overview</span>
                </Link>
            </nav>
            {/* {showModal && <Addprojectmodal onClose={() => setShowModal(false)} onSave={() => {}} />} */}
        </div>


        
        </>
    );
};

export default Sidebar;
