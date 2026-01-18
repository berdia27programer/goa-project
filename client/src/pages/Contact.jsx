import img from "../assets/imgs/IMG_0673.PNG";
import { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({
        email: "",
        message: ""
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFormSubmit = e => {
        e.preventDefault();
        const { email, message } = formData;

        if (!email || !message) {
            alert("Please fill out both fields.");
            return;
        }

        localStorage.setItem("Messages", JSON.stringify({ Email: email, Message: message }));
        alert("Form was submitted!");
        setFormData({ email: "", message: "" });
    };

    return (
        <div className="min-h-screen bg-green-50 flex items-center justify-center p-6">
            <div className="max-w-5xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
                
                <div className="w-full md:w-1/2 p-8 md:p-12">
                    <h1 className="text-4xl font-black text-green-900 mb-2">Contact Us</h1>
                    <p className="text-green-700 mb-8 text-lg">Send us a message! We'll get back to you soon.</p>
                    
                    <form onSubmit={handleFormSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-bold text-green-900 mb-2">Email Address</label>
                            <input 
                                type="email" 
                                name="email" 
                                value={formData.email} 
                                onChange={handleChange} 
                                placeholder="Enter your email" 
                                className="w-full px-4 py-3 rounded-xl border-2 border-green-100 focus:border-green-500 focus:ring-0 outline-none transition-all placeholder:text-green-300"
                                required 
                            />
                        </div>
                        
                        <div>
                            <label className="block text-sm font-bold text-green-900 mb-2">Message</label>
                            <textarea 
                                name="message" 
                                value={formData.message} 
                                onChange={handleChange} 
                                placeholder="Enter your message" 
                                className="w-full px-4 py-3 rounded-xl border-2 border-green-100 focus:border-green-500 focus:ring-0 outline-none transition-all placeholder:text-green-300 min-h-[150px] resize-none"
                                required
                            ></textarea>
                        </div>

                        <button 
                            type="submit" 
                            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-green-200 transition-all active:scale-95"
                        >
                            Submit Message
                        </button>
                    </form>
                </div>

                <div className="w-full md:w-1/2 bg-green-900 flex items-center justify-center p-8">
                    <img 
                        src={img} 
                        alt="Contact Illustration" 
                        className="w-full h-auto max-w-sm rounded-2xl shadow-xl transform md:rotate-3"
                    />
                </div>
            </div>
        </div>
    );
}