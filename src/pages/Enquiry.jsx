import { useState } from "react";

export default function Enquiry() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="pt-24 max-w-xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Enquiry</h1>

      {!submitted ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
          className="space-y-4 bg-white p-6 shadow rounded-xl"
        >
          <input className="w-full p-3 border rounded" placeholder="Your Name" />
          <input className="w-full p-3 border rounded" placeholder="Phone" />
          <textarea className="w-full p-3 border rounded" placeholder="Message" />

          <button className="bg-blue-600 text-white px-6 py-3 rounded">
            Send
          </button>
        </form>
      ) : (
        <p className="text-green-600 text-lg">Enquiry submitted successfully!</p>
      )}
    </div>
  );
}