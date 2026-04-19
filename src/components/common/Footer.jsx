import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20 relative">

      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">

        {/* School Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-white">
            Adarsh Vidya Mandir
          </h2>
          <p className="text-gray-400">
            Near Old Power House, Kosi Kalan, Mathura
          </p>
          <p className="text-gray-400 mt-2">📞 7579851234</p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="/" className="hover:text-white transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-white transition">About</Link></li>
            <li><Link to="/admission" className="hover:text-white transition">Admission</Link></li>
            <li><Link to="/gallery" className="hover:text-white transition">Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
          </ul>
        </div>

        {/* About */}
        <div>
          <h2 className="text-2xl font-bold mb-4">About</h2>
          <p className="text-gray-400 leading-relaxed">
            We are committed to providing quality education and shaping future
            leaders with strong values, discipline, and knowledge for a brighter future.
          </p>
        </div>

      </div>

      <div className="border-t border-gray-700 py-6 px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-400 text-sm">

        {/* Left Side - Copyright */}
        <p className="text-center md:text-left">
          © {new Date().getFullYear()} Adarsh Vidya Mandir. All rights reserved.
        </p>

        {/* Right Side - Developer Credit */}
        <div className="flex justify-center md:justify-end">
          <div className="relative group">

            {/* Gradient Glow */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-70 blur-sm group-hover:opacity-100 transition"></div>

            {/* Content */}
            <div className="relative bg-gray-900 px-6 py-2 rounded-xl text-white text-sm font-medium border border-white/10">
              Design & Developed by{" "}
              <span className="text-blue-400 font-semibold">
                Anil Chaudhary
              </span>
            </div>

          </div>
        </div>

      </div>
    </footer>
  );
}