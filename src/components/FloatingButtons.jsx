import { Phone, ArrowUp } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  // 👇 Show button only after scrolling
  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 👇 Scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* 🔝 Scroll to Top Button (LEFT SIDE) */}
      {showTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 left-5 z-50 p-3 rounded-full bg-blue-600 text-white shadow-lg animate-pulse hover:bg-blue-700 transition"
        >
          <ArrowUp size={22} />
        </button>
      )}

      {/* 📞 WhatsApp + Call (RIGHT SIDE) */}
      <div className="fixed bottom-5 right-5 flex flex-col gap-3 z-50">

        {/* WhatsApp */}
        <a
          href="https://wa.me/919897523502"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition hover:scale-110"
        >
          <FaWhatsapp size={22} />
        </a>

        {/* Call */}
        <a
          href="tel:9897523502"
          className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition hover:scale-110"
        >
          <Phone size={22} />
        </a>

      </div>

      {/* 🔥 Custom Glow Animation */}
      <style>
        {`
          .animate-pulse {
            box-shadow: 0 0 0 0 rgba(37, 99, 235, 0.7);
            animation: pulseGlow 1.8s infinite;
          }

          @keyframes pulseGlow {
            0% {
              box-shadow: 0 0 0 0 rgba(37, 99, 235, 0.7);
            }
            70% {
              box-shadow: 0 0 0 15px rgba(37, 99, 235, 0);
            }
            100% {
              box-shadow: 0 0 0 0 rgba(37, 99, 235, 0);
            }
          }
        `}
      </style>
    </>
  );
}