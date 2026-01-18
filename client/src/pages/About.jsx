import Comments from "../components/Comments";
import img from "../assets/imgs/download (1).jpeg";

export default function About() {
    return (
        <div className="min-h-screen bg-green-50 p-6 md:p-12 font-sans">
            <div className="max-w-4xl mx-auto">
                <div className="text-center space-y-8 mb-16">
                    <h1 className="text-5xl md:text-7xl font-black text-green-900 uppercase tracking-tighter">
                        About us
                    </h1>
                    
                    <div className="flex justify-center">
                        <img 
                            src={img} 
                            alt="GOA Academy" 
                            className="rounded-2xl shadow-xl border-8 border-white w-full max-w-2xl transform hover:rotate-1 transition-transform"
                        />
                    </div>

                    <p className="text-lg md:text-xl text-green-800 leading-relaxed max-w-3xl mx-auto bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-green-100">
                        <span className="font-bold text-green-600">GOA (Goal Oriented Academy)</span> is the best academy in Georgia to learn programming. 
                        In GOA, you can learn how to create websites, programs, apps, games and more. 
                        There are more than <span className="font-bold text-green-600">2,000 children</span> in GOA learning programming. 
                        You can also get a job being a programming teacher!
                    </p>
                </div>

                <div className="bg-green-900 text-white p-8 rounded-3xl shadow-2xl">
                    <h2 className="text-2xl md:text-3xl font-bold italic mb-6 text-center text-green-400">
                        Give us comments about this academy
                    </h2>
                    <div className="bg-white rounded-xl p-4 text-black">
                        <Comments />
                    </div>
                </div>
            </div>
        </div>
    )
}