import { createContext, useState, useEffect, useContext } from "react";
import { AuthContext } from "./Auth.context";

export const courseContext = createContext();

export function CourseProvider({ children }) {
    const { user } = useContext(AuthContext)

    const [courses, setCourses] = useState(() => {
        const saved = localStorage.getItem("mock_courses");
        return saved ? JSON.parse(saved) : [];
    });
    
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        localStorage.setItem("mock_courses", JSON.stringify(courses));
    }, [courses]);

    const addcourse = async (formData) => {
        setLoading(true);
        try {
            await new Promise(resolve => setTimeout(resolve, 800));

            const title = formData.get("title");
            const imageFile = formData.get("image");
            const imageUrl = URL.createObjectURL(imageFile);

            const newCourse = {
                id: Date.now(),
                title: title,
                imagePath: imageUrl,
                email: user?.email
            };

            setCourses(prev => [...prev, newCourse]);
        } catch (err) {
            setError("Failed to add course");
        } finally {
            setLoading(false);
        }
    };

    const deletecourse = async (courseId, courseEmail) => {
        setLoading(true);
        try {
            if (user?.email === courseEmail) {
                setCourses(prev => prev.filter(course => course.id !== courseId));
            } else {
                setError("You can only delete your own courses");
            }
        } catch (err) {
            setError("Failed to delete course");
        } finally {
            setLoading(false);
        }
    };

    return (
        <courseContext.Provider value={{ courses, loading, error, addcourse, deletecourse }}>
            {children}
        </courseContext.Provider>
    );
}