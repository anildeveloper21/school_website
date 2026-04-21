import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Menu,
  X,
  Home,
  Info,
  Image,
  Phone,
  User,
  GraduationCap,
} from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-blue-600 font-semibold"
      : "text-gray-700 hover:text-blue-600 transition font-medium";

  const navItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "Admission", path: "/admission", icon: User },
    { name: "About", path: "/about", icon: Info },
    { name: "Result", path: "/result", icon: GraduationCap },
    { name: "Director", path: "/director", icon: User },
    { name: "Gallery", path: "/gallery", icon: Image },
    { name: "Contact", path: "/contact", icon: Phone },
  ];

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      className="fixed w-full top-0 bg-white/80 backdrop-blur-lg border-b border-gray-200 z-50"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <img src="/icon.jpeg" alt="logo" />
          </div>
          <h1 className="font-bold text-lg md:text-xl text-gray-800">
            Adarsh Vidya Mandir
          </h1>
        </div>

        {/* ✅ Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item, i) => {
            const isResult = item.name === "Result";

            return (
              <div key={i} className="relative">
                <NavLink to={item.path} className={linkClass}>
                  {item.name}
                </NavLink>

                {/* 🔴 NEW Badge */}
                {isResult && (
                  <span className="absolute -top-2 -right-4 bg-red-500 text-white text-[10px] px-1.5 py-[2px] rounded-full animate-pulse shadow">
                    NEW
                  </span>
                )}
              </div>
            );
          })}

          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            Apply Now
          </button>
        </div>

        {/* 📱 Mobile Button */}
        <button onClick={() => setOpen(!open)} className="md:hidden">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* ✅ Mobile Menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden px-4 pb-4"
        >
          <div className="bg-white rounded-2xl shadow-lg p-4 space-y-2">

            {navItems.map((item, i) => {
              const Icon = item.icon;
              const isResult = item.name === "Result";

              return (
                <div key={i} className="relative">

                  <NavLink
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition ${
                        isActive
                          ? "bg-blue-100 text-blue-600"
                          : "text-gray-700 hover:bg-gray-100"
                      }`
                    }
                  >
                    <Icon size={18} />
                    {item.name}
                  </NavLink>

                  {/* 🔴 SAME BADGE (TOP RIGHT) */}
                  {isResult && (
                    <span className="absolute -top-2 right-3 bg-red-500 text-white text-[10px] px-1.5 py-[2px] rounded-full animate-pulse shadow">
                      NEW
                    </span>
                  )}

                </div>
              );
            })}

            {/* CTA Button */}
            <button className="w-full mt-2 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
              Apply Now
            </button>

          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}