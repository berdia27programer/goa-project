import { Link } from "react-router";
import { AuthContext } from "../context/Auth.context";
import { useContext, useState } from "react";

export default function Nav() {
    const { user, logout } = useContext(AuthContext);
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Courses", path: "/courses" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <nav className="bg-green-900 text-white sticky top-0 z-50 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0 flex items-center">
                        <Link to="/" className="text-2xl font-black tracking-tighter text-green-400 hover:text-white transition-colors">
                            GOA<span className="text-white">.</span>
                        </Link>
                    </div>
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link 
                                key={link.name} 
                                to={link.path} 
                                className="font-medium hover:text-green-400 transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                        
                        <div className="flex items-center space-x-4 border-l border-green-800 pl-8">
                            {!user ? (
                                <>
                                    <Link to="/logIn" className="hover:text-green-400 font-medium">Log In</Link>
                                    <Link to="/signUp">
                                        <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full font-bold transition-all shadow-md">
                                            Sign Up
                                        </button>
                                    </Link>
                                </>
                            ) : (
                                <button 
                                    onClick={logout}
                                    className="bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-white border border-red-500/20 px-6 py-2 rounded-full font-bold transition-all"
                                >
                                    Logout
                                </button>
                            )}
                        </div>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button onClick={toggleMenu} className="text-green-400 outline-none">
                            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden bg-green-800 border-t border-green-700 animate-in slide-in-from-top duration-300">
                    <div className="px-4 pt-4 pb-6 space-y-2">
                        {navLinks.map((link) => (
                            <Link 
                                key={link.name} 
                                to={link.path} 
                                onClick={() => setIsOpen(false)}
                                className="block px-3 py-3 rounded-lg text-base font-medium hover:bg-green-700"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <hr className="border-green-700 my-4" />
                        {!user ? (
                            <div className="space-y-3">
                                <Link 
                                    to="/logIn" 
                                    onClick={() => setIsOpen(false)}
                                    className="block px-3 py-3 rounded-lg text-base font-medium text-green-400"
                                >
                                    Log In
                                </Link>
                                <Link to="/signUp" onClick={() => setIsOpen(false)}>
                                    <button className="w-full bg-green-500 text-white px-3 py-4 rounded-xl font-bold">
                                        Sign Up
                                    </button>
                                </Link>
                            </div>
                        ) : (
                            <button 
                                onClick={() => { logout(); setIsOpen(false); }}
                                className="w-full bg-red-600 text-white px-3 py-4 rounded-xl font-bold"
                            >
                                Logout
                            </button>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
}