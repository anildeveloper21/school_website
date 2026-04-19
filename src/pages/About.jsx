import PageWrapper from "../components/ui/PageWrapper";

export default function About() {
  return (
    <PageWrapper>
      <div className="pt-24 px-4 bg-gray-100 min-h-screen">
        
        <div className="max-w-6xl mx-auto">

          {/* Heading Section */}
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-blue-800">
              About Adarsh Vidya Mandir
            </h1>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
              Building strong foundations for a bright future through quality education,
              discipline, and values.
            </p>
          </div>

          {/* Main About Card */}
          <div className="bg-white border border-gray-200 shadow-lg rounded-2xl p-8 mb-8">
            <p className="text-gray-700 leading-relaxed text-lg">
              Adarsh Vidya Mandir is committed to providing high-quality education 
              that focuses on academic excellence along with character development. 
              Our institution believes in nurturing young minds with discipline, 
              respect, and responsibility. We aim to create a positive learning 
              environment where students can grow intellectually, socially, and emotionally.
              <br /><br />
              With experienced teachers, modern teaching methods, and a focus on overall 
              development, we prepare students not only for exams but for life. 
              Our school encourages creativity, critical thinking, and participation 
              in extracurricular activities.
            </p>
          </div>

          {/* Mission / Vision */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            
            <div className="bg-white border border-gray-200 shadow-md rounded-xl p-6 hover:shadow-xl transition">
              <h2 className="text-xl font-semibold text-blue-700 mb-3">
                Our Mission
              </h2>
              <p className="text-gray-600">
                To provide value-based education that inspires students to achieve 
                excellence and become responsible citizens of the nation.
              </p>
            </div>

            <div className="bg-white border border-gray-200 shadow-md rounded-xl p-6 hover:shadow-xl transition">
              <h2 className="text-xl font-semibold text-blue-700 mb-3">
                Our Vision
              </h2>
              <p className="text-gray-600">
                To be a leading institution that shapes future leaders through 
                innovation, discipline, and holistic development.
              </p>
            </div>

          </div>

          {/* Why Choose Us */}
          <div className="bg-white border border-gray-200 shadow-lg rounded-2xl p-8">
            <h2 className="text-2xl font-semibold text-blue-800 mb-6">
              Why Choose Us?
            </h2>

            <div className="grid md:grid-cols-2 gap-4 text-gray-700">
              <div className="flex items-center gap-3">
                <span className="text-yellow-500 text-xl">★</span>
                Experienced & qualified teachers
              </div>

              <div className="flex items-center gap-3">
                <span className="text-yellow-500 text-xl">★</span>
                Discipline & moral values
              </div>

              <div className="flex items-center gap-3">
                <span className="text-yellow-500 text-xl">★</span>
                Modern classrooms & facilities
              </div>

              <div className="flex items-center gap-3">
                <span className="text-yellow-500 text-xl">★</span>
                Focus on overall development
              </div>
            </div>
          </div>

        </div>
      </div>
    </PageWrapper>
  );
}