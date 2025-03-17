
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Detail = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const project = location.state?.project;

    if (!project) {
        return <p className="text-xl text-gray-500">No project data available.</p>;
    }

    return (
        <div className="w-full h-screen overflow-y-scroll scrollbar-hide bg-gray-50">
            <div className="p-4 sm:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Side - Project Details */}
                    <div className="col-span-1">
                        <button
                            onClick={() => navigate(-1)}
                            className="flex items-center mb-6 px-4 py-2 text-gray-700 font-bold bg-white rounded-lg shadow-sm hover:bg-gray-100 hover:shadow-md transition-all"
                        >
                            <ArrowLeft className="mr-2" />
                            Back
                        </button>

                        <h1 className="text-3xl font-bold text-gray-900 mb-6">
                            {project.project_name}
                        </h1>

                        <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
                            {['Sector', 'Cost', 'Status', 'Country', 'State', 'City', 'Start Date', 'Completion Date'].map((field, index) => (
                                <div key={index} className="mb-4">
                                    <p className="text-gray-600 font-medium">
                                        <strong>{field}:</strong> {project[field.toLowerCase()]}
                                    </p>
                                    <div className="border-t border-gray-200 mt-2"></div>
                                </div>
                            ))}

                            <button
                                className="mt-6 w-full bg-blue-500 text-white font-bold py-2 rounded-lg shadow-sm hover:bg-blue-600 hover:shadow-md transition-all"
                            >
                                View Document
                            </button>
                        </div>
                    </div>

                    {/* Right Side - Map and Additional Info */}
                    <div className="col-span-1 lg:col-span-2">
                        <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
                            <div className="h-48 sm:h-64 md:h-96 bg-gray-100 rounded-lg flex items-center justify-center text-gray-500">
                                <p className="text-xl">Map Placeholder</p>
                            </div>
                        </div>

                        <div className="mt-8">
                            <div className="w-full sm:w-3/4 md:w-1/2 bg-white p-6 rounded-lg shadow-sm">
                                <p className="text-gray-600 font-medium mt-2">
                                    <strong>Registrar Office:</strong> Sector 44, Gurugram
                                </p>
                                <p className="text-gray-600 font-medium mt-2">
                                    <strong>Circle Rate:</strong> $100/sq.ft
                                </p>
                                <p className="text-gray-600 font-medium mt-2">
                                    <strong>District Magistrate:</strong> Mr. John Doe
                                </p>
                                <p className="text-gray-600 font-medium mt-2">
                                    <strong>Population of District:</strong> 1.2 million
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Detail;