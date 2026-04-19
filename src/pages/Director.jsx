export default function Director() {
  const leaders = [
    {
      name: "Tarun Gupta",
      role: "Director",
      image: "/tarun.jpeg",
      desc: "A visionary leader committed to providing quality education and building a strong foundation for students."
    },
    {
      name: "No name",
      role: "Chairperson",
      image: "/chairperson.jpg",
      desc: "Focused on guiding the institution towards excellence with discipline, values, and innovation."
    },
    {
      name: "Dr. Monika Gupta",
      role: "Principal",
      image: "/monika.jpeg",
      desc: "Dedicated to academic excellence and holistic development of students through modern education."
    },
  ];

  return (
    <div className="pt-24 bg-gray-100 min-h-screen px-4">

      {/* Page Heading */}
      <div className="max-w-5xl mx-auto text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-800">
          Our Leadership
        </h1>
        <p className="text-gray-600 mt-3">
          Meet the guiding pillars behind Adarsh Vidya Mandir
        </p>
      </div>
  

      {/* Leadership Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">

        {leaders.map((person, i) => (
          <div
            key={i}
            className="bg-white shadow-md rounded-xl p-6 text-center border border-gray-200 hover:shadow-xl transition"
          >
            {/* Image */}
            <img
              src={person.image}
              alt={person.name}
              className="w-28 h-28 mx-auto rounded-2xl object-cover mb-4 border-4 border-blue-100"
            />

            {/* Name */}
            <h3 className="text-lg font-semibold text-blue-800">
              {person.name}
            </h3>

            {/* Role */}
            <p className="text-sm text-gray-500 mb-2">
              {person.role}
            </p>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed">
              {person.desc}
            </p>
          </div>
        ))}

      </div>
    </div>
  );
}