import { createContext, useState, useEffect } from "react";

export const courseContext = createContext();

export function CourseProvider({ children }) {
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
                imagePath: imageUrl
            };

            setCourses(prev => [...prev, newCourse]);
        } catch (err) {
            setError("Failed to add course");
        } finally {
            setLoading(false);
        }
    };

    return (
        <courseContext.Provider value={{ courses, loading, error, addcourse }}>
            {children}
        </courseContext.Provider>
    );
}