import { useContext, useState } from "react"
import { courseContext } from "../context/Courses.context"
import { AuthContext } from "../context/Auth.context"
import programming from "../assets/imgs/download (1).jpeg"
import gamedev from "../assets/imgs/download (2).jpeg"
import mma from "../assets/imgs/download.jpeg"
import robotics from "../assets/imgs/download (3).jpeg"
import math from "../assets/imgs/download (4).jpeg"

export default function Courses() {
    const { courses: apiCourses = [], addcourse, deletecourse } = useContext(courseContext);
    const { user } = useContext(AuthContext)
    const [title, setTitle] = useState("");
    const [image, setImage] = useState(null);

    const staticCourses = [
        { title: "Programming", img: programming },
        { title: "Game development", img: gamedev },
        { title: "MMA (Martial arts)", img: mma },
        { title: "Robotics", img: robotics },
        { title: "Math", img: math }
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!title.trim() || !image) return;
        const formData = new FormData();
        formData.append("title", title);
        formData.append("image", image);
        await addcourse(formData);
        setTitle("");
        setImage(null);
        e.target.reset();
    };

    return (
        <div className="min-h-screen bg-green-50 p-6 md:p-12">
            <header className="max-w-6xl mx-auto mb-16 text-center">
                <h1 className="text-6xl font-black text-green-900 uppercase tracking-tighter italic">Our Courses</h1>
                <div className="h-2 w-24 bg-green-500 mx-auto mt-4 rounded-full"></div>
            </header>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
                {[...staticCourses, ...apiCourses].map((course, index) => (
                    <div key={index} className="group bg-white rounded-[2.5rem] p-6 shadow-sm hover:shadow-2xl transition-all duration-500 border border-white hover:-translate-y-2">
                        <div className="overflow-hidden rounded-3xl h-56 mb-6">
                            <img src={course.img || course.imagePath} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" onError={(e) => { e.target.src = "https://via.placeholder.com/300" }} />
                        </div>
                        <h2 className="text-2xl font-black text-green-900">{course.title}</h2>
                        <div className="mt-4 flex justify-between items-center">
                            {user && (user.email === course.email || user.email === "berdiabekauri5@gmail.com") && (
                                <button onClick={() => deletecourse(course.id, course.email)} className="bg-red-50 text-red-600 px-4 py-2 rounded-xl text-sm font-bold hover:bg-red-600 hover:text-white transition-colors">Delete</button>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {user?.email === "berdiabekauri5@gmail.com" && (
                <div className="mt-32 max-w-2xl mx-auto bg-green-900 p-10 rounded-[3rem] shadow-2xl text-white">
                    <h2 className="text-3xl font-black mb-8 text-center">Create New Course</h2>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <input type="text" placeholder="Course Title" className="w-full bg-white/10 border border-white/20 p-4 rounded-2xl outline-none focus:bg-white/20 transition-all text-white placeholder:text-white/50" value={title} onChange={e => setTitle(e.target.value)} />
                        <input type="file" className="w-full text-sm text-green-100 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-500 file:text-white hover:file:bg-green-400" onChange={e => setImage(e.target.files[0])} />
                        <button className="w-full bg-white text-green-900 p-4 rounded-2xl font-black hover:bg-green-400 hover:text-white transition-all transform active:scale-95">Add Course to Catalog</button>
                    </form>
                </div>
            )}
        </div>
    );
}