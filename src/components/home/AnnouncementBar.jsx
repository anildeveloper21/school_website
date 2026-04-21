import { X } from "lucide-react";
import { useState } from "react";

export default function AnnouncementBar() {
  const [show, setShow] = useState(true);

  if (!show) return null;

  return (
    <div className="w-full top-0 z-50 bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 text-black shadow">

      <div className="relative overflow-hidden">

        {/* Moving Text */}
        <div className="whitespace-nowrap animate-[scroll_18s_linear_infinite] py-2 font-semibold text-sm md:text-base">
          🎉 100% OFF on Admission Fees – Limited Time Offer! &nbsp;&nbsp;&nbsp;
          🎉 100% OFF on Admission Fees – Limited Time Offer! &nbsp;&nbsp;&nbsp;
          🎉 100% OFF on Admission Fees – Limited Time Offer!
        </div>

        {/* Close Button */}
        {/* <button
          onClick={() => setShow(false)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-black hover:text-red-600"
        >
          <X size={18} />
        </button> */}

      </div>

      {/* Custom animation */}
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
        `}
      </style>
    </div>
  );
}