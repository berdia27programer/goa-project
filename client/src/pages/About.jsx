import Comments from "../components/Comments";
import img from "../assets/imgs/download (1).jpeg";

export default function About() {
    return (
        <div className="min-h-screen bg-white p-6 md:p-20">
            <div className="max-w-5xl mx-auto">
                <div className="mb-20">
                    <h1 className="text-7xl md:text-9xl font-black text-green-900 tracking-[ -0.05em] mb-12">The Academy.</h1>
                    
                    <div className="relative group mb-16">
                        <div className="absolute -bottom-6 -right-6 w-full h-full bg-green-100 rounded-3xl -z-10 group-hover:-bottom-4 group-hover:-right-4 transition-all"></div>
                        <img src={img} className="rounded-3xl shadow-xl w-full h-[400px] object-cover border-2 border-white" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                        <p className="text-2xl text-green-900 leading-snug font-bold">
                            GOA (Goal Oriented Academy) is Georgia's premier destination for high-impact programming education.
                        </p>
                        <p className="text-lg text-green-700 leading-relaxed italic border-l-4 border-green-500 pl-6">
                            With 2,000+ students, we specialize in building the next generation of software engineers, game devs, and tech leaders. We don't just teach code; we build careers.
                        </p>
                    </div>
                </div>

                <div className="bg-green-50 rounded-[3rem] p-8 md:p-16 border border-green-100">
                    <h2 className="text-3xl font-black mb-10 text-green-900">Community Feedback</h2>
                    <div className="bg-white rounded-3xl p-8 shadow-sm">
                        <Comments />
                    </div>
                </div>
            </div>
        </div>
    )
}