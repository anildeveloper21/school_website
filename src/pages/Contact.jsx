export default function Contact() {
  return (
    <div className="pt-24 p-4 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

      <p>📍 Near Old Power House, Kosi Kalan, Mathura</p>
      <p>📞 7579851234</p>

      {/* Map */}
      <iframe
        className="w-full h-64 mt-4 rounded"
        src="https://maps.google.com/maps?q=kosikalan%20mathura&t=&z=13&ie=UTF8&iwloc=&output=embed"
      ></iframe>

      {/* Form */}
      <form className="mt-6 space-y-4 bg-white p-6 shadow rounded-xl">
        <input className="w-full p-3 border rounded" placeholder="Name" />
        <input className="w-full p-3 border rounded" placeholder="Email" />
        <textarea className="w-full p-3 border rounded" placeholder="Message" />
        <button className="bg-blue-600 text-white px-6 py-3 rounded">
          Send Message
        </button>
      </form>
    </div>
  );
}