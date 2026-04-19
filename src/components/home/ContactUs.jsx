import React from "react";
import { User, Mail, MessageSquare } from "lucide-react";

const ContactUs = () => {
  return (
    <section className="w-full py-20 px-6 bg-gradient-to-br from-blue-50 to-gray-100">
      
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* Left Content */}
        <div>
          <p className="text-sm tracking-widest text-teal-500 mb-4 uppercase">
            Your Future Starts Here
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Ready to Begin <br />
            <span className="bg-gradient-to-r from-blue-600 to-teal-400 bg-clip-text text-transparent">
              Your Journey?
            </span>
          </h1>

          <p className="mt-6 text-gray-600 text-lg">
            Join a community where every student is known, every talent is
            celebrated, and every aspiration is supported.
          </p>
        </div>

        {/* Form */}
        <div className="bg-white shadow-xl rounded-2xl p-8 border border-gray-200">

          <form className="space-y-4">

            <div className="flex items-center border border-gray-300 rounded-lg px-3">
              <User className="text-gray-400 mr-2" size={18} />
              <input className="w-full p-3 outline-none" placeholder="Name" />
            </div>

            <div className="flex items-center border border-gray-300 rounded-lg px-3">
              <Mail className="text-gray-400 mr-2" size={18} />
              <input className="w-full p-3 outline-none" placeholder="Email" />
            </div>

            <div className="flex items-start border border-gray-300 rounded-lg px-3">
              <MessageSquare className="text-gray-400 mr-2 mt-3" size={18} />
              <textarea
                className="w-full p-3 outline-none"
                placeholder="Message"
              />
            </div>

            <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg font-semibold shadow-md hover:scale-105 transition">
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
};

export default ContactUs;