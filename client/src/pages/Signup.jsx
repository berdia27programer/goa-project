import { useContext } from "react";
import { AuthContext } from "../context/Auth.context";
import img from "../assets/imgs/IMG_0718.PNG"
import { Link } from "react-router"

export default function Signup() {
    const { signup } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        if (data.password !== data.comfPass) return alert("Passwords do not match!");
        signup(data);
    };

    const inputClass = "w-full px-5 py-3 rounded-2xl bg-green-50/50 border-2 border-transparent focus:border-green-500 focus:bg-white focus:ring-4 focus:ring-green-500/10 outline-none transition-all duration-300";

    return (
        <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-green-100 via-white to-emerald-50 flex items-center justify-center p-6">
            <div className="max-w-6xl w-full bg-white/80 backdrop-blur-xl rounded-[3rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row-reverse border border-white">
                <div className="hidden lg:block lg:w-1/2 relative">
                    <img src={img} alt="Signup" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent to-white/10" />
                </div>

                <div className="w-full lg:w-1/2 p-8 md:p-20 flex flex-col justify-center">
                    <div className="mb-10 text-center lg:text-left">
                        <h1 className="text-5xl font-black text-green-900 tracking-tight">Create Account</h1>
                        <p className="text-green-600 font-semibold mt-3 text-lg">Join the GOA community today!</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div className="space-y-1">
                                <label className="text-xs uppercase tracking-widest font-bold text-green-800 ml-2">Full Name</label>
                                <input type="text" name="name" placeholder="John Doe" className={inputClass} required />
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs uppercase tracking-widest font-bold text-green-800 ml-2">Email</label>
                                <input type="email" name="email" placeholder="name@example.com" className={inputClass} required />
                            </div>
                        </div>

                        <div className="space-y-1">
                            <label className="text-xs uppercase tracking-widest font-bold text-green-800 ml-2">Password</label>
                            <input type="password" name="password" placeholder="••••••••" className={inputClass} required />
                        </div>

                        <div className="space-y-1">
                            <label className="text-xs uppercase tracking-widest font-bold text-green-800 ml-2">Confirm Password</label>
                            <input type="password" name="comfPass" placeholder="••••••••" className={inputClass} required />
                        </div>

                        <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-5 rounded-2xl shadow-xl shadow-green-200 hover:shadow-green-300 transition-all hover:-translate-y-1 active:scale-95 mt-4">
                            Start Your Journey
                        </button>
                    </form>

                    <p className="mt-10 text-center text-sm text-green-700 font-medium">
                        Already a member? <Link to="/logIn" className="text-green-900 font-black hover:underline underline-offset-4 ml-1">Log in here</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}