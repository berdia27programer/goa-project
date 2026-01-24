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
        <nav className="bg-white text-gray-800 sticky top-0 z-50 shadow-lg border-b border-green-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="shrink-0 flex items-center">
                        <Link to="/" className="text-2xl font-black tracking-tighter bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
                            GOA<span className="text-green-600">.</span>
                        </Link>
                    </div>
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link 
                                key={link.name} 
                                to={link.path} 
                                className="font-semibold text-gray-700 hover:text-green-600 transition-colors relative group"
                            >
                                {link.name}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-600 to-green-400 group-hover:w-full transition-all duration-300"></span>
                            </Link>
                        ))}
                        
                        <div className="flex items-center space-x-4 border-l border-green-200 pl-8">
                            {!user ? (
                                <>
                                    <Link to="/logIn" className="text-gray-700 hover:text-green-600 font-semibold transition-colors">Log In</Link>
                                    <Link to="/signUp">
                                        <button className="gradient-btn bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white px-6 py-2 rounded-full font-bold transition-all shadow-lg">
                                            Sign Up
                                        </button>
                                    </Link>
                                </>
                            ) : (
                                <button 
                                    onClick={logout}
                                    className="bg-red-500/10 hover:bg-red-500 text-red-600 hover:text-white border-2 border-red-500 px-6 py-2 rounded-full font-bold transition-all"
                                >
                                    Logout
                                </button>
                            )}
                        </div>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button onClick={toggleMenu} className="text-green-600 outline-none">
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
                <div className="md:hidden bg-green-50 border-t border-green-200 animate-in slide-in-from-top duration-300">
                    <div className="px-4 pt-4 pb-6 space-y-2">
                        {navLinks.map((link) => (
                            <Link 
                                key={link.name} 
                                to={link.path} 
                                onClick={() => setIsOpen(false)}
                                className="block px-3 py-3 rounded-lg text-base font-semibold text-gray-700 hover:bg-green-100 hover:text-green-700 transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <hr className="border-green-200 my-4" />
                        {!user ? (
                            <div className="space-y-3">
                                <Link 
                                    to="/logIn" 
                                    onClick={() => setIsOpen(false)}
                                    className="block px-3 py-3 rounded-lg text-base font-semibold text-green-600"
                                >
                                    Log In
                                </Link>
                                <Link to="/signUp" onClick={() => setIsOpen(false)}>
                                    <button className="w-full bg-gradient-to-r from-green-600 to-green-500 text-white px-3 py-4 rounded-xl font-bold hover:shadow-lg transition-shadow">
                                        Sign Up
                                    </button>
                                </Link>
                            </div>
                        ) : (
                            <button 
                                onClick={() => { logout(); setIsOpen(false); }}
                                className="w-full bg-red-500 text-white px-3 py-4 rounded-xl font-bold hover:bg-red-600 transition-colors"
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