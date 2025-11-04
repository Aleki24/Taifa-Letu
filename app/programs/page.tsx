import Image from "next/image";

export const metadata = {
  title: "Programs | Taifa Letu Homeschool and Tuition",
  description:
    "Explore Taifa Letu Homeschool and Tuition programs — from Kindergarten to Senior High School, offering CBC, Cambridge, and IB curricula with flexible homeschooling and blended learning options.",
};

export default function ProgramsPage() {
  return (
    <main className="bg-white text-gray-800">
      {/* Header Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-50 to-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What We Offer
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Taifa Letu Homeschool and Tuition provides transformative
            homeschooling programs designed for learners from Kindergarten
            through Senior High School — blending personalized instruction with
            world-class curricula including Kenya’s CBC, Cambridge, and IB
            systems.
          </p>
        </div>
      </section>

      {/* Program Cards */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Kindergarten */}
          <div className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition">
            <div className="relative h-56 w-full">
              <Image
                src="/program-kindergarten.jpg"
                alt="Kindergarten students learning through play"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold text-blue-600 mb-3">
                Kindergarten
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Early Learning Village serves children aged 4–8 in Nairobi,
                Kenya, introducing foundational skills through play-based
                learning. Learners are introduced to early literacy and
                numeracy under the CBC and British Early Years Foundation
                frameworks.
              </p>
            </div>
          </div>

          {/* Preparatory */}
          <div className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition">
            <div className="relative h-56 w-full">
              <Image
                src="/program-preparatory.jpg"
                alt="Preparatory students engaged in homeschooling activity"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold text-blue-600 mb-3">
                Preparatory
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Our Cambridge and CBC preparatory programs for ages 5–11 build a
                solid academic base while nurturing curiosity, creativity, and
                essential life skills. Students develop confidence and a love
                for learning that prepares them for global education pathways.
              </p>
            </div>
          </div>

          {/* Junior High School */}
          <div className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition">
            <div className="relative h-56 w-full">
              <Image
                src="/program-junior.jpg"
                alt="Junior high school students collaborating in class"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold text-blue-600 mb-3">
                Junior High School
              </h2>
              <p className="text-gray-700 leading-relaxed">
                The Junior High program builds on the CBC’s competency-based
                structure while aligning with Cambridge Lower Secondary and IB
                Middle Years frameworks. We equip learners with academic and
                problem-solving skills to transition smoothly into Senior High
                and beyond.
              </p>
            </div>
          </div>

          {/* Senior High School */}
          <div className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition">
            <div className="relative h-56 w-full">
              <Image
                src="/program-senior.jpg"
                alt="Senior high school students preparing for exams"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold text-blue-600 mb-3">
                Senior High School
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Our Senior High program offers rigorous academic training and
                exam preparation for IGCSE (Years 10–11), A Levels (Years
                12–13), IB Diploma, and the CBC Senior School. Learners receive
                personalized support in university guidance, career readiness,
                and leadership development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Curricula Overview */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-blue-700 mb-6">
            Supported Curricula
          </h2>
          <p className="text-gray-700 mb-10">
            Taifa Letu Homeschool proudly offers flexible programs aligned with
            global and national education systems.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-blue-600 mb-3">
                CBC (Kenya)
              </h3>
              <p className="text-gray-700">
                Emphasizes creativity, practical learning, and holistic
                development tailored to the Kenyan education framework.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-blue-600 mb-3">
                Cambridge International
              </h3>
              <p className="text-gray-700">
                Provides globally recognized qualifications from Cambridge
                Primary to A Levels, focusing on academic excellence and global
                citizenship.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-blue-600 mb-3">
                International Baccalaureate (IB)
              </h3>
              <p className="text-gray-700">
                Encourages inquiry-based, student-centered learning that builds
                critical thinkers and compassionate world citizens.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
