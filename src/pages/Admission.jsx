import { useState } from "react";

export default function Admission() {
  const [form, setForm] = useState({
    name: "",
    class: "",
    parent: "",
    phone: "",
  });

  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.class || !form.parent || !form.phone) {
      setError("All fields are required");
      return;
    }

    setError("");
    alert("Form Submitted Successfully!");
  };

  return (
    <div className="pt-24 max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Admission Form</h1>

      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 shadow rounded-xl">
        <input
          type="text"
          placeholder="Student Name"
          className="w-full p-3 border rounded"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          type="text"
          placeholder="Class"
          className="w-full p-3 border rounded"
          onChange={(e) => setForm({ ...form, class: e.target.value })}
        />

        <input
          type="text"
          placeholder="Parent Name"
          className="w-full p-3 border rounded"
          onChange={(e) => setForm({ ...form, parent: e.target.value })}
        />

        <input
          type="tel"
          placeholder="Phone Number"
          className="w-full p-3 border rounded"
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />

        {error && <p className="text-red-500">{error}</p>}

        <button className="bg-blue-600 text-white px-6 py-3 rounded">
          Submit
        </button>
      </form>

      {/* Timeline */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-4">Admission Process</h2>
        <ul className="space-y-2">
          <li>1. Fill the form</li>
          <li>2. Document Verification</li>
          <li>3. Admission Confirmation</li>
        </ul>
      </div>
    </div>
  );
}