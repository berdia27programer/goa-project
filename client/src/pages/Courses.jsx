import { useContext, useState } from "react"
import { courseContext } from "../context/Courses.context"

import programming from "../assets/imgs/download (1).jpeg"
import gamedev from "../assets/imgs/download (2).jpeg"
import mma from "../assets/imgs/download.jpeg"
import robotics from "../assets/imgs/download (3).jpeg"
import math from "../assets/imgs/download (4).jpeg"
import { AuthContext } from "../context/Auth.context"

export default function Courses() {
    const { courses: apiCourses = [], addcourse, deletecourse, error: contextError } = useContext(courseContext);
    const { user } = useContext(AuthContext)

    const [title, setTitle] = useState("");
    const [image, setImage] = useState(null);
    const [error, setError] = useState("");

    const staticCourses = [
        { title: "Programming", img: programming },
        { title: "Game development", img: gamedev },
        { title: "MMA (Martial arts)", img: mma },
        { title: "Robotics", img: robotics },
        { title: "Math", img: math }
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        if (!title.trim() || !image) return setError("Missing fields");

        try {
            const formData = new FormData();
            formData.append("title", title);
            formData.append("image", image);

            await addcourse(formData);

            setTitle("");
            setImage(null);
            e.target.reset();
        } catch (err) {
            setError("Error adding course");
        }
    };

    return (
        <div className="min-h-screen bg-green-50 p-6">
            <h1 className="text-4xl font-black text-center text-green-900 uppercase">Our Courses</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
                {[...staticCourses, ...apiCourses].map((course, index) => (
                    <div key={index} className="bg-white rounded-3xl p-4 shadow-lg">
                        <img 
                            src={course.img || course.imagePath} 
                            alt={course.title} 
                            className="w-full h-48 object-cover rounded-2xl" 
                            onError={(e) => { e.target.src = "https://via.placeholder.com/300" }}
                        />
                        <h2 className="text-xl font-bold mt-4 text-green-800">{course.title}</h2>
                        {user && (user.email === course.email || user.email === "berdiabekauri5@gmail.com") && <button onClick={() => deletecourse(course.id, course.email)} className=" bg-red-700 text-white p-3 rounded-full font-bold cursor-pointer">Delete course</button>}
                    </div>
                ))}
            </div>

            {user?.email === "berdiabekauri5@gmail.com" && (
                <div className="mt-20 max-w-md mx-auto bg-white p-8 rounded-3xl shadow-xl border border-green-200">
                    <h2 className="text-2xl font-bold text-center mb-6">Create New Course</h2>
                    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                        <input 
                            type="text" 
                            placeholder="Course Title"
                            className="border p-3 rounded-full"
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                        />
                        <input 
                            type="file" 
                            className="p-2"
                            onChange={e => setImage(e.target.files[0])}
                        />
                        <button className="bg-green-600 text-white p-3 rounded-full cursor-pointer font-bold">
                            Add Course
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
}