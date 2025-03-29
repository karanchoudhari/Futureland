// import React from 'react';

// const Login = () => {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted");
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-900">
//       <div className="max-w-md w-full p-8 bg-white rounded-2xl shadow-lg">
//         <div className="flex justify-center mb-6">
//           <img 
//             src="http://13.202.13.248:3000/static/media/atom1.a701aa274e3a701996f2.png" 
//             alt="Logo" 
//             className="h-16"
//           />
//         </div>
//         <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">Login</h2>
//         <form className="space-y-6" onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label htmlFor="username" className="block text-gray-600 mb-1">Username</label>
//             <input
//               type="text"
//               id="username"
//               className="w-full px-4 py-2 text-gray-900 bg-transparent border-2 border-gray-300 rounded-md focus:outline-none focus:ring-0 focus:border-green-400"
//               placeholder="Enter your username"
//               required
//             />
//           </div>

//           <div className="mb-4">
//             <label htmlFor="password" className="block text-gray-600 mb-1">Password</label>
//             <input
//               type="password"
//               id="password"
//               className="w-full px-4 py-2 text-gray-900 bg-transparent border-2 border-gray-300 rounded-md focus:outline-none focus:ring-0 focus:border-green-400"
//               placeholder="Enter your password"
//               required
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full py-3 bg-green-500 text-black font-bold rounded-md hover:bg-green-400 transition"
//           >
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;





import { useEffect, useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { CreateSession } from '../../FeatureRedux/CompanyReducer/loginCompany';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'js-cookie'
export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({ email: '', password: '' });

    const dispatch = useDispatch();
    const { data, error, isLoading } = useSelector((state) => state.CreateSession);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.email || !formData.password) {
            alert("Please enter both email and password");
            return;
        }

        dispatch(CreateSession(formData)); // Send email & password in a single object
        console.log("Form submitted with:", formData);
    };

    useEffect(() => {
        if (data && !error && !isLoading) {
            localStorage.setItem('token', data.company);
            console.log(data , "this is data")
            const ans = Boolean(data.isMaster) && data.isMaster;
            Cookies.set('xdjadken', data.isMaster);
            window.location.href = '/dashboard';
        }
    }, [data, error, isLoading]);

    return (
        <>
            <style>{`
                @keyframes float {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                    100% { transform: translateY(0px); }
                }
            `}</style>
            <div className="h-screen flex items-center justify-center bg-gray-100">
                <div className="bg-white p-10 rounded-xl shadow-2xl w-full max-w-md">
                    <div className="text-center mb-8">
                        <img 
                            src="http://13.202.13.248:3000/static/media/atom1.a701aa274e3a701996f2.png"
                            alt="Prodify Logo"
                            className="mx-auto w-32 h-auto mb-4"
                            style={{ animation: "float 1.5s ease-in-out infinite" }}
                        />
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-5">
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-5 relative">
                            <label className="block text-sm font-medium text-gray-700">Password</label>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                placeholder="Enter your password"
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={formData.password}
                                onChange={handleChange}
                            />
                            <div
                                className="absolute top-10 right-3 cursor-pointer"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </div>
                        </div>
                        <div className="flex items-center justify-end mb-6">
                            <a href="#" className="text-blue-500 text-sm">Forgot password?</a>
                        </div>
                        <button 
                            type="submit"
                            className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition"
                            disabled={isLoading}
                        >
                            {isLoading ? "Logging in..." : "Login to your account"}
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}
