import { useContext, useState } from "react";
import { CommentContext } from "../context/Comments.context";

export default function Comments() {
    const { comments, addComment } = useContext(CommentContext) || {};
    const [comment, setComment] = useState("");
    const [result, setResult] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (comment.trim()) {
            try {
                await addComment({ text: comment })

                setResult(comment);
                setComment("");
            } catch (err) {
                setResult("Failed to add comment.");
                console.log(`Error: ${err}`)
            }
        }
    };

    return (
        <div className="m-6 p-6 bg-white rounded-lg shadow-md max-w-md">
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    name="comment"
                    placeholder="Create a comment"
                    value={comment}
                    onChange={e => setComment(e.target.value)}
                    autoComplete="off"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button 
                    type="submit"
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200 cursor-pointer"
                >
                    Submit
                </button>
            </form>
            {result !== null && (
                <div className="mt-4 p-4 bg-green-100 border border-green-400 rounded-lg">
                    <strong className="text-green-800">Result:</strong>
                    <p className="text-green-700 mt-1">{result}</p>
                </div>
            )}
            {Array.isArray(comments) && comments.length > 0 && (
                <div className="mt-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-3">Comments:</h3>
                    <ul className="space-y-2">
                        {comments.map((c, idx) => (
                            <li 
                                key={idx}
                                className="p-3 bg-gray-100 border-l-4 border-blue-500 rounded text-gray-700"
                            >
                                {c.text || c}
                            </li> 
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}