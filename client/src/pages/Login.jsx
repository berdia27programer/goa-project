import { useContext } from "react";
import { AuthContext } from "../context/Auth.context";
import img from "../assets/imgs/IMG_0717.PNG"

export default function Login() {
    const { login } = useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        login();
    };

    return (
        <div className="min-h-screen bg-green-50 flex items-center justify-center p-4">
            <div className="max-w-4xl w-full bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col md:flex-row border border-green-100">
                
                <div className="hidden md:block md:w-1/2 bg-green-100">
                    <img 
                        src={img} 
                        alt="Login Visual" 
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center">
                    <div className="mb-8 text-center md:text-left">
                        <h1 className="text-4xl font-black text-green-900">Log in</h1>
                        <p className="text-green-600 font-medium mt-2">Welcome Back!</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-green-800 ml-1">Email</label>
                            <input 
                                type="email" 
                                name="email" 
                                placeholder="Enter your email" 
                                className="w-full px-5 py-4 rounded-2xl bg-green-50 border-2 border-transparent focus:border-green-500 focus:bg-white outline-none transition-all"
                                required 
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-green-800 ml-1">Password</label>
                            <input 
                                type="password" 
                                name="password" 
                                placeholder="Create a password" 
                                className="w-full px-5 py-4 rounded-2xl bg-green-50 border-2 border-transparent focus:border-green-500 focus:bg-white outline-none transition-all"
                                required 
                            />
                        </div>

                        <button 
                            type="submit"
                            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-2xl shadow-lg shadow-green-200 transition-all hover:shadow-xl active:scale-95 mt-4"
                        >
                            Sign In
                        </button>
                    </form>

                    <div className="mt-8 text-center">
                        <p className="text-sm text-green-700">
                            Don't have an account? <span className="font-bold cursor-pointer hover:underline">Join GOA</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}