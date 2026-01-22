import { Route, Routes } from "react-router"
import Home from "./pages/Home"
import About from "./pages/About"
import Courses from "./pages/Courses"
import Contact from "./pages/Contact"
import Signup from "./pages/Signup"
import Nav from "./components/Nav"
import Login from "./pages/Login"
import { useEffect } from "react"

export default function App() {
  useEffect(() => {
    // This is the standard Tawk.to snippet
    var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
    (function() {
      var s1 = document.createElement("script"),
          s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      // REPLACE THE URL BELOW WITH THE ONE FROM YOUR "WIDGET CODE" BOX
      s1.src = 'https://embed.tawk.to/6951492704efae197bede483/default'; 
      s1.charset = 'UTF-8';
      s1.setAttribute('crossorigin', '*');
      s0.parentNode.insertBefore(s1, s0);
    })();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-green-50 selection:bg-green-200 selection:text-green-900">
      <header className="fixed top-0 w-full z-50">
        <Nav />
      </header>
      <main className="flex-grow pt-20"> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signUp" element={<Signup />} />
          <Route path="/logIn" element={<Login />} />
        </Routes>
      </main>
      <footer className="bg-green-900 text-white py-12 px-4 mt-auto">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl md:text-5xl font-black italic tracking-widest uppercase">
              JOIN <span className="text-green-600">GOA</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-bold text-green-200 tracking-tight">
              BECOME A CHAD
            </h2>
          </div>

          <div className="w-24 h-1 bg-green-500 mx-auto rounded-full opacity-50"></div>

          <div className="space-y-4">
            <p className="text-green-300 font-medium hover:text-white transition-colors">
              Facebook: <a href="https://www.facebook.com/nika11keshelava" target="_blank" rel="noreferrer" className="underline decoration-green-500 underline-offset-4">Visit our Page</a>
            </p>
            <p className="text-sm text-green-500 font-bold uppercase tracking-widest pt-4">
              ©2025 <span className="text-white">Berdia Bekauri</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}