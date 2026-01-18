import { useContext } from "react";
import { AuthContext } from "../context/Auth.context";
import img from "../assets/imgs/IMG_0718.PNG"

export default function Signup() {
    const { signup } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        signup();
    };

    return (
        <div className="min-h-screen bg-green-50 flex items-center justify-center p-4">
            <div className="max-w-5xl w-full bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row-reverse border border-green-100">
                
                <div className="hidden lg:block lg:w-1/2 bg-green-100">
                    <img 
                        src={img} 
                        alt="Signup Visual" 
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="w-full lg:w-1/2 p-8 md:p-16 flex flex-col justify-center">
                    <div className="mb-8">
                        <h1 className="text-4xl font-black text-green-900">Create Account</h1>
                        <p className="text-green-600 font-medium mt-2">Join the GOA community today!</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-1">
                            <label className="text-sm font-bold text-green-800 ml-1">Full Name</label>
                            <input 
                                type="text" 
                                name="name" 
                                placeholder="Enter your name" 
                                className="w-full px-5 py-3 rounded-xl bg-green-50 border-2 border-transparent focus:border-green-500 focus:bg-white outline-none transition-all"
                                required 
                            />
                        </div>

                        <div className="space-y-1">
                            <label className="text-sm font-bold text-green-800 ml-1">Email</label>
                            <input 
                                type="email" 
                                name="email" 
                                placeholder="Enter your email" 
                                className="w-full px-5 py-3 rounded-xl bg-green-50 border-2 border-transparent focus:border-green-500 focus:bg-white outline-none transition-all"
                                required 
                            />
                        </div>

                        <div className="space-y-1">
                            <label className="text-sm font-bold text-green-800 ml-1">Password</label>
                            <input 
                                type="password" 
                                name="password" 
                                placeholder="Create a password" 
                                className="w-full px-5 py-3 rounded-xl bg-green-50 border-2 border-transparent focus:border-green-500 focus:bg-white outline-none transition-all"
                                required 
                            />
                        </div>

                        <div className="space-y-1">
                            <label className="text-sm font-bold text-green-800 ml-1">Confirm Password</label>
                            <input 
                                type="password" 
                                name="comfPass" 
                                placeholder="Confirm your password" 
                                className="w-full px-5 py-3 rounded-xl bg-green-50 border-2 border-transparent focus:border-green-500 focus:bg-white outline-none transition-all"
                                required 
                            />
                        </div>

                        <button 
                            type="submit"
                            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-green-200 transition-all active:scale-95 mt-6"
                        >
                            Create Account
                        </button>
                    </form>

                    <p className="mt-8 text-center text-sm text-green-700">
                        Already have an account? <span className="font-bold cursor-pointer hover:underline text-green-900">Log in</span>
                    </p>
                </div>
            </div>
        </div>
    )
}