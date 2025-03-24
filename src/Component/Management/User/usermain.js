import React, { useState, useEffect } from 'react';
import { CheckCircle, X, Edit, Trash2 } from 'lucide-react';

const UserMain = () => {
    // State to manage form inputs
    const [formData, setFormData] = useState({
        companyName: '',
        name: '',
        email: '',
        phone: '',
        password: '',
        expiryDate: '',
        forgetPassword: false,
    });

    // State to manage table data
    const [tableData, setTableData] = useState([]);

    // State to manage modal visibility
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Load data from localStorage on component mount
    useEffect(() => {
        const storedData = localStorage.getItem('userData');
        if (storedData) {
            setTableData(JSON.parse(storedData));
        }
    }, []);

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Add new data to tableData
        const newData = [...tableData, formData];
        setTableData(newData);

        // Save to localStorage
        localStorage.setItem('userData', JSON.stringify(newData));

        // Show success modal
        setIsModalOpen(true);

        // Reset form
        setFormData({
            companyName: '',
            name: '',
            email: '',
            phone: '',
            password: '',
            expiryDate: '',
            forgetPassword: false,
        });
    };

    // Handle delete action
    const handleDelete = (index) => {
        const updatedData = tableData.filter((_, i) => i !== index);
        setTableData(updatedData);
        localStorage.setItem('userData', JSON.stringify(updatedData));
    };

    // Handle edit action (placeholder for now)
    const handleEdit = (index) => {
        alert(`Edit functionality for row ${index + 1}`);
    };

    // Close modal when clicking outside or on the cross icon
    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-50 py-10">
            <div className="container mx-auto p-6 bg-white rounded-lg shadow-2xl max-w-4xl">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">User Management</h1>

                {/* Form with Floating Labels */}
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Company Name */}
                    <div className="relative">
                        <input
                            type="text"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleInputChange}
                            required
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 peer"
                            placeholder=" "
                        />
                        <label className="absolute left-3 top-3 text-gray-500 transition-all duration-200 pointer-events-none peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-2 peer-focus:text-sm peer-focus:text-blue-500 bg-white px-1 -translate-y-2">
                            Company Name
                        </label>
                    </div>

                    {/* Name */}
                    <div className="relative">
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 peer"
                            placeholder=" "
                        />
                        <label className="absolute left-3 top-3 text-gray-500 transition-all duration-200 pointer-events-none peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-2 peer-focus:text-sm peer-focus:text-blue-500 bg-white px-1 -translate-y-2">
                            Name
                        </label>
                    </div>

                    {/* Email */}
                    <div className="relative">
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 peer"
                            placeholder=" "
                        />
                        <label className="absolute left-3 top-3 text-gray-500 transition-all duration-200 pointer-events-none peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-2 peer-focus:text-sm peer-focus:text-blue-500 bg-white px-1 -translate-y-2">
                            Email
                        </label>
                    </div>

                    {/* Phone */}
                    <div className="relative">
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 peer"
                            placeholder=" "
                        />
                        <label className="absolute left-3 top-3 text-gray-500 transition-all duration-200 pointer-events-none peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-2 peer-focus:text-sm peer-focus:text-blue-500 bg-white px-1 -translate-y-2">
                            Phone
                        </label>
                    </div>

                    {/* Password */}
                    <div className="relative">
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            required
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 peer"
                            placeholder=" "
                        />
                        <label className="absolute left-3 top-3 text-gray-500 transition-all duration-200 pointer-events-none peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-2 peer-focus:text-sm peer-focus:text-blue-500 bg-white px-1 -translate-y-2">
                            Password
                        </label>
                    </div>

                    {/* Expiry Date */}
                    <div className="relative">
                        <input
                            type="date"
                            name="expiryDate"
                            value={formData.expiryDate}
                            onChange={handleInputChange}
                            required
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 peer"
                            placeholder=" "
                        />
                        <label className="absolute left-3 top-3 text-gray-500 transition-all duration-200 pointer-events-none peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-2 peer-focus:text-sm peer-focus:text-blue-500 bg-white px-1 -translate-y-2">
                            Expiry Date
                        </label>
                    </div>

                    {/* Forget Password */}
                    <div className="flex items-center space-x-2 col-span-2">
                        <input
                            type="checkbox"
                            name="forgetPassword"
                            checked={formData.forgetPassword}
                            onChange={handleInputChange}
                            className="form-checkbox h-5 w-5 text-blue-600"
                        />
                        <label className="text-gray-700">Forget Password</label>
                    </div>

                    {/* Submit Button */}
                    <div className="col-span-2">
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-3 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                        >
                            Submit
                        </button>
                    </div>
                </form>

                {/* Table */}
                <h2 className="text-3xl font-bold text-center text-gray-800 mt-10 mb-6">User Data</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white rounded-lg shadow-lg overflow-hidden">
                        <thead className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                            <tr>
                                <th className="py-4 px-6 text-left">Company Name</th>
                                <th className="py-4 px-6 text-left">Name</th>
                                <th className="py-4 px-6 text-left">Email</th>
                                <th className="py-4 px-6 text-left">Phone</th>
                                <th className="py-4 px-6 text-left">Password</th>
                                <th className="py-4 px-6 text-left">Expiry Date</th>
                                <th className="py-4 px-6 text-left">Forget Password</th>
                                <th className="py-4 px-6 text-left">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableData.map((data, index) => (
                                <tr key={index} className="border-b hover:bg-gray-50 transition-all">
                                    <td className="py-4 px-6">{data.companyName}</td>
                                    <td className="py-4 px-6">{data.name}</td>
                                    <td className="py-4 px-6">{data.email}</td>
                                    <td className="py-4 px-6">{data.phone}</td>
                                    <td className="py-4 px-6">{data.password}</td>
                                    <td className="py-4 px-6">{data.expiryDate}</td>
                                    <td className="py-4 px-6">{data.forgetPassword ? 'Yes' : 'No'}</td>
                                    <td className="py-4 px-6 flex space-x-4">
                                        <button
                                            onClick={() => handleEdit(index)}
                                            className="text-blue-500 hover:text-blue-700"
                                        >
                                            <Edit className="w-5 h-5" />
                                        </button>
                                        <button
                                            onClick={() => handleDelete(index)}
                                            className="text-red-500 hover:text-red-700"
                                        >
                                            <Trash2 className="w-5 h-5" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Success Modal */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
                    onClick={closeModal} // Close modal when clicking outside
                >
                    <div className="bg-white p-8 rounded-lg shadow-lg text-center relative">
                        <button
                            onClick={closeModal}
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                        >
                            <X className="w-6 h-6" />
                        </button>
                        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Success!</h2>
                        <p className="text-gray-600">Your data has been submitted successfully.</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserMain;