import img from "../assets/imgs/IMG_0673.PNG";
import { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({ email: "", message: "" });

    const handleFormSubmit = e => {
        e.preventDefault();
        localStorage.setItem("Messages", JSON.stringify(formData));
        alert("Form was submitted!");
        setFormData({ email: "", message: "" });
    };

    return (
        <div className="min-h-screen bg-green-50 flex items-center justify-center p-6">
            <div className="max-w-5xl w-full bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col md:flex-row border-4 border-white">
                <div className="w-full md:w-1/2 p-12">
                    <h1 className="text-5xl font-black text-green-900 mb-4 tracking-tighter">Contact Us</h1>
                    <p className="text-green-600 mb-10 text-lg font-medium">Have questions? We're here to help.</p>
                    
                    <form onSubmit={handleFormSubmit} className="space-y-6">
                        <div>
                            <label className="text-xs font-black uppercase text-green-800 ml-1 mb-2 block">Email</label>
                            <input type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} placeholder="your@email.com" className="w-full px-5 py-4 rounded-2xl bg-green-50/50 border-2 border-transparent focus:border-green-500 outline-none transition-all" required />
                        </div>
                        <div>
                            <label className="text-xs font-black uppercase text-green-800 ml-1 mb-2 block">Message</label>
                            <textarea value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} placeholder="How can we help?" className="w-full px-5 py-4 rounded-2xl bg-green-50/50 border-2 border-transparent focus:border-green-500 outline-none transition-all min-h-[150px] resize-none" required />
                        </div>
                        <button type="submit" className="w-full bg-green-900 text-white font-black py-5 rounded-2xl shadow-xl hover:bg-green-800 transition-all active:scale-95">Send Message</button>
                    </form>
                </div>
                <div className="w-full md:w-1/2 bg-green-900 relative flex items-center justify-center p-12 overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-green-400/20 rounded-full blur-3xl -mr-20 -mt-20"></div>
                    <img src={img} alt="Contact" className="relative w-full rounded-3xl shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500" />
                </div>
            </div>
        </div>
    );
}