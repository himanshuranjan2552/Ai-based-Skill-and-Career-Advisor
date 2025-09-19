import Image from "next/image";

const CareerSuggestPage = async () => {
  <main className="container mx-auto px-4 py-12">
    <section className="text-center mb-16" data-aos="fade-up">
      <h2 className="text-4xl font-bold text-gray-800 mb-4">
        Discover Your Engineering Career Path
      </h2>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        Explore tailored career suggestions based on your engineering skills and
        interests.
      </p>
    </section>

    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div
        className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 card-hover"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <Image
          src="http://static.photos/technology/640x360/1"
          alt="Software Engineering"
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <div className="flex items-center mb-2">
            <h3 className="text-xl font-semibold text-gray-800">
              Software Engineering
            </h3>
          </div>
          <p className="text-gray-600 mb-4">
            Design, develop, and maintain software systems. Specialize in
            front-end, back-end, or full-stack development.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
              JavaScript
            </span>
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
              Python
            </span>
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
              Cloud
            </span>
          </div>
          <button
            onClick={() => (window.location.href = "/software-engineer.html")}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors duration-300"
          >
            Explore Path
          </button>
        </div>
      </div>

      {/* Mechanical Engineering */}
      <div
        className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 card-hover"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <Image
          src="http://static.photos/industry/640x360/2"
          alt="Mechanical Engineering"
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <div className="flex items-center mb-2">
            <i data-feather="tool" className="text-red-500 mr-2"></i>
            <h3 className="text-xl font-semibold text-gray-800">
              Mechanical Engineering
            </h3>
          </div>
          <p className="text-gray-600 mb-4">
            Design mechanical systems, from small components to large machinery,
            across various industries.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">
              CAD
            </span>
            <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">
              Thermodynamics
            </span>
            <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">
              Robotics
            </span>
          </div>
          <button
            onClick={() => (window.location.href = "/mechanical-engineer.html")}
            className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg transition-colors duration-300"
          >
            Explore Path
          </button>
        </div>
      </div>

      {/* Electrical Engineering */}
      <div
        className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 card-hover"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <Image
          src="http://static.photos/science/640x360/3"
          alt="Electrical Engineering"
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <div className="flex items-center mb-2">
            <i data-feather="zap" className="text-yellow-500 mr-2"></i>
            <h3 className="text-xl font-semibold text-gray-800">
              Electrical Engineering
            </h3>
          </div>
          <p className="text-gray-600 mb-4">
            Work with electrical systems, from small circuits to large power
            grids and electronic devices.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
              Circuit Design
            </span>
            <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
              Power Systems
            </span>
            <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
              Embedded Systems
            </span>
          </div>
          <button
            onClick={() => (window.location.href = "/electrical-engineer.html")}
            className="w-full bg-yellow-600 hover:bg-yellow-700 text-white py-2 px-4 rounded-lg transition-colors duration-300"
          >
            Explore Path
          </button>
        </div>
      </div>

      {/* Civil Engineering */}
      <div
        className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 card-hover"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <Image
          src="http://static.photos/construction/640x360/4"
          alt="Civil Engineering"
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <div className="flex items-center mb-2">
            <i data-feather="home" className="text-green-500 mr-2"></i>
            <h3 className="text-xl font-semibold text-gray-800">
              Civil Engineering
            </h3>
          </div>
          <p className="text-gray-600 mb-4">
            Design and oversee construction projects including buildings,
            bridges, and infrastructure systems.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
              Structural Analysis
            </span>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
              Urban Planning
            </span>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
              Sustainability
            </span>
          </div>
          <button
            onClick={() => (window.location.href = "/civil-engineer.html")}
            className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition-colors duration-300"
          >
            Explore Path
          </button>
        </div>
      </div>

      {/* Biomedical Engineering */}
      <div
        className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 card-hover"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <Image
          src="http://static.photos/medical/640x360/5"
          alt="Biomedical Engineering"
          class="w-full h-48 object-cover"
        />
        <div class="p-6">
          <div class="flex items-center mb-2">
            <i data-feather="activity" class="text-purple-500 mr-2"></i>
            <h3 class="text-xl font-semibold text-gray-800">
              Biomedical Engineering
            </h3>
          </div>
          <p class="text-gray-600 mb-4">
            Combine engineering principles with medical sciences to design
            healthcare technologies and devices.
          </p>
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
              Medical Devices
            </span>
            <span class="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
              Biomechanics
            </span>
            <span class="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
              Tissue Engineering
            </span>
          </div>
          <button
            onclick="window.location.href='/biomedical-engineer.html'"
            class="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg transition-colors duration-300"
          >
            Explore Path
          </button>
        </div>
      </div>

      {/* Data Science */}
      <div
        class="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 card-hover"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <Image
          src="http://static.photos/technology/640x360/6"
          alt="Data Science"
          class="w-full h-48 object-cover"
        />
        <div class="p-6">
          <div class="flex items-center mb-2">
            <i data-feather="database" class="text-indigo-500 mr-2"></i>
            <h3 class="text-xl font-semibold text-gray-800">Data Science</h3>
          </div>
          <p class="text-gray-600 mb-4">
            Extract insights from complex data sets using statistical methods,
            machine learning, and programming.
          </p>
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">
              Python
            </span>
            <span class="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">
              Machine Learning
            </span>
            <span class="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">
              Big Data
            </span>
          </div>
          <button
            onclick="window.location.href='/data-scientist.html'"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg transition-colors duration-300"
          >
            Explore Path
          </button>
        </div>
      </div>
    </section>

    <section className="mt-20 bg-white rounded-xl shadow-md p-8" data-aos="fade-up">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Not Sure Which Path to Choose?
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Take our quick assessment to get personalized career recommendations
          based on your skills and interests.
        </p>
      </div>
      <div className="max-w-md mx-auto">
        <button
          onclick="window.location.href='/assessment.html'"
          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
        >
          Start Career Assessment
        </button>
      </div>
    </section>
  </main>;
};

export default CareerSuggestPage;
