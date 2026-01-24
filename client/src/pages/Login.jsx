import { useContext } from "react";
import { AuthContext } from "../context/Auth.context";
import img from "../assets/imgs/IMG_0717.PNG"
import { Link } from "react-router"

export default function Login() {
    const { login } = useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        login(Object.fromEntries(formData));
    };

    const inputClass = "w-full px-6 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-green-500 focus:bg-white focus:ring-4 focus:ring-green-500/10 outline-none transition-all duration-300 font-medium";

    return (
        <div className="min-h-screen bg-green-50 flex items-center justify-center p-4">
            <div className="max-w-4xl w-full bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col md:flex-row border border-green-100">
                <div className="hidden md:block md:w-1/2 bg-green-100 p-10">
                    <img src={img} alt="Login" className="w-full h-full object-cover rounded-3xl shadow-lg" />
                </div>

                <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center">
                    <div className="mb-10">
                        <h1 className="text-4xl font-black text-green-900">Welcome Back</h1>
                        <p className="text-green-600 font-medium mt-2">Log in to continue your progress.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-green-800 ml-1">Email Address</label>
                            <input type="email" name="email" className={inputClass} required />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-green-800 ml-1">Password</label>
                            <input type="password" name="password" className={inputClass} required />
                        </div>

                        <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-2xl shadow-lg shadow-green-200 transition-all hover:-translate-y-1 active:scale-95">
                            Sign In
                        </button>
                    </form>

                    <div className="mt-10 pt-6 border-t border-gray-100 text-center">
                        <p className="text-sm text-green-700">
                            New to the academy? <Link to="/signUp" className="font-bold text-green-900 hover:underline">Join GOA Now</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}