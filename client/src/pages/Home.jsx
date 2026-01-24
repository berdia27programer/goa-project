import video from "../assets/videos/video.mp4"
import img from "../assets/imgs/download (1).jpeg"

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-green-50 to-white font-sans selection:bg-green-200">
            <main className="max-w-7xl mx-auto px-6 py-12 md:py-24">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-16 mb-24">
                    <div className="text-center lg:text-left space-y-8 flex-1">
                        <h1 className="text-5xl md:text-8xl font-black text-green-900 leading-[0.9] tracking-tighter">
                            Master the <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-400">Future of Tech</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-green-700 font-medium max-w-xl">
                            Join over 2,000 students at GOA. Site designed by 
                            <span className="ml-2 px-3 py-1 bg-green-100 text-green-800 rounded-full border border-green-200">Berdia Bekauri</span>
                        </p>
                    </div>

                    <div className="flex-1 relative group">
                        <div className="absolute -inset-4 bg-green-400/20 rounded-full blur-3xl group-hover:bg-green-400/30 transition duration-1000"></div>
                        <img 
                            src={img} 
                            alt="GOA Logo" 
                            className="relative w-full max-w-lg rounded-[3rem] shadow-2xl border-[12px] border-white transform hover:rotate-2 hover:scale-105 transition-all duration-500"
                        />
                    </div>
                </div>

                <div className="relative rounded-[3rem] overflow-hidden shadow-2xl bg-black aspect-video ring-1 ring-white/20">
                    <video src={video} controls className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity" />
                </div>
            </main>
        </div>
    )
}