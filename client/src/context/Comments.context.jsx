/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useEffect, useCallback } from "react";

export const CommentContext = createContext();

const API_URL = "http://localhost:8008";

export function CommentProvider({ children }) {
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchComments = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const res = await fetch(`${API_URL}/comments`);
            if (!res.ok) throw new Error("Failed to fetch comments");
            const data = await res.json();
            setComments(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }, []);

    const addComment = async (commentData) => {
        setError(null);
        try {
            const res = await fetch(`${API_URL}/comments`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(commentData)
            });

            if (!res.ok) {
                throw new Error("Failed to create comment")
            }

            const newComment = await res.json();
            setComments(prev => [...prev, newComment]);
        } catch (err) {
            setError(err.message);
        }
    };

    useEffect(() => {
        fetchComments();
    }, [fetchComments]);

    return (
        <CommentContext.Provider value={{ comments, loading, error, fetchComments, addComment }}>
            {children}
        </CommentContext.Provider>
    );
}