import video from "../assets/videos/video.mp4"
import img from "../assets/imgs/download (1).jpeg"

export default function Home() {
    return (
        <div className="min-h-screen bg-green-50 font-sans p-4 md:p-10">
            <main className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between gap-10 mb-16">
                    <div className="text-center md:text-left space-y-4 flex-1">
                        <h1 className="text-4xl md:text-6xl font-extrabold text-green-900 leading-tight">
                            Welcome to the world of <span className="text-green-600">GOA!</span>
                        </h1>
                        <h2 className="text-xl md:text-2xl text-green-700 font-medium">
                            Site made by <span className="underline decoration-green-400">Berdia Bekauri</span>
                        </h2>
                    </div>

                    <div className="flex-1 flex justify-center">
                        <img 
                            src={img} 
                            alt="img" 
                            className="w-full max-w-md rounded-3xl shadow-2xl border-4 border-white transform hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                </div>

                <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl bg-black aspect-video">
                    <video 
                        src={video} 
                        controls 
                        className="w-full h-full object-cover"
                    />
                </div>
            </main>
        </div>
    )
}